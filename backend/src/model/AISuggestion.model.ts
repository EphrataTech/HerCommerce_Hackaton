// src/model/AISuggestion.model.ts

import { supabase } from '../config/supabase.js';

// --- Interfaces for Type Safety ---

export interface AISuggestion {
    id: string;
    user_id: string;
    product_context_id?: string;
    source_platform: string;
    amharic_caption: string;
    english_caption: string;
    suggested_hashtags: string[];
    suggested_post_time: string;
    is_published: boolean;
    user_rating?: number;
    created_at: string;
}

// --- Persistence Functions ---

/**
 * Inserts the final, Gemini-processed AI suggestion into the database.
 * The data passed to this function must be fully prepared by the AI service.
 */
export async function insertAISuggestion(suggestionData: Omit<AISuggestion, 'id' | 'created_at' | 'is_published' | 'user_rating'>): Promise<AISuggestion | null> {
    const { data, error } = await supabase
        .from('ai_suggestions')
        .insert(suggestionData)
        .select()
        .single();

    if (error) {
        console.error("Error inserting AI suggestion:", error.message);
        return null;
    }
    // Note: 'is_published' and 'user_rating' will use their DB defaults on insert.
    return data as AISuggestion;
}

/**
 * Fetches all pending or published suggestions for a user.
 */
export async function getAISuggestions(userId: string): Promise<AISuggestion[] | null> {
    const { data, error } = await supabase
        .from('ai_suggestions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching AI suggestions:", error.message);
        return null;
    }
    return data as AISuggestion[];
}

// --- NOTE ---
// The old mock function (generateMockAISuggestion) has been removed. 
// The AI generation logic is now handled in src/services/AIGenerator.service.ts.
// --------------