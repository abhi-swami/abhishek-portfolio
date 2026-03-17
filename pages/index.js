import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";
import HeroSection from "@/components/Hero";
// import Skills from "@/components/skills/Skills";
const Skills = dynamic(() => import("@/components/skills/Skills"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import AboutMe from "@/components/Aboutme";
import Stats from "@/components/stats";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Swami - Full Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer specializing in Next.js, React, and Tailwind CSS. Passionate about creating innovative web solutions and optimizing performance."
        />
        <meta
          name="keywords"
          content="full stack developer, nextjs, react, tailwind css, web development, portfolio, seo, performance optimization"
        />
        <meta name="author" content="Abhishek Swami" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://abhi-swami.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Abhishek Swami - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Full-stack developer specializing in Next.js, React, and Tailwind CSS. Passionate about creating innovative web solutions."
        />
        <meta property="og:url" content="https://abhi-swami.in" />
        <meta
          property="og:image"
          content="https://pub-19394998e7f349069f6dadeecc9a4994.r2.dev/hero.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Abhishek Swami - Full Stack Developer"
        />
        <meta
          property="twitter:description"
          content="Full-stack developer specializing in Next.js, React, and Tailwind CSS. Passionate about creating innovative web solutions."
        />
        <meta
          property="twitter:image"
          content="https://pub-19394998e7f349069f6dadeecc9a4994.r2.dev/hero.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${inter.className} min-h-screen bg-[rgb(var(--color-background-primary-light))] text-[rgb(var(--color-text-primary-light))] `}
      >
        <HeroSection />
        <AboutMe />
        <Skills />
        {/* Revert the protfolio form here and just remove the project section */}
        <Projects/>
        <Stats />
        <Contact />
      </div>
    </>
  );
}
