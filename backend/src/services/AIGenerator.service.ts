// src/services/AIGenerator.service.ts

import { gemini } from '../config/gemini.js';

// Define the structure for the AI's complex response (JSON format)
interface GeminiResponse {
    amharic_caption: string;
    english_caption: string;
    hashtags: string[];
}

/**
 * Sends a detailed, contextual prompt to the Gemini API to generate marketing content.
 * @param productDetails - User input (description, price, image context).
 * @param platform - The target social media platform (e.g., 'tiktok').
 * @returns An object containing localized captions and hashtags, or null on failure.
 */
export async function generateMarketingContent(
    productDescription: string, 
    price: number, 
    platform: string
): Promise<GeminiResponse | null> {
    
    // We request the output in a clean JSON format for easy parsing.
    const prompt = `
        You are an expert marketing assistant for Ethiopian women entrepreneurs named AdeyBiz.
        Your goal is to create compelling, engaging, and localized social media content.
        
        **Product Context:**
        - Description: ${productDescription}
        - Price: ${price} Birr
        - Target Platform: ${platform}
        
        **Instructions:**
        1. Generate two versions of a marketing post (Amharic and English).
        2. The captions must be short, engaging, and suitable for the specified platform (e.g., fast-paced for TikTok, visually descriptive for Instagram).
        3. Include a call to action.
        4. Generate a list of 5 hyper-local and trending hashtags relevant to Ethiopia, Ethiopian business, and the product type.
        5. Output the result STRICTLY as a single JSON object.
    `;

    try {
        const response = await gemini.models.generateContent({
            model: 'gemini-2.5-flash', // A fast, capable model for text generation
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "object",
                    properties: {
                        amharic_caption: { type: "string" },
                        english_caption: { type: "string" },
                        hashtags: { type: "array", items: { type: "string" } }
                    },
                    required: ["amharic_caption", "english_caption", "hashtags"]
                }
            }
        });

        // 1. FIX: Check if response.text is present and not an empty string
        if (!response.text || response.text.trim().length === 0) {
            console.error("Gemini API Error: Response text was empty or undefined.");
            return null;
        }

        // 2. Proceed with parsing now that the text is guaranteed to be a non-empty string
        const jsonText = response.text.trim();
        const parsedResponse = JSON.parse(jsonText);
        
        return {
            amharic_caption: parsedResponse.amharic_caption,
            english_caption: parsedResponse.english_caption,
            hashtags: parsedResponse.hashtags
        } as GeminiResponse;

    } catch (error) {
        // Log the error and return null so the controller can handle the failure
        console.error("Gemini API Error:", error);
        return null;
    }
}