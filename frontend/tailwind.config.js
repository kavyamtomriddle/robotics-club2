/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#00ecff',
        tertiary: '#ff00ff',
        dark: '#020617',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'text-glitch': 'text-glitch 1s infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'text-glitch': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00ecff, 0 0 10px #00ecff' 
          },
          '50%': { 
            textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff' 
          },
        }
      }
    },
  },
  plugins: [],
}