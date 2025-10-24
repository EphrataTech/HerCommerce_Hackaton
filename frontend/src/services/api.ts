const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Auth endpoints
  register: async (userData: any) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (credentials: any) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  // Dashboard endpoints
  getDashboardData: async () => {
    const response = await fetch(`${API_URL}/dashboard`);
    return response.json();
  },

  // AI suggestions
  getAISuggestions: async () => {
    const response = await fetch(`${API_URL}/ai/suggestions`);
    return response.json();
  },

  // Credibility score
  getCredibilityScore: async () => {
    const response = await fetch(`${API_URL}/credibility/score`);
    return response.json();
  },

  // Social media integration
  connectSocialAccount: async (platform: string, accountData: any) => {
    const response = await fetch(`${API_URL}/social/connect`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform, ...accountData }),
    });
    return response.json();
  }
};

export default api;