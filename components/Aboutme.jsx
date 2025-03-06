// components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="w-full 4 xs:py-4 sm:py-10 md:py-6 lg:py-8 bg-[rgb(var(--color-background-dark))]"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-8 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative">
            <span className="inline-block text-[rgb(var(--color-text-primary))]">
              About Me
            </span>
          </h2>
        </header>

        {/* Bio Section */}
        <article className="max-w-4xl mx-auto  bg-[rgb(var(--color-card))] p-6 sm:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[rgb(var(--color-text-primary))]">
            Hey there! <span role="img" aria-label="waving hand" className="inline-block animate-wave origin-bottom-right">👋</span>
          </h3>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              I craft <strong className="font-medium">blazing-fast</strong> web experiences with <span className="font-semibold">Next.js, React, and Tailwind CSS</span>.
              Performance is my playground—I optimize <abbr title="Largest Contentful Paint">LCP</abbr>, <abbr title="First Contentful Paint">FCP</abbr>, and page speed to make the web smoother.
            </p>
            <p>
              I thrive in <strong className="font-medium">state management</strong> with <span className="text-[rgb(var(--color-primary-light))]">Redux & SWR</span>, integrate <strong className="font-medium">Django</strong> backends,
              and build sleek UI components like <strong className="font-medium">drag-and-drop interfaces, pagination, and modals</strong>.
            </p>
            <p>
              Passionate about <strong className="font-medium">SEO & structured data</strong>, I implement <strong className="font-medium">JSON-LD</strong> for better discoverability.
              Currently, I'm developing a <strong className="font-medium">responsive NPM text editor</strong>, supporting HTML, CSS frameworks, and image uploads.
            </p>
            <p className="font-semibold">
              Let's build something extraordinary! <span role="img" aria-label="rocket" className="inline-block">🚀</span><span role="img" aria-label="sparkles" className="inline-block animate-twinkle">✨</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;