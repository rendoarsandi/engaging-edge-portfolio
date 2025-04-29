
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gradient">Rendo<span className="text-primary">Arsandi</span></span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
          <p>© {currentYear} Rendo Arsandi. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
