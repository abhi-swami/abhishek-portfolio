import React, { useState, useEffect, useCallback, useRef } from "react";
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

// Fullscreen component as a separate entity
const FullscreenView = ({ src, title, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const handleRetry = (e) => {
    e.stopPropagation();
    setLoading(true);
    setError(false);
    // Force image reload by adding a timestamp query parameter
    const imgElement = document.getElementById("fullscreen-img");
    if (imgElement) {
      imgElement.src = `${src}${src.includes('?') ? '&' : '?'}t=${Date.now()}`;
    }
  };

  useEffect(() => {
    // Lock body scroll when fullscreen is open
    document.body.style.overflow = 'hidden';
    
    // Trigger animation after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  // Close with animation
  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match this with the CSS transition duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[rgba(var(--color-background-primary-dark),0)] flex items-center justify-center transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'bg-[rgba(var(--color-background-primary-dark),0.95)]' 
          : 'bg-[rgba(var(--color-background-primary-dark),0)]'
      }`}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        className={`absolute top-4 right-4 z-20 p-2 rounded-full bg-[rgba(var(--color-background-primary-dark),0.7)] text-[rgb(var(--color-text-primary-light))] hover:bg-[rgba(var(--color-background-primary-dark),0.9)] transition-all duration-300 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
        }`}
        onClick={handleClose}
        aria-label="Close fullscreen view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* For landscape orientation on mobile */}
      <div className="md:hidden w-screen h-screen flex items-center justify-center">
        <div
          className={`relative w-[95vh] h-[90vw] transform rotate-90 origin-center transition-all duration-300 ease-out ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(var(--color-background-secondary-light),0.5)] z-10 rounded-lg">
              <Loader />
            </div>
          )}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <ErrorMessage
                message={`Could not load ${title}`}
                onRetry={handleRetry}
              />
            </div>
          ) : (
            <div className="absolute inset-0 w-full h-full rounded-lg shadow-2xl overflow-hidden">
              <Image
                id="fullscreen-img"
                src={src}
                alt={`${title} (Fullscreen)`}
                fill
                className="object-contain rounded-lg"
                onLoad={handleLoad}
                onError={handleError}
                unoptimized={true} // For external URLs
              />
            </div>
          )}
        </div>
      </div>

      {/* For desktop and tablets - no rotation needed */}
      <div className="hidden md:block w-[90%] h-[90%] max-w-5xl">
        <div
          className={`relative w-full h-full transition-all duration-300 ease-out ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(var(--color-background-secondary-light),0.5)] z-10 rounded-lg">
              <Loader />
            </div>
          )}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <ErrorMessage
                message={`Could not load ${title}`}
                onRetry={handleRetry}
              />
            </div>
          ) : (
            <div className="absolute inset-0 w-full h-full rounded-lg shadow-2xl overflow-hidden">
              <Image
                id="fullscreen-img-desktop"
                src={src}
                alt={`${title} (Fullscreen)`}
                fill
                className="object-contain rounded-lg"
                onLoad={handleLoad}
                onError={handleError}
                unoptimized={true} // For external URLs
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Image component with loading and error states
const StatImage = ({ src, title, className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const handleRetry = () => {
    setLoading(true);
    setError(false);
  };

  const handleTap = () => {
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
  };

  return (
    <>
      <div
        className="relative w-full h-full cursor-pointer overflow-hidden"
        onClick={handleTap}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(var(--color-background-secondary-light),0.5)] z-10">
            <Loader />
          </div>
        )}
        {error ? (
          <ErrorMessage
            message={`Could not load ${title}`}
            onRetry={handleRetry}
          />
        ) : (
          <div className={`absolute inset-0 w-full h-full transition-transform duration-200 hover:scale-105 ${className || ''}`}>
            <Image
              id={`stat-img-${title.replace(/\s+/g, '-').toLowerCase()}`}
              src={src}
              alt={title}
              fill
              className="object-contain"
              onLoad={handleLoad}
              onError={handleError}
              unoptimized={true} // For external URLs
            />
          </div>
        )}
        <div className="absolute bottom-1 right-1 p-1 z-20 bg-[rgba(var(--color-background-primary-dark),0.7)] text-[rgb(var(--color-text-primary-light))] rounded-md text-xs">
          Tap to expand
        </div>
      </div>

      {fullscreen && (
        <FullscreenView
          src={src}
          title={title}
          onClose={closeFullscreen}
        />
      )}
    </>
  );
};

export default function Stats() {
  // State management
  const [statsView, setStatsView] = useState("contributions");
  const [isVisible, setIsVisible] = useState(false);

  // Image URLs
  const statsCardUrl = "https://github-readme-stats-sigma-five.vercel.app/api?username=abhi-swami&show_icons=true&theme=graywhite&show_icons=true&icon_color=37D5BE&text_color=1F1F1F&hide_border=true";
  const streakStatsUrl = "https://github-readme-streak-stats.herokuapp.com?user=abhi-swami&theme=graywhite&ring=37D5BE&fire=37D5BE&hide_border=true";
  const contributionGraphUrl = "https://github-readme-activity-graph.vercel.app/graph?username=abhi-swami&theme=graywhite&bg_color=F8F8F8&color=1F1F1F&line=37D5BE&point=1D8979&hide_border=true&area=true&area_color=8BE7D9";

  // Fade-in animation on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
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
          <div className="inline-flex gap-1 sm:gap-2 md:gap-3 rounded-sm p-1">
            <button
              onClick={() => handleStatsViewToggle("personal")}
              className={`px-2 py-1 md:px-4 md:py-2 text-sm sm:text-base rounded-sm transition-all duration-300 ${statsView === "personal"
                ? "bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-secondary-dark))] font-medium shadow"
                : "bg-transparent text-[rgb(var(--color-text-primary-dark))] hover:bg-[rgba(var(--color-primary),0.1)]"
                }`}
              aria-pressed={statsView === "personal"}
            >
              <span className="flex items-center gap-1 md:gap-2 text-ellipsis">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  " viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                Personal Stats
              </span>
            </button>
            <button
              onClick={() => handleStatsViewToggle("contributions")}
              className={`px-2 py-1 md:px-4 md:py-2 text-sm sm:text-base rounded-sm transition-all duration-300 ${statsView === "contributions"
                ? "bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-secondary-dark))] font-medium shadow"
                : "bg-transparent text-[rgb(var(--color-text-primary-dark))] hover:bg-[rgba(var(--color-primary),0.1)]"
                }`}
              aria-pressed={statsView === "contributions"}
            >
              <span className="flex items-center gap-1 md:gap-2">
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
              <div className="bg-[rgb(var(--color-background-secondary-light))] rounded-sm shadow-lg relative min-h-[180px] sm:min-h-[200px] md:min-h-[180px] overflow-hidden">
                <StatImage
                  src={statsCardUrl}
                  title="GitHub Stats"
                  className="rounded-sm"
                />
              </div>

              {/* Streak Stats Card */}
              <div className="bg-[rgb(var(--color-background-secondary-light))] rounded-sm shadow-lg relative min-h-[180px] sm:min-h-[200px] md:min-h-[180px] overflow-hidden">
                <StatImage
                  src={streakStatsUrl}
                  title="GitHub Streak Stats"
                  className="rounded-sm"
                />
              </div>
            </div>
          ) : (
            <div className="mt-4">
              {/* Contribution Activity */}
              <div className="bg-[rgb(var(--color-background-secondary-light))] rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
                  <StatImage
                    src={contributionGraphUrl}
                    title="GitHub Contribution Graph"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}