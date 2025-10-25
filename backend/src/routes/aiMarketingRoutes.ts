// src/routes/aiMarketingRoutes.ts

import { Router } from 'express';
import { 
    generateSuggestionController, 
    getSuggestionsController 
} from '../Controllers/AImarketingController.js';

const router = Router();

// Endpoint to fetch all past suggestions (for the user's dashboard view)
router.get('/', getSuggestionsController); 

// Endpoint to trigger a new suggestion generation using the Gemini API
router.post('/generate', generateSuggestionController);

export default router;