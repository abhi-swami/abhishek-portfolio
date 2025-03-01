// pages/test.jsx or app/test/page.jsx
"use client"; // For App Router
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function TestPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))]">
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Tailwind v4 Dark Mode Test
          </h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Test cards */}
          <div className="p-6 bg-[rgb(var(--color-card))] rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Card Example</h2>
            <p>This card should change colors in dark mode.</p>
          </div>

          <div className="p-6 bg-[rgb(var(--color-nav))] rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Nav Example</h2>
            <p>This box uses navigation colors.</p>
          </div>
        </div>

        <div className="mt-8 p-4 border border-gray-200 dark:border-gray-700 rounded">
          <p className="text-sm">Current HTML Classes: <code>{document.documentElement.className}</code></p>
        </div>
      </div>
    </div>
  );
}