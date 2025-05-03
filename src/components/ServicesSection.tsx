import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Code, Database, Globe, Layout, Pen, Server, Smartphone, Wrench } from "lucide-react";

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks like React, Vue, or Angular.",
      icon: Layout,
      delay: 150
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications, APIs, and services with Node.js, Python, or PHP.",
      icon: Server,
      delay: 300
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development with seamless integration between frontend and backend.",
      icon: Code,
      delay: 450
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive, user-friendly interfaces with focus on accessibility and user experience.",
      icon: Pen,
      delay: 600
    },
    {
      title: "Database Design",
      description: "Planning and implementing efficient database structures with SQL or NoSQL technologies.",
      icon: Database,
      delay: 750
    },
    {
      title: "API Development",
      description: "Creating RESTful or GraphQL APIs that are secure, performant, and well-documented.",
      icon: Globe,
      delay: 900
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, bug fixes, and feature enhancements for existing applications.",
      icon: Wrench,
      delay: 1050
    },
    {
      title: "Progressive Web Apps",
      description: "Building apps that work offline, load instantly, and provide a native-like experience.",
      icon: Smartphone,
      delay: 1200
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-card to-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            <span className="text-gradient">Services I Offer</span>
          </h2>
          <p className="text-lg text-foreground/80 reveal" style={{ transitionDelay: '200ms' }}>
            Comprehensive web development solutions tailored to your specific needs.
            From concept to deployment, I handle all aspects of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>

        {/* Service Packages */}
        <div className="mt-16 reveal" style={{ transitionDelay: '1300ms' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 reveal">
            <span className="text-gradient">Choose Your Package</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="glass-card rounded-xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 border-transparent">
              <h4 className="text-xl font-bold mb-2">Starter</h4>
              <p className="text-3xl font-bold text-gradient mb-4">$50</p>
              <h5 className="text-lg font-bold mb-2">Basic Web Presence</h5>
              <p className="text-sm text-foreground/80 mb-4">Simple 1-page website to establish your online presence</p>
              <ul className="mb-6 flex-grow space-y-3">
                <li className="flex items-start justify-between">
                  <span>Delivery Time</span>
                  <span className="font-medium">3 days</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Number of Pages</span>
                  <span className="font-medium">1</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Number of Revisions</span>
                  <span className="font-medium">Unlimited</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Source Files</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Commercial Use</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Responsive Design</span>
                  <span className="text-primary">✓</span>
                </li>
              </ul>
              <div className="text-xs text-foreground/60 mb-4 flex items-center">
                <span className="mr-2">⏱️</span>
                <span>3 days delivery — Revisions may occur after this date.</span>
              </div>
              <a 
                href="https://www.upwork.com/services/product/design-standard-business-website-premium-website-solution-1918621449202979190?ref=project_share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full py-3 rounded-md text-center font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
            
            {/* Standard Package */}
            <div className="glass-card rounded-xl p-8 flex flex-col h-full relative transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <h4 className="text-xl font-bold mb-2">Standard</h4>
              <p className="text-3xl font-bold text-gradient mb-4">$75</p>
              <h5 className="text-lg font-bold mb-2">Standard Business Website</h5>
              <p className="text-sm text-foreground/80 mb-4">Ideal for businesses needing a functional website with basic user interaction.</p>
              <ul className="mb-6 flex-grow space-y-3">
                <li className="flex items-start justify-between">
                  <span>Delivery Time</span>
                  <span className="font-medium">7 days</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Number of Pages</span>
                  <span className="font-medium">5</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Number of Revisions</span>
                  <span className="font-medium">Unlimited</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Source Files</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Commercial Use</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Convert to HTML/CSS</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Responsive Design</span>
                  <span className="text-primary">✓</span>
                </li>
              </ul>
              <div className="text-xs text-foreground/60 mb-4 flex items-center">
                <span className="mr-2">⏱️</span>
                <span>7 days delivery — Revisions may occur after this date.</span>
              </div>
              <a 
                href="https://www.upwork.com/services/product/design-standard-business-website-premium-website-solution-1918621449202979190?ref=project_share&tier=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full py-3 rounded-md text-center font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
            
            {/* Advanced Package */}
            <div className="glass-card rounded-xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 border-transparent">
              <h4 className="text-xl font-bold mb-2">Advanced</h4>
              <p className="text-3xl font-bold text-gradient mb-4">$250</p>
              <h5 className="text-lg font-bold mb-2">Premium Website Solution</h5>
              <p className="text-sm text-foreground/80 mb-4">A comprehensive package for businesses requiring a dynamic, backend database.</p>
              <ul className="mb-6 flex-grow space-y-3">
                <li className="flex items-start justify-between">
                  <span>Delivery Time</span>
                  <span className="font-medium">30 days</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Number of Pages</span>
                  <span className="font-medium">15</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Number of Revisions</span>
                  <span className="font-medium">Unlimited</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Source Files</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Commercial Use</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Convert to HTML/CSS</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Responsive Design</span>
                  <span className="text-primary">✓</span>
                </li>
                <li className="flex items-start justify-between">
                  <span>Interactive Mockup</span>
                  <span className="text-primary">✓</span>
                </li>
              </ul>
              <div className="text-xs text-foreground/60 mb-4 flex items-center">
                <span className="mr-2">⏱️</span>
                <span>30 days delivery — Revisions may occur after this date.</span>
              </div>
              <a 
                href="https://www.upwork.com/services/product/design-standard-business-website-premium-website-solution-1918621449202979190?ref=project_share&tier=2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full py-3 rounded-md text-center font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-border reveal" style={{ transitionDelay: '1000ms' }}>
          <div className="glass-card rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">100+</h3>
                <p className="text-foreground/80">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">50+</h3>
                <p className="text-foreground/80">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">5+</h3>
                <p className="text-foreground/80">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
