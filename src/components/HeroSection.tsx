
import React, { useEffect, useState } from "react";
import { ArrowRight, Code, Code2, Database, ChevronDown } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    // Hide scroll indicator when scrolling past a certain point
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Additional floating decoration elements */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-primary/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-[40%] right-[20%] w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
      <div className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }}></div>

      {/* Floating code elements */}
      <div className="absolute top-1/4 left-10 md:left-20 opacity-20 animate-float">
        <Code2 size={32} className="text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-40 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Code size={40} className="text-secondary" />
      </div>
      <div className="absolute top-2/3 left-1/4 opacity-20 animate-float" style={{ animationDelay: "3s" }}>
        <Database size={28} className="text-primary" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className={`text-4xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}>
            <span className="block mb-2 relative">
              {/* Gradient background for the title */}
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-2xl -z-10"></span>
              <AnimatedText 
                text="Full-Stack Web Developer" 
                className="gradient-text"
                delay={500}
                speed={80}
              />
            </span>
          </h1>

          <p className={`max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}>
            Building seamless web experiences with modern frontend and powerful backend technologies.
            Let's create something amazing together.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all flex items-center justify-center group"
            >
              View My Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-primary/50 hover:border-primary hover:bg-primary/10 text-primary font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
          
          <div className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-full glass-card text-sm font-medium animate-fade-in backdrop-blur-sm bg-white/5"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Scroll indicator that follows the screen */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 transition-opacity duration-300">
          <span className="text-sm text-foreground/60 mb-2 px-3 py-1 backdrop-blur-sm rounded-full bg-background/30">Scroll Down</span>
          <div className="animate-bounce">
            <ChevronDown className="text-primary h-6 w-6" />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
