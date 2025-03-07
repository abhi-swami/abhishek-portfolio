import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Loader component for consistent loading spinners
const Loader = () => (
  <div className="w-10 h-10 border-4 border-[rgb(var(--color-primary))] border-t-transparent rounded-full animate-spin"></div>
);

// Error message component for consistent error displays
const ErrorMessage = ({ message, onRetry }) => (
  <div className="w-full h-full p-6 flex flex-col items-center justify-center gap-3 text-center rounded-lg text-[rgb(var(--color-text-primary-dark))]">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    <p>{message}</p>
    {onRetry && (
      <button
        className="mt-2 px-4 py-2 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-secondary-dark))] rounded-md text-sm font-medium hover:bg-opacity-90 transition-all duration-300"
        onClick={onRetry}
      >
        Try Again
      </button>
    )}
  </div>
);

export default function Stats() {
  // State management
  const [timeRange, setTimeRange] = useState("yearly");
  const [statsView, setStatsView] = useState("contributions");
  const [isVisible, setIsVisible] = useState(false);

  // Image URLs
  const statsCardUrl = "https://github-readme-stats.vercel.app/api?username=abhi-swami&theme=graywhite&show_icons=true&icon_color=37D5BE&text_color=1F1F1F&hide_border=true";
  const streakStatsUrl = "https://github-readme-streak-stats.herokuapp.com?user=abhi-swami&theme=graywhite&ring=37D5BE&fire=37D5BE&hide_border=true";
  const contributionGraphUrl = "https://github-readme-activity-graph.vercel.app/graph?username=abhi-swami&theme=graywhite&bg_color=F8F8F8&color=1F1F1F&line=37D5BE&point=1D8979&hide_border=true&area=true&area_color=8BE7D9";

  // Fade-in animation on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Toggle handlers
  const handleTimeRangeToggle = useCallback((range) => {
    setTimeRange(range);
  }, []);

  const handleStatsViewToggle = useCallback((view) => {
    setStatsView(view);
  }, []);

  return (
    <div
      id="statistics"
      className={`w-full py-8 sm:py-12 md:py-16 lg:py-20 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="inline-block text-[rgb(var(--color-text-primary-light))]">
              Github Statistics
            </span>
          </h2>

        </header>

        {/* View Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="inline-flex gap-3 rounded-sm p-1 bg-[rgb(var(--color-background-primary-light))] shadow-md">
            <button
              onClick={() => handleStatsViewToggle("personal")}
              className={`px-4 py-2 text-sm sm:text-base rounded-sm transition-all duration-300 ${statsView === "personal"
                ? "bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-secondary-dark))] font-medium shadow"
                : "bg-transparent text-[rgb(var(--color-text-primary-dark))] hover:bg-[rgba(var(--color-primary),0.1)]"
                }`}
              aria-pressed={statsView === "personal"}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                Personal Stats
              </span>
            </button>
            <button
              onClick={() => handleStatsViewToggle("contributions")}
              className={`px-4 py-2 text-sm sm:text-base rounded-sm transition-all duration-300 ${statsView === "contributions"
                ? "bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-secondary-dark))] font-medium shadow"
                : "bg-transparent text-[rgb(var(--color-text-primary-dark))] hover:bg-[rgba(var(--color-primary),0.1)]"
                }`}
              aria-pressed={statsView === "contributions"}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Contributions
              </span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {statsView === "personal" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Stats Card */}
              <div className="bg-[rgb(var(--color-background-secondary-light))] rounded-sm shadow-lg  relative min-h-[150px] sm:min-h-[150px]">
                <div className="relative w-full h-full">
                  <iframe
                    src={statsCardUrl}
                    style={{ border: 'none', overflow: 'hidden' }}
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    title="GitHub Stats"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Streak Stats Card */}
              <div className="bg-[rgb(var(--color-background-secondary-light))] rounded-sm shadow-lg relative min-h-[150px] sm:min-h-[150px]">
                <div className="relative w-full h-full">
                  <iframe
                    src={streakStatsUrl}

                    style={{ border: 'none', overflow: 'hidden' }}
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    title="GitHub Streak Stats"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              {/* Contribution Activity */}
              <div className="bg-[rgb(var(--color-background-secondary-light))] rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <iframe
                    src={contributionGraphUrl}
                    style={{ border: 'none', overflow: 'hidden' }}
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full"
                    title="GitHub Contribution Graph"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}