// src/controllers/ProfileController.ts 

import { type Request, type Response } from 'express';
import { getProfileByUserId, updateProfile, type NewUserInsert } from '../model/AdeyBizUser.model.js'; // <-- FIXED IMPORT
import { // <-- FIXED IMPORT
    getSocialAccounts, 
    addSocialAccount, 
    updateSocialAccount, 
    getEcommerceStores, 
    addEcommerceStore, 
    updateEcommerceStore,
    type SocialAccount,
    type EcommerceStore
} from '../model/Integration.model.js'; 

// --- Missing Definitions Restored ---

// NOTE: Since we skipped the Auth Middleware, we MUST hardcode the user ID for testing.
// !!! REPLACE THIS MOCK ID WITH A REAL USER ID FROM YOUR DB FOR TESTING !!!
const MOCK_USER_ID = '00000000-0000-0000-0000-000000000001'; 

// Define the shape of the data that can be updated (using Partial<NewUserInsert> for flexibility)
interface UpdateProfileBody extends Partial<NewUserInsert> {} 

// --- CORE PROFILE ---

/**
 * Fetches the user's profile and ALL linked accounts/stores for the dashboard.
 * [SIMULATED AUTH: Uses MOCK_USER_ID]
 */
export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = MOCK_USER_ID; 

        const [profile, socialAccounts, ecommerceStores] = await Promise.all([
            getProfileByUserId(userId),
            getSocialAccounts(userId),
            getEcommerceStores(userId)
        ]);

        if (!profile) {
            return res.status(404).json({ error: "User profile not found." });
        }
        
        res.status(200).json({ 
            message: "Profile and integrations fetched successfully.", 
            profile: profile,
            social_accounts: socialAccounts || [], // Return empty array if null
            ecommerce_stores: ecommerceStores || [] // Return empty array if null
        });

    } catch (error) {
        console.error("Error fetching profile:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred while fetching the profile." });
    }
};

/**
 * Updates the user's profile information.
 * [SIMULATED AUTH: Uses MOCK_USER_ID]
 */
export const updateProfileController = async (req: Request<{}, {}, UpdateProfileBody>, res: Response) => {
    try {
        const userId = MOCK_USER_ID; 
        const updates = req.body;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ error: "No fields provided for update." });
        }

        const updatedProfile = await updateProfile(userId, updates);

        if (!updatedProfile) {
            return res.status(404).json({ error: "Profile not found or update failed." });
        }

        res.status(200).json({
            message: "Profile updated successfully.",
            profile: updatedProfile
        });

    } catch (error) {
        console.error("Error updating profile:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred while updating the profile." });
    }
};


// --- SOCIAL MEDIA INTEGRATION CONTROLLERS ---

/** Adds a new social media account link. */
export const addSocialAccountController = async (req: Request<{}, {}, Omit<SocialAccount, 'id' | 'user_id' | 'is_verified'>>, res: Response) => {
    try {
        const userId = MOCK_USER_ID; 
        const { platform, handle, link } = req.body;

        if (!platform || !handle) {
            return res.status(400).json({ error: "Missing platform or handle." });
        }

        const newAccount = await addSocialAccount(userId, { platform, handle, link: link || '' });

        if (!newAccount) {
            return res.status(500).json({ error: "Failed to add social account." });
        }

        res.status(201).json({ message: "Social account added.", account: newAccount });

    } catch (error) {
        console.error("Error adding social account:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred." });
    }
};

/** Updates an existing social media account link. */
export const updateSocialAccountController = async (req: Request<{accountId: string}, {}, Partial<SocialAccount>>, res: Response) => {
    try {
        const { accountId } = req.params;
        const updates = req.body;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ error: "No fields provided for update." });
        }

        const updatedAccount = await updateSocialAccount(accountId, updates);

        if (!updatedAccount) {
            return res.status(404).json({ error: "Social account not found or update failed." });
        }

        res.status(200).json({ message: "Social account updated.", account: updatedAccount });
        
    } catch (error) {
        console.error("Error updating social account:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred." });
    }
};


// --- E-COMMERCE INTEGRATION CONTROLLERS ---

/** Adds a new e-commerce store link. */
export const addEcommerceStoreController = async (req: Request<{}, {}, Omit<EcommerceStore, 'id' | 'user_id' | 'is_active'>>, res: Response) => {
    try {
        const userId = MOCK_USER_ID; 
        const { platform, store_name, store_url } = req.body;

        if (!platform || !store_name || !store_url) {
            return res.status(400).json({ error: "Missing platform, store name, or URL." });
        }

        const newStore = await addEcommerceStore(userId, { platform, store_name, store_url });

        if (!newStore) {
            return res.status(500).json({ error: "Failed to add e-commerce store." });
        }

        res.status(201).json({ message: "E-commerce store added.", store: newStore });

    } catch (error) {
        console.error("Error adding e-commerce store:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred." });
    }
};

/** Updates an existing e-commerce store link. */
export const updateEcommerceStoreController = async (req: Request<{storeId: string}, {}, Partial<EcommerceStore>>, res: Response) => {
    try {
        const { storeId } = req.params;
        const updates = req.body;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ error: "No fields provided for update." });
        }

        const updatedStore = await updateEcommerceStore(storeId, updates);

        if (!updatedStore) {
            return res.status(404).json({ error: "E-commerce store not found or update failed." });
        }

        res.status(200).json({ message: "E-commerce store updated.", store: updatedStore });

    } catch (error) {
        console.error("Error updating e-commerce store:", (error as Error).message);
        res.status(500).json({ error: "An unexpected error occurred." });
    }
};