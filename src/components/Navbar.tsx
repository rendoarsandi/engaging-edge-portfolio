
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navbarBg ? "bg-background/90 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">Rendo<span className="text-primary">Arsandi</span></span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary font-medium text-sm transition-colors link-underline"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground/80 hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
