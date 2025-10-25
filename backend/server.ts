// src/server.ts

import * as dotenv from 'dotenv';
import app from './app.js'; 

// Load environment variables from .env file
dotenv.config();

// CRITICAL: Define the port and the long timeout for external API calls (Gemini)
const PORT = process.env.PORT || 3000; 
const SERVER_TIMEOUT_MS = 30000; // 30 seconds for Gemini response

// Start the HTTP server and assign it to a variable
const server = app.listen(PORT, () => {
    
    // 1. Apply the timeout to the server instance
    server.timeout = SERVER_TIMEOUT_MS; 

    console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
    console.log(`⏳ [timeout]: Server timeout set to ${SERVER_TIMEOUT_MS / 1000} seconds.`);

    // 2. CRITICAL: Verification log for all keys
    console.log(`--- AdeyBiz Backend Status ---`);
    console.log(`Supabase URL: ${process.env.SUPABASE_URL ? 'Loaded' : 'Missing!'}`);
    console.log(`Gemini API Key: ${process.env.GEMINI_API_KEY ? 'Loaded' : 'Missing! (FATAL)'}`);
    console.log(`------------------------------`);

    console.log(`🎯 [routes]: Test endpoints include /api/v1/auth/signup and /api/v1/ai-marketing/generate`);
});