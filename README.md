# Full-Stack Project

## Structure

- `frontend/` - React application with Vite
- `backend/` - Express.js API server

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend


# 🚀 AdeyBiz Backend: Authentication API Contract

This document outlines the endpoints and data structures necessary for the frontend team to integrate with the AdeyBiz Authentication service.

### General Notes

  * **Base URL:** All authentication endpoints start with `http://localhost:3000/api/v1/auth`.
  * **Security (Hackathon Bypass):** For speed, **email confirmation has been bypassed**. A user can log in immediately after a successful signup.
  * **Authentication:** The **`access_token` (JWT)** returned upon successful login/signup must be stored and used for all calls to protected routes.

-----

## 1\. User Registration (`POST /signup`)

Creates the user in Supabase Auth and their corresponding profile in the `users` table.

### Request Body (`application/json`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | User's email (must be unique). |
| `password` | `string` | User's password. |
| `username` | `string` | User's chosen display name. |
| `business_name` | `string` | The user's business name. |
| `phone_number` | `string` | The user's phone number. |

### Successful Response (`HTTP 201 Created`)

```json
{
  "message": "User and profile created successfully. Login should now be possible.",
  "user": {
    "id": "uuid-of-new-user",
    "email": "test@adeybiz.com",
    "username": "...",
    "business_name": "..."
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // <-- Store this JWT
    "refresh_token": "...",
    "expires_in": 3600
  }
}
```

-----

## 2\. User Log In (`POST /login`)

Authenticates the user using email and password and returns a session token.

### Request Body (`application/json`)

| Field | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | Registered email. |
| `password` | `string` | Password. |

### Successful Response (`HTTP 200 OK`)

```json
{
  "message": "Login successful (Email confirmation bypassed).",
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // <-- Store this JWT
    "refresh_token": "...",
    "expires_in": 3600
  }
}
```

### Error Response (`HTTP 401 Unauthorized`)

Returns if the email/password combination is incorrect.

```json
{
  "error": "Invalid credentials."
}
```

-----

## 3\. Google Sign-In (`GET /google`)

Initiates the Google OAuth flow via a redirect.

### Integration Flow

1.  Frontend calls this endpoint.
2.  The backend responds with an **HTTP 302 Redirect** to Google.
3.  Upon successful Google authentication, the user is redirected **back to your configured frontend callback URL** (e.g., `/auth/callback`).
4.  The frontend must handle the final URL to parse the session tokens returned by Supabase.

-----

## 4\. Protected Routes (Authorization Header)

For any API call to a route that requires the user to be logged in (which will be most of your future endpoints), the **`access_token`** must be included in the **Authorization header**.

| Header Field | Value |
| :--- | :--- |
| **Authorization** | `Bearer [your_access_token_here]` |

**Example using the token for a profile fetch:**

```
GET http://localhost:3000/api/v1/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
## Development

- Frontend runs on http://localhost:3000
- Backend runs on http://localhost:5000
- API endpoints available at http://localhost:5000/api
