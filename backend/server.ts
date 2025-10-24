// src/server.ts

import * as dotenv from 'dotenv';
import app from './app.js'; // Note the .js extension

// Load environment variables from .env file
dotenv.config();

// CRITICAL: Define the port. Fallback to 3000 if not set in .env
const PORT = process.env.PORT || 3000; 

// Start the HTTP server
app.listen(PORT, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
    console.log(`🎯 [routes]: Test endpoints are / and /api/v1/auth/signup`);
});