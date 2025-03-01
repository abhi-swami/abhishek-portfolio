// components/Projects.js
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with the MERN stack, featuring user authentication, product management, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      image: "/images/project1.jpg",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-app.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and project organization features.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Socket.io", "JWT"],
      image: "/images/project2.jpg",
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-taskmanager-app.com"
    },
    {
      title: "Developer Blog",
      description: "A technical blog platform with markdown support, code highlighting, and SEO optimization.",
      technologies: ["Next.js", "Tailwind CSS", "MDX", "Prisma", "PostgreSQL"],
      image: "/images/project3.jpg",
      github: "https://github.com/yourusername/dev-blog",
      live: "https://your-devblog.com"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-400">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                  
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}