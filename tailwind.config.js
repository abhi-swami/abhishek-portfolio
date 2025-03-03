/* eslint-disable import/no-anonymous-default-export */


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss,module.css,module.scss}",
  ],
  // Remove or set to 'media' if you don't need class-based toggling anymore
  // darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-delayed': 'twinkle 3s ease-in-out 1s infinite',
        'twinkle-slow': 'twinkle 4s ease-in-out 0.5s infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        }
      },
      colors: {
        // Define dark mode colors directly without CSS variables
        primary: {
          light: 'rgb(55, 213, 190)',
          DEFAULT: 'rgb(250, 250, 250)',
          dark: 'rgb(72, 61, 139)',
        },
        background: 'rgb(31, 31, 31)',
        text: 'rgb(248, 248, 248)',
        card: 'rgb(30, 30, 30)',
        nav: 'rgb(21, 21, 21)',
      },
    },
  },
  plugins: [],
}