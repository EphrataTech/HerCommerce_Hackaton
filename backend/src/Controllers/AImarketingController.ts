// src/controllers/AImarketingController.ts

import { type Request, type Response } from 'express';
import { 
    insertAISuggestion, 
    getAISuggestions,
    type AISuggestion
} from '../model/AISuggestion.model.js';
import { generateMarketingContent } from '../services/AIGenerator.service.js'; 

// NOTE: We continue to use the MOCK_USER_ID for authentication bypass.
const MOCK_USER_ID = '00000000-0000-0000-0000-000000000001'; 


// Define the shape of the user input data for AI generation (remains the same)
interface GenerateSuggestionBody {
    product_image_url: string; 
    product_description: string;
    price: number;
    social_media_platforms: string[];
}


/**
 * Generates marketing content using the Gemini API and saves it to the database.
 * Now handles multiple target platforms selected by the user.
 */
export const generateSuggestionController = async (req: Request<{}, {}, GenerateSuggestionBody>, res: Response) => {
    try {
        const userId = MOCK_USER_ID; 
        
        const { 
            product_description, 
            price, 
            social_media_platforms 
        } = req.body;

        // 1. Basic Validation
        if (!product_description || !price || social_media_platforms.length === 0) {
            return res.status(400).json({ error: "Missing required fields: description, price, or platform." });
        }

        const successfulGenerations: AISuggestion[] = [];
        const failedPlatforms: string[] = [];
        const postTime = new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString();

        // 2. Iterate over all requested social media platforms
        for (const targetPlatform of social_media_platforms) {
            
            // 2a. CALL THE GEMINI SERVICE for the specific platform
            const geminiResponse = await generateMarketingContent(product_description, price, targetPlatform);

            if (!geminiResponse) {
                failedPlatforms.push(targetPlatform);
                continue; // Skip to the next platform if this one failed
            }

            // 2b. Prepare the data for database insertion
            const dbData: Omit<AISuggestion, 'id' | 'created_at' | 'is_published' | 'user_rating' | 'product_context_id'> = {
                user_id: userId,
                source_platform: targetPlatform,
                amharic_caption: geminiResponse.amharic_caption,
                english_caption: geminiResponse.english_caption,
                suggested_hashtags: geminiResponse.hashtags,
                suggested_post_time: postTime,
            };

            // 2c. Insert the data into the database
            const newSuggestion = await insertAISuggestion(dbData);

            if (newSuggestion) {
                successfulGenerations.push(newSuggestion);
            } else {
                failedPlatforms.push(targetPlatform);
            }
        }
        
        // 3. Final Response Summary
        if (successfulGenerations.length > 0) {
             const message = failedPlatforms.length > 0
                ? `Successfully generated content for ${successfulGenerations.length} platform(s). Failed for: ${failedPlatforms.join(', ')}.`
                : `AI marketing content generated and saved for all ${successfulGenerations.length} platform(s).`;

            res.status(201).json({ 
                message: message, 
                suggestions: successfulGenerations // Return all successful suggestions
            });
        } else {
            // If the loop ran but nothing succeeded
            res.status(500).json({ 
                error: "Content generation failed for all platforms. Check Gemini API key or service logs.",
                failed_platforms: failedPlatforms 
            });
        }

    } catch (error) {
        console.error("Error generating AI suggestion:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred during AI content generation." });
    }
};


/**
 * Fetches all past AI marketing suggestions for the user. (UNCHANGED)
 */
export const getSuggestionsController = async (req: Request, res: Response) => {
    // ... (logic remains the same)
};