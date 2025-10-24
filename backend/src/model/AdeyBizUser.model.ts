// src/models/AdeyBizUser.model.ts

import { supabase } from '../config/supabase.js';

/**
 * Defines the strict type structure for a user record in the 'users' table.
 */
export interface AdeyBizUser {
    id: string; // The UUID from Supabase Auth (Internal primary key)
    email: string;
    username: string; // Short, unique, public identifier (Used in URLs/search)
    phone_number: string; // Required for contact
    business_name: string;
    adey_score: number; // The score for the credibility system
    is_verified: boolean; // Mock for business registration verification
    created_at: string;
}

/**
 * Type used for inserting a new user, omitting fields handled by DB defaults.
 */
export type NewUserInsert = Omit<AdeyBizUser, 'created_at' | 'adey_score' | 'is_verified'>;


/**
 * Inserts a new user record into the 'users' table after successful Supabase Auth signup.
 * @param user The core user details (id, email, username, phone_number, business_name).
 * @returns The newly created user record, or null on failure.
 */
export const insertNewUser = async (user: NewUserInsert): Promise<AdeyBizUser | null> => {
    try {
        const { id, email, username, phone_number, business_name } = user;

        const { data, error } = await supabase
            .from('users')
            .insert({
                id,
                email,
                username,
                phone_number,
                business_name,
                adey_score: 0, // Initialize score
                is_verified: false   // Not verified upon signup
            })
            .select() // Ask Supabase to return the inserted record
            .single(); 

        if (error) {
            console.error("Supabase Error in insertNewUser:", error.message);
            return null;
        }

        return data as AdeyBizUser;
    } catch (err) {
        console.error("Caught error during insertNewUser:", (err as Error).message);
        return null;
    }
};

/**
 * Fetches a user's profile by their Supabase Auth ID.
 * @returns The user record, or null if not found or on error.
 */
export async function getProfileByUserId(userId: string): Promise<AdeyBizUser | null> {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

    if (error) {
        // Suppress 'not found' error (PGRST116) for clean handling
        if (error.code === 'PGRST116') {
            return null;
        }
        console.error("Error fetching profile by ID:", error.message);
        return null;
    }

    return data as AdeyBizUser;
}

/**
 * Updates a user's profile fields.
 * @param updates The partial data to update.
 * @returns The updated user record, or null if update failed.
 */
export async function updateProfile(userId: string, updates: Partial<NewUserInsert>): Promise<AdeyBizUser | null> {
    const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();

    if (error) {
        console.error("Error updating profile:", error.message);
        return null;
    }

    return data as AdeyBizUser;
}