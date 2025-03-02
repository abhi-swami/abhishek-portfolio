// components/HeroSection.js
import Image from "next/image";
import AbhiImage from "../public/abhi.png";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { mounted } = useTheme();
 
  if (!mounted) {
    return <div className="w-full min-h-[90vh] bg-[rgb(var(--color-background))]"></div>;
  }
  return (
    <section className="w-full min-h-[90vh] py-16 md:py-24 bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Content - Text */}
        <div className="order-2 md:order-1 mt-10 md:mt-0">
          {/* Subtle background circles */}
          <div className="relative z-20">
            <div className="absolute -top-20 -left-20 w-64 h-64 border border-gray-700 rounded-full opacity-30"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 border border-gray-700 rounded-full opacity-30"></div>
            <div className="absolute top-0 left-0 w-32 h-32 border border-gray-700 rounded-full opacity-30"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 z-30">
            Nice to meet you! I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Abhishek Swami</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[rgb(var(--color-primary-light))]"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg z-20">
            Based in India, I'm a full-stack developer passionate about building
            accessible web apps that users love.
          </p>

          <a
            href="#contact"
            className="inline-block uppercase font-medium tracking-wider pb-2 border-b-2 border-[rgb(var(--color-primary-light))] hover:text-[rgb(var(--color-primary-light))] transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96 bg-white rounded-tr-2xl rounded-bl-2xl">
            <Image
              src={AbhiImage.src}
              alt="Adil Rana"
              fill
              className="object-contain grayscale rounded-sm"
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
