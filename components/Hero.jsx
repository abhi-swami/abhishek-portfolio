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

const projects = [
  {
    title: "EduvateAI",
    description:
      "A platform offering smart answers to science and math queries, career counselling, and interactive worksheets for students",
    techStack: ["Next.js", "Redux", "Shadn"],
    image: "/hero.webp",
    github: "https://github.com/abhi-swami/eduvateai",
    live: "https://eduvateai.com/",
  },
  {
    title: "Medicare Plus",
    description:
      "Clone of an India-based pharmaceutical e-commerce website.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "/abh-image.png",
    github: "https://github.com/SaurabhBH123/medicare-plus",
    live: "https://frontend-seven-mauve.vercel.app/",
  },
];

const HeroSection = () => {
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
            I'm a full-stack developer passionate about creating innovative
            solutions that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
            {/* project dialog trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base border-2 border-[rgb(var(--color-primary))] 
                  bg-[rgb(var(--color-primary))] 
                  text-black font-semibold hover:opacity-90 transition whitespace-nowrap"
                >
                  View My Work
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl border border-[rgb(var(--color-primary))]/30 bg-[rgb(var(--color-card))] text-[rgb(var(--color-text-primary-light))]">
                <DialogHeader>
                  <DialogTitle>My Projects</DialogTitle>
                  {/* <DialogDescription>
                    A selection of my recent work with live previews and source code.
                  </DialogDescription> */}
                </DialogHeader>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  {projects.map((project) => (
                    <article
                      key={project.title}
                      className="overflow-hidden rounded-xl border border-white/10 bg-[rgb(var(--color-background-secondary-light))] shadow-lg"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      <div className="space-y-4 p-5">
                        <div>
                          <h3 className="text-xl font-semibold text-[rgb(var(--color-text-secondary-light))]">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-[rgb(var(--color-text-secondary-light))]">
                            {project.description}
                          </p>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-primary))]">
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="border border-[rgb(var(--color-primary))]/30 px-3 py-1 text-xs text-[rgb(var(--color-text-secondary-light))]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center border border-[rgb(var(--color-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--color-text-secondary-light))] transition hover:bg-[rgba(var(--color-primary),0.12)]"
                          >
                            GitHub
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[rgb(var(--color-primary))] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                          >
                            Live Preview
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {/* <DialogFooter showCloseButton /> */}
              </DialogContent>
            </Dialog>

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
