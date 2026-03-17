import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EduvateAI",
    description:
      "A platform offering smart answers to science and math queries, career counselling, and interactive worksheets for students",
    techStack: ["Next.js", "Redux", "Shadn"],
    image: "/eduvateai.png",
    github: "https://github.com/abhi-swami/eduvateai",
    live: "https://eduvateai.com/",
    label: "Featured Build",
  },
  {
    title: "Medicare Plus",
    description:
      "A clone of Tata 1mg, an India-based pharmaceutical e-commerce platform for medicines and healthcare products.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "/medicare.png",
    github: "https://github.com/SaurabhBH123/medicare-plus",
    live: "https://frontend-seven-mauve.vercel.app/",
    label: "Responsive Commerce",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[rgb(var(--color-background-primary-dark))] py-8 sm:py-12 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-8 h-40 w-40 rounded-full bg-[rgb(var(--color-primary))]/10 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold text-[rgb(var(--color-text-primary-light))] sm:text-4xl md:text-5xl">
            Projects Highlights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            A compact set of builds across education and commerce, designed for
            usability, responsiveness, and real-world delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--color-primary))]/35"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />

              <div className="relative">
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="text-2xl font-semibold text-white sm:text-[1.75rem] leading-tight md:leading-0">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-6 p-2 sm:p-6">
                  <p className="text-sm leading-6 text-white/75 sm:text-[15px]">
                    {project.description}
                  </p>

                  <div className="border border-white/8 bg-black/15 p-2 md:p-4">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[rgb(var(--color-primary))] sm:text-xs">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className=" border border-[rgb(var(--color-primary))]/25 bg-[rgb(var(--color-primary))]/8 px-3 py-1.5 text-[11px] font-medium text-white/85 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-start gap-4 mb-2 md:mb-8">
                    <div className="inline-flex gap-2 sm:gap-2 md:gap-3 rounded-sm p-1">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 p-2 sm:px-2 sm:py-1 md:px-6 md:py-3 text-sm border-2 border-[rgb(var(--color-primary))] 
                  bg-[rgb(var(--color-primary))] 
                  text-black font-semibold hover:opacity-90 transition whitespace-nowrap leading-none"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        Github
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        className="inline-flex items-center gap-2 p-2 sm:px-2 sm:py-1 md:px-6 md:py-3 text-sm border-2 border-[rgb(var(--color-primary))] 
              text-white hover:bg-[rgba(var(--color-primary),0.1)] transition whitespace-nowrap leading-none"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
