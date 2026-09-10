/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', '"Noto Sans TC"', 'sans-serif'],
      },
      colors: {
        brand: {
          lime: '#C8FF00',
          limeLight: '#F2FFBF',
          dark: '#111319',
          darkAlt: '#1a1c25',
          softWhite: '#F7F7F3',
          gray: '#E9EAE5',
          slate: '#686D77',
          cyan: '#50C9E8',
          coral: '#FF624A',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        'glow-lime': '0 0 20px rgba(200, 255, 0, 0.15)',
        'glow-lime-lg': '0 0 40px rgba(200, 255, 0, 0.2)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 4px 30px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
