import React, { useEffect, useRef, useState } from 'react';

interface SimpleSplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
}

const SimpleSplitText: React.FC<SimpleSplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  onComplete
}) => {
  const [visible, setVisible] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');
  const allLetters = words.join('').split('');
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timers: NodeJS.Timeout[] = [];
          
          // Start animation for each letter
          allLetters.forEach((_, index) => {
            const timer = setTimeout(() => {
              setVisible(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              
              // Call onComplete when all letters are visible
              if (index === allLetters.length - 1) {
                setTimeout(() => {
                  if (onComplete) onComplete();
                }, 300);
              }
            }, index * delay);
            
            timers.push(timer);
          });
          
          observer.unobserve(containerRef.current);
          
          return () => {
            timers.forEach(timer => clearTimeout(timer));
          };
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [text, delay, allLetters.length, onComplete]);
  
  // Initialize all letters as invisible
  useEffect(() => {
    setVisible(new Array(allLetters.length).fill(false));
  }, [allLetters.length]);
  
  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((letter, letterIndex) => {
            // Calculate the absolute index of this letter
            const absoluteIndex = words
              .slice(0, wordIndex)
              .join('')
              .length + letterIndex;
            
            return (
              <span
                key={letterIndex}
                className="inline-block transform transition-all duration-300"
                style={{
                  opacity: visible[absoluteIndex] ? 1 : 0,
                  transform: visible[absoluteIndex] 
                    ? 'translateY(0)' 
                    : 'translateY(20px)'
                }}
              >
                {letter}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block" style={{ width: '0.3em' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default SimpleSplitText; 