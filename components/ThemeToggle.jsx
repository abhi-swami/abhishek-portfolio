// components/ThemeToggle.js
'use client'; // If using Next.js App Router

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    console.log("Toggling dark mode from:", darkMode);
    if (darkMode) {
      // Switch to light
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      // Switch to dark
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
    console.log("New dark mode:", !darkMode);
    console.log("HTML classes:", document.documentElement.className);
  };

  // Don't render during SSR to prevent hydration mismatch
  if (!mounted) return <div className="w-5 h-5"></div>;

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-white"
      aria-label="Toggle dark mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}