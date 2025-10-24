
import { createClient } from '@supabase/supabase-js';
import { env } from 'node:process';

// Ensure your .env variables are loaded in server.ts/app.ts
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("Supabase Client Initialized.");