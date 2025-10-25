// src/app.ts

import express, { type Application } from 'express';
import cors from 'cors';

import authRoutes from './src/routes/auth.js'; // Note the .js extension

// ADDED: Import the AI Marketing route
import aiMarketingRoutes from './src/routes/aiMarketingRoutes.js'; 

const app: Application = express();

// Middleware
// 1. CORS: Allows your frontend (running on a different port) to access the backend.
app.use(cors({
    origin: '*', // You should restrict this to your frontend URL in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// 2. JSON Parser: Parses incoming request bodies with JSON payloads.
app.use(express.json());

// 3. Health Check Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'AdeyBiz API is running!' });
});

// Routes
// Mount the authentication routes under the '/api/v1/auth' path
app.use('/api/v1/auth', authRoutes);

// ADDED: Mount the AI Marketing routes under the '/api/v1/ai-marketing' path
app.use('/api/v1/ai-marketing', aiMarketingRoutes); 

// Global Error Handler (Optional but recommended)
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke! Check server logs.');
});


export default app;