import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Skills from "@/components/skills/Skills";


const inter = Inter({ weight: "400", subsets: ['latin'] })


export default function Home() {
  return (
    <div
      className={`${inter.className} min-h-screen bg-[rgb(var(--color-background-light))] text-[rgb(var(--color-text-primary))] `}
    >
      <Navbar />
      <HeroSection/>
      <Skills/>

     
    </div>
  );
}