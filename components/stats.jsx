import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Stats() {
  const [timeRange, setTimeRange] = useState("yearly");
  const [statsView, setStatsView] = useState("contributions");
  const [imagesLoaded, setImagesLoaded] = useState({
    statsCard: false,
    streakStats: false,
    topLangs: false,
    contributionGraphActivity: false,
    contributionGraphCalendar: false
  });
  const [errors, setErrors] = useState({
    statsCard: false,
    streakStats: false,
    topLangs: false,
    contributionGraphActivity: false,
    contributionGraphCalendar: false
  });
  const [isVisible, setIsVisible] = useState(false);

  // Animation entry effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Toggle function for time range buttons
  const handleTimeRangeToggle = (range) => {
    setTimeRange(range);
    setImagesLoaded(prev => ({ ...prev, contributionGraphCalendar: false }));
  };

  // Toggle function for stats view buttons
  const handleStatsViewToggle = (view) => {
    setStatsView(view);
  };

  return (
    <div
      id="statistics"
      className={`w-full 4 xs:py-4 sm:py-10 md:py-6 lg:py-8`}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <header className="mb-2 md:mb-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative">
            <span className="inline-block text-[rgb(var(--color-text-primary-light))]">
              Github Statistics
            </span>
          </h2>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-sm xs:text-base sm:text-lg md:text-lg text-[rgb(var(--color-text-primary-dark))]">
            Some of my GitHub stats
          </p>
        </header>

        {/* Interactive Stats View Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="inline-flex rounded-lg border gap-3 p-1.5">
            <button
              onClick={() => handleStatsViewToggle("personal")}
              className={`px-5 py-2.5 text-sm font-medium rounded-md ${statsView === "personal"
                ? "rounded-sm border-2 border-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-secondary-dark))] font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base "
                : "bg-transparent text-[rgb(var(--color-text-primary-dark))] hover:bg-[rgb(var(--color-background-primary-dark))]"
                }`}
              aria-pressed={statsView === "personal"}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                  <path d="M10 4a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V5a1 1 0 011-1z" />
                </svg>
                Personal Stats
              </span>
            </button>
            <button
              onClick={() => handleStatsViewToggle("contributions")}
              className={`px-5 py-2.5 text-sm font-medium rounded-md ${statsView === "contributions"
                ? "rounded-sm border-2 border-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-secondary-dark))] font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
                : "bg-transparent text-[rgb(var(--color-text-primary-dark))] hover:bg-[rgb(var(--color-background-primary-dark))]"
                }`}
              aria-pressed={statsView === "contributions"}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
                  <path d="M5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5z" />
                  <path d="M11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z" />
                  <path d="M14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
                Contributions
              </span>
            </button>
          </div>
        </div>

        {/* Stats Content */}
        <div className=" grid grid-cols-1 m-auto gap-5 justify-between items-center w-full border h-[300px]">
          {statsView === "personal" ? (
            <div className="transition-all duration-500">
              <div className="flex flex-col md:flex-row justify-around items-center m-auto gap-5 border border-red-700">
                {/* Stats Card */}
                <div className="w-full relative">
                  <div className="absolute -inset-0.5 bg-[rgb(var(--color-background-secondary-dark))] rounded-xl blur opacity-20 group-hover:opacity-10 transition duration-300"></div>
                  <div className="relative  rounded-xl h-full">
                    {!imagesLoaded.statsCard && !errors.statsCard && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-xl z-10">
                        <div className="w-10 h-10 border-4 border-[rgb(var(--color-primary))] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    {errors.statsCard ? (
                      <div className="w-full p-6 text-center rounded-lg bg-[rgba(var(--color-background-primary-dark))] text-[rgb(var(--color-text-primary-dark))] flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Could not load GitHub stats.
                      </div>
                    ) : (
                      <div className="relative w-full h-full min-h-[200px]">
                        <Image
                          alt="github-stats-card"
                          src="https://github-readme-stats.vercel.app/api?username=abhi-swami&theme=graywhite&show_icons=true&icon_color=37D5BE&text_color=1F1F1F"


                          fill
                          className={`object-contain transition-all duration-500 ${imagesLoaded.statsCard ? 'opacity-100' : 'opacity-0'
                            }`}
                          onLoadingComplete={() => setImagesLoaded(prev => ({ ...prev, statsCard: true }))}
                          onError={() => {
                            setErrors(prev => ({ ...prev, statsCard: true }));
                            setImagesLoaded(prev => ({ ...prev, statsCard: true }));
                          }}
                          unoptimized={true}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Streak Stats Card */}
                <div className="w-full relative">

                  <div className="absolute -inset-0.5 bg-[rgb(var(--color-background-secondary-dark))] rounded-xl blur opacity-20 group-hover:opacity-10 transition duration-300"></div>

                  <div className="relative rounded-xl h-full">
                    {!imagesLoaded.streakStats && !errors.streakStats && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-xl z-10">
                        <div className="w-10 h-10 border-4 border-[rgb(var(--color-primary))] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    {errors.streakStats ? (
                      <div className="w-full h-full p-6 text-center rounded-lg bg-[rgba(var(--color-background-primary-dark))] text-[rgb(var(--color-text-primary-dark))] flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Could not load GitHub streak stats.
                      </div>
                    ) : (
                      <div className="relative w-full h-full min-h-[200px]">
                        <Image
                          alt="github-streak-stats"
                          src="https://github-readme-streak-stats.herokuapp.com?user=abhi-swami&theme=graywhite&ring=37D5BE&fire=37D5BE"
                          // src="https://github-readme-streak-stats.herokuapp.com?user=abhi-swami&background=FFFFFF00&theme=material-palenight&border=4E406F&fire=F1E05A&currStreakNum=FFFFFF&currStreakLabel=FFFFFF&dates=FFFFFF"
                          fill
                          className={`object-contain transition-all duration-500 ${imagesLoaded.streakStats ? 'opacity-100' : 'opacity-0'
                            }`}
                          onLoadingComplete={() => setImagesLoaded(prev => ({ ...prev, streakStats: true }))}
                          onError={() => {
                            setErrors(prev => ({ ...prev, streakStats: true }));
                            setImagesLoaded(prev => ({ ...prev, streakStats: true }));
                          }}
                          unoptimized={true}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="transition-all duration-500">
              <div className="flex justify-center items-start border border-amber-400">
                <div className="w-full max-w-4xl relative border border-red-700">
                  {/* <div className="absolute -inset-0.5 bg-[rgb(var(--color-background-secondary-dark))] rounded-xl blur opacity-20 group-hover:opacity-10 transition duration-300"></div> */}
                  <div className="relative  rounded-xl">
                    {!imagesLoaded.contributionGraphActivity && !errors.contributionGraphActivity && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-xl z-10">
                        <div className="w-10 h-10 border-4 border-[rgb(var(--color-primary))] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    {errors.contributionGraphActivity ? (
                      <div className="w-full p-6 text-center rounded-lg bg-[rgba(var(--color-background-primary-dark))] text-[rgb(var(--color-text-primary-dark))] flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Could not load GitHub activity grap
                      </div>
                    ) : (
                      <div className="relative w-[100%] h-[300px]">
                        {/* <div className="relative w-full h-full"> */}
                        <Image
                          src={`https://github-readme-activity-graph.vercel.app/graph?username=abhi-swami&theme=graywhite&bg_color=EFEFEF&color=1F1F1F&line=37D5BE&point=1F1F1FF&hide_border=true&area=true&area_color=1F1F1F&height=350`}
                          alt="GitHub contribution graph"
                          fill
                          className={`object-fill transition-all duration-700 ${imagesLoaded.contributionGraphActivity ? 'opacity-100' : 'opacity-0'
                            }`}
                          onLoadingComplete={() => setImagesLoaded(prev => ({ ...prev, contributionGraphActivity: true }))}
                          onError={() => {
                            setErrors(prev => ({ ...prev, contributionGraphActivity: true }));
                            setImagesLoaded(prev => ({ ...prev, contributionGraphActivity: true }));
                          }}
                          unoptimized={true}
                        />

                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}