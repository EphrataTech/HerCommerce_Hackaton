// src/config/gemini.ts

import { GoogleGenAI } from '@google/genai';

// 1. Get the API key safely. TypeScript knows this can be string | undefined.
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    // 2. CRITICAL: If the key is missing, throw an error immediately 
    //    instead of letting the client attempt to initialize with undefined.
    //    This is safer for a backend service.
    throw new Error("FATAL ERROR: GEMINI_API_KEY is missing in environment variables. Please check your .env file.");
}

// 3. Initialize the client.
//    By passing apiKey here, TypeScript knows that due to the check above, 
//    apiKey MUST be a string at this point (Type Narrowing).
const gemini = new GoogleGenAI({ apiKey });

export { gemini };