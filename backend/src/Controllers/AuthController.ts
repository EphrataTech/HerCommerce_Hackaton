// src/controllers/AuthController.ts

import { type Request, type Response } from 'express';
// Using .js extensions due to the strict 'nodenext' module resolution
import { supabase } from '../config/supabase.js'; 
import { insertNewUser, type NewUserInsert } from '../model/AdeyBizUser.model.js'; 


// Define the shape of the request body for signup for type safety
interface SignupBody {
    email: string;
    password: string;
    username: string;
    business_name: string;
    phone_number: string;
}

// Define the shape for login, which is a subset of signup
type LoginBody = Pick<SignupBody, 'email' | 'password'>;


/**
 * Handles user registration: Supabase Auth signup + custom profile insertion.
 */
export const signUp = async (req: Request<{}, {}, SignupBody>, res: Response) => {
    try {
        const { email, password, username, business_name, phone_number } = req.body;

        if (!email || !password || !username || !business_name || !phone_number) {
            return res.status(400).json({ error: "Missing required signup fields." });
        }

        // 1. SIGN UP WITH SUPABASE AUTH
        const { data: authData, error: authError } = await supabase.auth.signUp({ 
            email, 
            password,
        });

        if (authError) {
            console.error("Supabase Auth Error:", authError.message);
            return res.status(400).json({ error: authError.message });
        }

        // CRITICAL CHECK: Ensure a user was created and we have the UUID
        // NOTE: authData.user is null if email confirmation is required.
        // We rely on the created user ID even if the session is null (due to unconfirmed email).
        const userId = authData.user?.id || authData.user?.id;

        // If userId is truly null (a rare Supabase error), we stop here.
        if (!userId) {
             console.error("Signup Process Error: Supabase created user but failed to return a valid ID.");
             return res.status(500).json({ error: "Failed to create user ID. Try again." });
        }

        // 2. INSERT CUSTOM USER PROFILE DATA (AdeyBizUser)
        const newUserData: NewUserInsert = {
            id: userId,
            email,
            username,
            business_name,
            phone_number
        };

        const profile = await insertNewUser(newUserData); 

        // 3. RESPOND WITH SUCCESS
        res.status(201).json({ 
            message: "User and profile created successfully. Login should now be possible.",
            user: profile,
            // session might be null here, but we proceed anyway
            session: authData.session 
        });

    } catch (error) {
        // Use built-in Error type for type safety
        console.error("Signup Process Error:", (error as Error).message);
        res.status(500).json({ error: (error as Error).message || "An unexpected error occurred during registration." });
    }
};

/**
 * Handles user login using Supabase Auth.
 * HACKATHON FIX: Uses admin function to bypass email confirmation check.
 */
export const logIn = async (req: Request<{}, {}, LoginBody>, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Missing email or password." });
        }

        // 1. HACKATHON LOGIN BYPASS (Requires SUPABASE_ANON_KEY to be Service Role Key)
        
        // Find the user's UUID first using admin privileges
        const { data: usersData, error: listError } = await supabase.auth.admin.listUsers();

        if (listError) {
             console.error("Supabase Admin List Error:", listError.message);
             return res.status(500).json({ error: "Could not access user list for login bypass." });
        }

        const user = usersData.users.find(u => u.email === email);

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials." });
        }
        
        // --- STEP 2: FORCE EMAIL CONFIRMATION (The guaranteed bypass) ---
        // This makes the subsequent signInWithPassword call succeed.
        // NOTE: This uses the Admin client and requires the Service Role Key.
        const { error: adminUpdateError } = await supabase.auth.admin.updateUserById(user.id, {
             email_confirm: true 
        });

        if (adminUpdateError) {
            console.warn("WARNING: Failed to programmatically confirm user:", adminUpdateError.message);
            // We proceed anyway.
        }
        // -----------------------------------------------------------------


        // 3. AUTHENTICATE WITH SUPABASE (Standard Call - will now succeed because user is confirmed)
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (authError) {
            console.error("Supabase Login Error:", authError.message);
            // This error will still correctly handle password mismatches
            return res.status(401).json({ error: "Invalid credentials." }); 
        }

        // 4. RESPOND WITH SESSION
        res.status(200).json({ 
            message: "Login successful (Email confirmation bypassed).",
            session: authData.session 
        });

    } catch (error) {
        console.error("Login Process Error:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred during login." });
    }
};

/**
 * Initiates the Google OAuth flow by redirecting the user to Supabase Auth.
 */
export const signInWithGoogle = async (req: Request, res: Response) => {
    try {
        // NOTE: You MUST define GOOGLE_AUTH_REDIRECT_URL in your .env file and Supabase config!
        const REDIRECT_TO = process.env.GOOGLE_AUTH_REDIRECT_URL || 'http://localhost:3000/auth/callback';

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: REDIRECT_TO,
            },
        });

        if (error) {
            console.error("Google OAuth Error:", error.message);
            return res.status(500).json({ error: 'Failed to start Google sign-in process.' });
        }

        // Redirect the client to the Supabase authorization URL
        return res.redirect(data.url);
    } catch (error) {
        console.error("Google Sign-in Redirect Error:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred during OAuth redirect." });
    }
};

