// src/model/Integration.model.ts

import { supabase } from '../config/supabase.js';

// --- Interfaces for Type Safety ---

export interface SocialAccount {
    id: string;
    user_id: string;
    platform: string;
    handle: string;
    link: string;
    access_token?: string;
    is_verified: boolean;
}

export interface EcommerceStore {
    id: string;
    user_id: string;
    platform: string;
    store_name: string;
    store_url: string;
    api_key?: string;
    is_active: boolean;
}

// --- Social Media Functions ---

/** Fetches all social accounts for a user. */
export async function getSocialAccounts(userId: string): Promise<SocialAccount[] | null> {
    const { data, error } = await supabase
        .from('social_media_accounts')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error("Error fetching social accounts:", error.message);
        return null;
    }
    return data as SocialAccount[];
}

/** Adds a new social account link. */
export async function addSocialAccount(userId: string, account: Omit<SocialAccount, 'id' | 'user_id' | 'is_verified'>): Promise<SocialAccount | null> {
    const { data, error } = await supabase
        .from('social_media_accounts')
        .insert({ ...account, user_id: userId })
        .select()
        .single();

    if (error) {
        console.error("Error adding social account:", error.message);
        return null;
    }
    return data as SocialAccount;
}

/** Updates an existing social account link by its ID. */
export async function updateSocialAccount(accountId: string, updates: Partial<SocialAccount>): Promise<SocialAccount | null> {
    const { data, error } = await supabase
        .from('social_media_accounts')
        .update(updates)
        .eq('id', accountId)
        .select()
        .single();

    if (error) {
        console.error("Error updating social account:", error.message);
        return null;
    }
    return data as SocialAccount;
}


// --- E-commerce Store Functions ---

/** Fetches all e-commerce stores for a user. */
export async function getEcommerceStores(userId: string): Promise<EcommerceStore[] | null> {
    const { data, error } = await supabase
        .from('e_commerce_stores')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error("Error fetching e-commerce stores:", error.message);
        return null;
    }
    return data as EcommerceStore[];
}

/** Adds a new e-commerce store link. */
export async function addEcommerceStore(userId: string, store: Omit<EcommerceStore, 'id' | 'user_id' | 'is_active'>): Promise<EcommerceStore | null> {
    const { data, error } = await supabase
        .from('e_commerce_stores')
        .insert({ ...store, user_id: userId })
        .select()
        .single();

    if (error) {
        console.error("Error adding e-commerce store:", error.message);
        return null;
    }
    return data as EcommerceStore;
}

/** Updates an existing e-commerce store link by its ID. */
export async function updateEcommerceStore(storeId: string, updates: Partial<EcommerceStore>): Promise<EcommerceStore | null> {
    const { data, error } = await supabase
        .from('e_commerce_stores')
        .update(updates)
        .eq('id', storeId)
        .select()
        .single();

    if (error) {
        console.error("Error updating e-commerce store:", error.message);
        return null;
    }
    return data as EcommerceStore;
}