/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#AFD275', // A more muted but professional green
          light: '#C8E29A',
          dark: '#91B25A',
        },
        secondary: {
          DEFAULT: '#E7717D', // Accent color from original palette
          light: '#F2A1A8',
          dark: '#C75A67',
        },
        neutral: {
          100: '#F5F7FA', // Light mode background
          300: '#C2CAD0',
          500: '#AFAFAF',
          700: '#7E685A',
          900: '#3B3028',
        },
        success: '#74C69D',
        warning: '#F4A261',
        error: '#E63946',
        dark: {
          100: '#1C1C1E', // Dark background
          300: '#2C2C2E', // Slightly lighter
          500: '#4A4A4C', // Subtle gray for UI elements
          700: '#C2CAD0', // Light contrast for text
          900: '#F0F0F0', // Almost white text
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "auto" },
        },
        "accordion-up": {
          from: { height: "auto" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}

