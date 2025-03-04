// components/HeroSection.js
import Image from "next/image";
import AbhiImage from "../public/abh-image.png";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  variable: "--font-prompt",
  weight: "600",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="w-full py-4 xs:py-4 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8 items-center z-10">
        {/* Left Content - Text */}
        <div className="order-2 md:order-1 mt-6 xs:mt-8 sm:mt-10 md:mt-0">
          {/* Subtle background circles */}
          <div className="relative z-20">
            <div className="absolute -top-10 xs:-top-12 sm:-top-16 md:-top-20 -left-10 xs:-left-12 sm:-left-16 md:-left-20 w-32 xs:w-40 sm:w-48 md:w-64 h-32 xs:h-40 sm:h-48 md:h-64 border border-gray-700 rounded-full opacity-30"></div>
            <div className="absolute -top-6 xs:-top-8 sm:-top-9 md:-top-10 -left-6 xs:-left-8 sm:-left-9 md:-left-10 w-24 xs:w-32 sm:w-40 md:w-48 h-24 xs:h-32 sm:h-40 md:h-48 border border-gray-700 rounded-full opacity-30"></div>
            <div className="absolute top-0 left-0 w-16 xs:w-20 sm:w-24 md:w-32 h-16 xs:h-20 sm:h-24 md:h-32 border border-gray-700 rounded-full opacity-30"></div>
          </div>

          <h1 className={`${prompt.className} relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight z-30`}>
            Nice to meet you! I'm{" "}
            <span className="relative inline-block overflow-x-visible whitespace-nowrap">
              <span className="relative z-10">Abhishek{" "}</span>
              <span className="text-[rgb(var(--color-primary-light))]">Swami</span>
            </span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-3 xs:mb-4 sm:mb-6 md:mb-8 max-w-lg z-20 pt-2 xs:pt-3 sm:pt-4 relative">
            Let's build something so good
          </p>

          <a
            href="#contact"
            className="inline-block uppercase text-xs xs:text-sm sm:text-base font-medium tracking-wider py-1.5 xs:py-2 border-b-2 border-[rgb(var(--color-primary-light))] hover:text-[rgb(var(--color-primary-light))] transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative z-50">
          <div className="relative w-48 xs:w-56 sm:w-64 md:w-80 lg:w-96 h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 rounded-tr-xl rounded-bl-xl sm:rounded-tr-2xl sm:rounded-bl-2xl">
            <Image
              src={AbhiImage.src}
              alt="Abhishek Swami"
              fill
              className="object-contain rounded-sm relative z-10"
              priority
            />
            {/* Pattern overlay */}
            <div className="absolute -bottom-2 xs:-bottom-3 sm:-bottom-4 -right-2 xs:-right-3 sm:-right-4 w-full h-full border-b-2 border-r-2 border-[rgb(var(--color-primary-light))] opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}