// components/Hero.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-background-dark dark:opacity-100 opacity-5 w-full h-full absolute">
          {/* Background overlay */}
        </div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400">
            <Image
              src="/images/profile.jpg"
              alt="Abhishek Swami"
              fill
              priority
              sizes="(max-width: 768px) 16rem, 20rem"
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Hi, I am
            <span className="text-primary-600 dark:text-primary-400"> 👋</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            Abhishek Swami
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-secondary-600 dark:text-secondary-300">
            MERN |
          </h3>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/resume" className="btn-primary flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </Link>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-800 hover:bg-secondary-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077b5] hover:bg-[#00669c] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
