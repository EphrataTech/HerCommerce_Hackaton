/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#F97316',
          black: '#111111',
          charcoal: '#1A1A1A',
        },
        secondary: {
          white: '#FFFFFF',
          lightGray: '#F5F5F5',
          mediumGray: '#6B7280',
        },
        accent: {
          gold: '#FBBF24',
          brown: '#A16207',
        }
      }
    },
  },
  plugins: [],
}