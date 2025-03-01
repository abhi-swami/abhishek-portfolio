/* eslint-disable import/no-anonymous-default-export */


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Explicitly set darkMode to class for v4
  darkMode: 'class',
  theme: {
    extend: {
      // In v4, it's better to use CSS variables for colors
      colors: {
        primary: {
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        },
        secondary: {
          light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          dark: 'rgb(var(--color-secondary-dark) / <alpha-value>)',
        },
        background: {
          light: 'rgb(var(--color-background-light) / <alpha-value>)',
          dark: 'rgb(var(--color-background-dark) / <alpha-value>)',
        },
        text: {
          light: 'rgb(var(--color-text-light) / <alpha-value>)',
          dark: 'rgb(var(--color-text-dark) / <alpha-value>)',
        },
        card: {
          light: 'rgb(var(--color-card-light) / <alpha-value>)',
          dark: 'rgb(var(--color-card-dark) / <alpha-value>)',
        },
        nav: {
          light: 'rgb(var(--color-nav-light) / <alpha-value>)',
          dark: 'rgb(var(--color-nav-dark) / <alpha-value>)',
        }
      },
    },
  },
  plugins: [],
}