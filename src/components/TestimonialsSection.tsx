import React, { useEffect } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ name, role, company, content, rating, image, delay }) => (
  <div
    className="reveal glass-card rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-foreground/70">{role}, {company}</p>
        <div className="flex mt-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
    <div className="relative">
      <Quote size={40} className="absolute -top-1 -left-2 text-primary/10" />
      <p className="text-foreground/80 relative z-10 pt-4">{content}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc.",
      content: "Working with this developer was a game-changer for our company. They took our outdated website and transformed it into a modern, high-converting platform. Their attention to detail and communication throughout the project was exceptional.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      delay: 150
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "GrowthSpark",
      content: "I've worked with many developers over the years, but none have delivered the quality and reliability I've experienced here. Our e-commerce website was completed ahead of schedule and the attention to performance optimization resulted in a 40% increase in conversions.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      delay: 300
    },
    {
      name: "Jessica Williams",
      role: "Product Manager",
      company: "InnovateLabs",
      content: "The custom CRM solution developed for our team has completely transformed our workflow. The developer took the time to understand our unique challenges and delivered a solution that perfectly fits our needs. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      delay: 450
    },
    {
      name: "David Rodriguez",
      role: "CEO",
      company: "Artisan Crafts Co.",
      content: "As a small business owner, I needed a web presence that would help me compete with larger companies. The responsive design and SEO optimization implemented have made a huge difference. Our organic traffic has increased by 120% in just three months!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      delay: 600
    },
    {
      name: "Emily Nguyen",
      role: "Creative Director",
      company: "DesignHub Studios",
      content: "The developer's ability to translate our creative vision into functional, beautiful UI was impressive. They balanced aesthetic design with technical performance perfectly. Our portfolio site has received countless compliments from clients and competitors alike.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      delay: 750
    },
    {
      name: "James Wilson",
      role: "Operations Manager",
      company: "LogisticsPlus",
      content: "The inventory management system developed for our warehouse operations has cut processing time in half. The developer was responsive to feedback and made adjustments quickly. The training and documentation provided ensured a smooth transition for our team.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      delay: 900
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            <span className="text-gradient">Client Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/80 reveal" style={{ transitionDelay: '200ms' }}>
            Don't just take my word for it. Here's what clients have to say about their experience working with me on their digital projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
              delay={testimonial.delay}
            />
          ))}
        </div>

        <div className="text-center mt-16 reveal" style={{ transitionDelay: '800ms' }}>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 rounded-lg border border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Ready to start your project? Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 