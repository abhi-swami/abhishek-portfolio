import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Skills from "@/components/skills/Skills";
import AboutMe from "@/components/Aboutme";
import Stats from "@/components/stats";

const inter = Inter({ weight: "400", subsets: ['latin'] })


export default function Home() {
  return (
    <div
      className={`${inter.className} min-h-screen bg-[rgb(var(--color-background-primary-light))] text-[rgb(var(--color-text-primary-light))] `}
    >
      <HeroSection />
      <AboutMe />
      <Skills />
      <Stats />
    </div>
  );
}