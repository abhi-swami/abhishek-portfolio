// components/Skills.js
export default function Skills() {
    const skills = [
      {
        category: "Frontend",
        technologies: [
          { name: "HTML5", level: 90 },
          { name: "CSS3", level: 85 },
          { name: "JavaScript", level: 90 },
          { name: "TypeScript", level: 80 },
          { name: "React.js", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "Tailwind CSS", level: 90 },
        ]
      },
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", level: 85 },
          { name: "Express.js", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "REST API", level: 90 },
          { name: "GraphQL", level: 75 },
        ]
      },
      {
        category: "Tools & Others",
        technologies: [
          { name: "Git", level: 85 },
          { name: "Docker", level: 70 },
          { name: "Jest", level: 75 },
          { name: "Webpack", level: 75 },
          { name: "AWS", level: 70 },
        ]
      }
    ];
  
    return (
      <section id="skills" className="py-20 bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <h2 className="section-title text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-primary-700 dark:text-primary-400">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-sm text-secondary-500">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <div 
                          className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }