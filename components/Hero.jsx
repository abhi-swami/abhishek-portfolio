import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from "../public/hero.webp"
import Navbar from './Navbar';
import { Prompt } from "next/font/google";


const prompt = Prompt({
  variable: "--font-prompt",
  weight: "600",
  subsets: ["latin"],
});


const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with overlay - Adjusted for face visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.src}
          alt="Background pattern"
          fill
          className="object-cover xs:object-[85%_90%] lg:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 xs:bg-gradient-to-b xs:from-[rgba(var(--color-background-dark),0.1)] xs:to-[rgba(var(--color-background-dark),0.7)]  md:bg-gradient-to-l md:from-[rgba(var(--color-background-dark),0.1)] md:to-[rgba(var(--color-background-dark),0.7)]"/>
      </div>
      <Navbar />

      {/* Content Container - Improved responsive padding and spacing */}
      <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:py-24 flex flex-row md:flex-row xs:items-end  md:items-center justify-between min-h-[calc(100vh-80px)]">
        {/* Left content - Improved text responsiveness */}
        <div className="xs:w-8/9 md:w-3/5 lg:w-1/2 mb-12 md:mb-0 mt-8 sm:mt-12 md:mt-0">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--color-text-primary))] mb-4 md:mb-6 ${prompt.className}`}>
            Building <span className={`text-[rgb(var(--color-primary-light))]`}>Digital</span> Experiences That <span className={`text-[rgb(var(--color-primary-light))]`}>Matter</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-6 md:mb-8 max-w-xl">
            I'm a full-stack developer passionate about creating innovative solutions that solve real-world problems.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/projects" className="px-4 sm:px-6 py-3 sm:py-3 rounded-sm border-2 border-[rgb(var(--color-primary-light))] bg-[rgb(var(--color-primary-light))] text-[rgb(var(--color-background-dark))] font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base">
              View My Work
            </Link>
            <Link href="/contact" className="px-4 sm:px-6 py-3 sm:py-3 rounded-sm border-2 border-[rgb(var(--color-primary-light))] text-[rgb(var(--color-text-primary))] font-semibold hover:bg-[rgba(var(--color-primary-light),0.1)] transition-all duration-300 text-sm sm:text-base">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Spacer for layout balance on larger screens */}
        <div className="hidden md:block md:w-2/5 lg:w-1/2">
          {/* This creates space for the face in the image to be visible */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;