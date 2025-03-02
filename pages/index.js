import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Skills from "@/components/skills/Skills";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ weight: "400", subsets: ['latin'] })


export default function Home() {
  return (
    <div
      className={`${inter.className} min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
    >
      <Navbar />
      <HeroSection/>
      <Skills/>

      <div className="pt-20 p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl font-bold">
          Welcome to My Website
        </h1>

        {/* Test element for dark mode */}
        <div className="mt-8 p-4 bg-card-light dark:bg-card-dark rounded shadow-md">
          <p>
            This element should change with dark mode
          </p>
        </div>
      </div>
    </div>
  );
}