// src/routes/auth.ts

import { Router } from 'express';
import { signUp, logIn, signInWithGoogle } from '../Controllers/AuthController.js';

const router = Router();

// POST /api/v1/auth/signup - Email/Password Registration
router.post('/signup', signUp);

// POST /api/v1/auth/login - Email/Password Login
router.post('/login', logIn);

// GET /api/v1/auth/google - Initiate Google OAuth Redirect
router.get('/google', signInWithGoogle);

export default router;