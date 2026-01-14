/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        primary: '#0d0d0d',
        secondary: '#1a1a1a',
        accent: '#3a86ff',
        'accent-secondary': '#ff006e',
        'accent-tertiary': '#8338ec',
        text: '#ffffff',
        'text-secondary': '#a0a0a0',
        'glass-bg': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(58, 134, 255, 0.2)' },
          '100%': { 'box-shadow': '0 0 20px rgba(58, 134, 255, 0.5)' },
        }
      },
    },
  },
  plugins: [],
}
