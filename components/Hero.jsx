// components/HeroSection.js
import Image from "next/image";
import AbhiImage from "../public/abh-image.png";
import { Geist_Mono, Prompt } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  weight: "600",
  subsets: ["latin"],
});



export default function HeroSection() {

  return (
    <section className="w-full border py-4 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-4 md:gap-8 items-center z-10">
        {/* Left Content - Text */}
        <div className="order-2 md:order-1 mt-10 md:mt-0">
          {/* Subtle background circles */}
          <div className="relative z-20">
            <div className="absolute -top-20 -left-20 w-64 h-64 border border-gray-700 rounded-full opacity-30"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 border border-gray-700 rounded-full opacity-30"></div>
            <div className="absolute top-0 left-0 w-32 h-32 border border-gray-700 rounded-full opacity-30"></div>
          </div>

          <h1 className={`${prompt.className} relative text-4xl md:text-6xl lg:text-7xl font-bold leading-tight z-30`}>
            Nice to meet you! I'm{" "}
            <span className="relative inline-block overflow-x-visible whitespace-nowrap">
              <span className="relative z-10">Abhishek{" "}</span>
              <span className="text-[rgb(var(--color-primary-light))]">Swami</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-4 md:mb-8 max-w-lg z-20 pt-4 relative">
          Let's build something so good
          </p>

          <a
            href="#contact"
            className="inline-block uppercase font-medium tracking-wider py-2 border-b-2 border-[rgb(var(--color-primary-light))] hover:text-[rgb(var(--color-primary-light))] transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative z-50">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-tr-2xl rounded-bl-2xl">
            <Image
              src={AbhiImage.src}
              alt="Abhishek Swami"
              fill
              className="object-contain rounded-sm relative z-10"
              priority
            />
            {/* Pattern overlay */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-b-2 border-r-2 border-[rgb(var(--color-primary-light))] opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
