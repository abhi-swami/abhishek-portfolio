// components/ThemeToggle.js
'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme, mounted } = useTheme();

  // Don't render during SSR to prevent hydration mismatch
  if (!mounted) return <div className="w-10 h-10"></div>;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[rgb(var(--color-nav))] transition-all duration-300 ease-in-out 
                focus:outline-none"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6">
        {/* Sun */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[rgb(var(--color-text))] animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>

        {/* Moon */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[rgb(var(--color-text))]"
            viewBox="0 0 24 24"
          >
            <path
              className="animate-pulse"
              fill="#475569"
              stroke="currentColor"
              strokeWidth="1.25"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
            {/* White dots on the moon */}
            <circle
              cx="15"
              cy="9"
              r="1"
              fill="white"
              className="animate-twinkle"
            />
            <circle
              cx="9"
              cy="15"
              r="0.8"
              fill="white"
              className="animate-twinkle-delayed"
            />
            <circle
              cx="17"
              cy="13"
              r="0.6"
              fill="white"
              className="animate-twinkle-slow"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}