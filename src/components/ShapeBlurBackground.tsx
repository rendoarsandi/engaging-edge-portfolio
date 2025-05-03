import React, { useEffect, useState } from "react";

const ShapeBlurBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add a dampening factor to make the movement more subtle
      const dampening = 0.02;
      setMousePosition({
        x: e.clientX * dampening,
        y: e.clientY * dampening
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large pink/purple blur */}
      <div 
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[120px] transition-transform duration-[3s] ease-out pulse-blur-slow"
        style={{ 
          transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
        }}
        aria-hidden="true"
      />
      
      {/* Medium cyan blur */}
      <div 
        className="absolute top-[25%] left-[10%] h-[400px] w-[400px] rounded-full bg-cyan-400/20 blur-[120px] transition-transform duration-[3s] ease-out pulse-blur-medium"
        style={{ 
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
        aria-hidden="true"
      />
      
      {/* Small yellow/orange blur */}
      <div 
        className="absolute bottom-[10%] right-[20%] h-[350px] w-[350px] rounded-full bg-amber-400/20 blur-[100px] transition-transform duration-[3s] ease-out pulse-blur-fast"
        style={{ 
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * -0.3}px)`,
        }}
        aria-hidden="true"
      />
      
      {/* Extra blur for additional visual interest */}
      <div 
        className="absolute bottom-[40%] left-[5%] h-[350px] w-[350px] rounded-full bg-emerald-500/15 blur-[120px] transition-transform duration-[3s] ease-out pulse-blur-very-fast"
        style={{ 
          transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.2}px)`,
        }}
        aria-hidden="true"
      />

      {/* Additional smaller blurs for more depth */}
      <div 
        className="absolute top-[60%] right-[15%] h-[180px] w-[180px] rounded-full bg-blue-400/15 blur-[80px] transition-transform duration-[3s] ease-out pulse-blur-very-fast"
        style={{ 
          transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * -0.15}px)`,
        }}
        aria-hidden="true"
      />
      
      <div 
        className="absolute top-[10%] right-[30%] h-[200px] w-[200px] rounded-full bg-rose-400/10 blur-[100px] transition-transform duration-[3s] ease-out pulse-blur-medium"
        style={{ 
          transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ShapeBlurBackground; 