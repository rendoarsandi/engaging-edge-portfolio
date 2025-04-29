
import React, { useEffect } from "react";
import { Check, Code, Database, Globe, Layout, Server } from "lucide-react";

const AboutSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Frontend Development", icon: Layout, description: "Creating responsive and interactive user interfaces with modern frameworks." },
    { name: "Backend Development", icon: Server, description: "Developing robust server-side applications and APIs." },
    { name: "Database Management", icon: Database, description: "Designing and optimizing databases for performance and scalability." },
    { name: "Web Applications", icon: Globe, description: "Building full-stack applications with seamless user experiences." },
    { name: "Clean Code", icon: Code, description: "Writing maintainable, efficient, and well-documented code." },
  ];

  const technologies = [
    "React", "Angular", "Vue.js", "Node.js", "Express", "Next.js",
    "Python", "Django", "PHP", "Laravel", "TypeScript", "JavaScript",
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Docker",
    "GraphQL", "REST APIs", "Tailwind CSS", "SASS/SCSS", "Git", "CI/CD"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* About content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal">
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="space-y-4 reveal" style={{ transitionDelay: '200ms' }}>
              <p className="text-lg text-foreground/80">
                I'm a passionate full-stack web developer with expertise in both frontend and backend technologies. 
                With a strong foundation in modern web development practices, I create seamless digital experiences 
                that are both beautiful and functional.
              </p>
              
              <p className="text-lg text-foreground/80">
                My journey in development started over 5 years ago, and since then, I've been constantly learning 
                and adapting to new technologies and methodologies. I believe in writing clean, maintainable code 
                and building applications that provide real value to users.
              </p>
              
              <p className="text-lg text-foreground/80">
                I enjoy tackling complex problems and turning them into simple, elegant solutions. Whether it's 
                crafting pixel-perfect interfaces or architecting scalable backend systems, I approach each project 
                with dedication and attention to detail.
              </p>
            </div>
            
            <div className="mt-10 reveal" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-semibold mb-6">My Expertise</h3>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3 p-1 rounded-full bg-primary/20 text-primary">
                      <skill.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                      <p className="text-sm text-foreground/70">{skill.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Skills */}
          <div className="lg:w-1/2">
            <div className="glass-card rounded-xl p-8 h-full reveal" style={{ transitionDelay: '600ms' }}>
              <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
              
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-2 bg-muted/50 rounded-md text-sm flex items-center gap-1.5 hover:bg-primary/20 transition-colors"
                  >
                    <Check size={14} className="text-primary" />
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-6">Professional Journey</h3>
                
                <div className="space-y-6">
                  <div className="relative pl-8 pb-6 border-l-2 border-muted">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="font-medium">Senior Web Developer</h4>
                    <p className="text-sm text-foreground/70">TechSolutions Inc. • 2021 - Present</p>
                    <p className="mt-2 text-sm">Leading development of enterprise web applications and mentoring junior developers.</p>
                  </div>
                  
                  <div className="relative pl-8 pb-6 border-l-2 border-muted">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
                    <h4 className="font-medium">Full-Stack Developer</h4>
                    <p className="text-sm text-foreground/70">WebCraft Studio • 2018 - 2021</p>
                    <p className="mt-2 text-sm">Developed and maintained various client projects from concept to deployment.</p>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                    <h4 className="font-medium">Frontend Developer</h4>
                    <p className="text-sm text-foreground/70">DigitalEdge • 2016 - 2018</p>
                    <p className="mt-2 text-sm">Created responsive and interactive user interfaces for web applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
