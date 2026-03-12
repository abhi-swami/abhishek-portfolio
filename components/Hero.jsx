import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Prompt } from "next/font/google";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const prompt = Prompt({
  variable: "--font-prompt",
  weight: "600",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="relative xs:min-h-screen md:min-h-screen w-full overflow-hidden">
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
              <DialogContent className={"border border-red-300"}>
                <DialogHeader>
                  <DialogTitle>My Projects</DialogTitle>
                  <DialogDescription>
                    A selection of my recent work. Click any card to view details.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 mt-4">
                  {/* replace these with real project cards */}
                  <a href="https://github.com/abhi-swami/project1" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg bg-[rgb(var(--color-background-secondary-light))] hover:bg-[rgb(var(--color-background-secondary-light))]/90 transition">
                    <h3 className="font-semibold">Project One </h3>
                    <p className="text-sm text-muted-foreground">Description of project one.</p>
                  </a>
                  <a href="https://github.com/abhi-swami/project2" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg bg-[rgb(var(--color-background-secondary-light))] hover:bg-[rgb(var(--color-background-secondary-light))]/90 transition">
                    <h3 className="font-semibold">Project Two</h3>
                    <p className="text-sm text-muted-foreground">Description of project two.</p>
                  </a>
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
