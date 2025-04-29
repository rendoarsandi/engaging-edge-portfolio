
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  delay
}) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
