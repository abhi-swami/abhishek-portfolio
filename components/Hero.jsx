import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Prompt } from "next/font/google";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const prompt = Prompt({
  variable: "--font-prompt",
  weight: "600",
  subsets: ["latin"],
});

const resumeUrl =
  "https://pub-19394998e7f349069f6dadeecc9a4994.r2.dev/Abhishek-Swami-Resume.pdf";

const projects = [
  {
    title: "EduvateAI",
    description:
      "A platform offering smart answers to science and math queries, career counselling, and interactive worksheets for students",
    techStack: ["Next.js", "Redux", "Shadn"],
    image: "/eduvateai.png",
    github: "https://github.com/abhi-swami/eduvateai",
    live: "https://eduvateai.com/",
  },
  {
    title: "Medicare Plus",
    description: "Clone of an India-based pharmaceutical e-commerce website.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "/medicare.png",
    github: "https://github.com/SaurabhBH123/medicare-plus",
    live: "https://frontend-seven-mauve.vercel.app/",
  },
];

const HeroSection = () => {
  const triggerHaptic = () => {
    if (typeof window !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };
  const handleResumeClick = async (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;

    // open new tab for viewing
    window.open(resumeUrl, "_blank", "noopener");
    // fetch and trigger download
    fetch(resumeUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Abhishek-Swami-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      })
      .catch((err) => {
        console.log("Resume download failed", err);
      });
  };

  return (
    <div className="relative xs:min-h-screen md:min-h-screen w-full md:overflow-hidden">
      {/* Background with overlay - Adjusted for face visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="abhishek swami"
          fill
          className="object-cover xs:object-[70%_90%] lg:object-center"
          priority
          sizes="100vw"
          quality={90}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 
        xs:bg-gradient-to-b 
        xs:from-black/10 xs:to-black/70
        md:bg-gradient-to-l
        md:from-black/10 md:to-black/70"
        />
      </div>

      <Navbar />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 flex items-end md:items-center min-h-screen">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${prompt.className}`}
          >
            Building{" "}
            <span className="text-[rgb(var(--color-primary))]">Digital</span>
            Experiences That{" "}
            <span className="text-[rgb(var(--color-primary))]">Matter</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            I'm Abhishek — a full-stack developer driven by a passion for
            building innovative solutions that tackle real-world problems
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
            {/* project dialog trigger */}

            <a
              href={resumeUrl}
              onClick={(e) => {
                triggerHaptic();
                handleResumeClick(e);
              }}
              className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base border-2 border-[rgb(var(--color-primary))] 
                  bg-[rgb(var(--color-primary))] 
                  text-black font-semibold hover:opacity-90 transition whitespace-nowrap flex gap-2 items-center"
              aria-label="Download Resume"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 20h14a1 1 0 001-1v-2a1 1 0 10-2 0v1H6v-1a1 1 0 10-2 0v2a1 1 0 001 1zm7-18a1 1 0 00-1 1v8H8l4 4 4-4h-3V3a1 1 0 00-1-1z" />
              </svg>
            </a>
       

            <Link
              href="#contact"
              className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base border-2 border-[rgb(var(--color-primary))] 
              text-white hover:bg-[rgba(var(--color-primary),0.1)] transition whitespace-nowrap"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
