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
 * Type used for inserting a new user, omitting fields handled by defaults (score, verification) or the DB (timestamp).
 */
export type NewUserInsert = Omit<AdeyBizUser, 'created_at' | 'adey_score' | 'is_verified'>;


/**
 * Retrieves a user's custom data from the 'users' table by their internal UUID.
 * @param userId The UUID (ID from Supabase Auth) of the user.
 * @returns The user data as an AdeyBizUser object.
 */
export const findUserById = async (userId: string): Promise<AdeyBizUser> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error("Supabase Error in findUserById:", error.message);
      throw new Error("Database query failed: User not found or connection error.");
    }

    // Cast the returned data to the defined TypeScript interface for type safety
    return data as AdeyBizUser;
  } catch (err) {
    throw err;
  }
};

/**
 * Inserts a new user record into the 'users' table after successful Supabase Auth signup.
 * @param user The core user details (id, email, username, phone_number, business_name).
 * @returns The newly created user record.
 */
export const insertNewUser = async (user: NewUserInsert): Promise<AdeyBizUser> => {
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
        adey_score: 0, // Initialize score as per DB default
        is_verified: false   // Not verified upon signup
      })
      .select() // Ask Supabase to return the inserted record
      .single(); 

    if (error) {
      console.error("Supabase Error in insertNewUser:", error.message);
      // NOTE: Unique constraint error for 'username' or 'phone_number' will be thrown here.
      throw new Error("Failed to insert new AdeyBiz user record into database.");
    }

    return data as AdeyBizUser;
  } catch (err) {
    throw err;
  }
};