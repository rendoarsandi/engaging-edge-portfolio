
import React, { useEffect, useRef } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  once = true,
  delay = 0,
  speed = 100,
  showCursor = true
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (delay > 0 && !isTyping) {
      timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    }
    
    if (!isTyping) {
      setIsTyping(true);
      return;
    }
    
    if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
    }
    
    return () => clearTimeout(timer);
  }, [text, isTyping, currentIndex, delay, speed]);

  return (
    <span ref={textRef} className={className}>
      {displayText}
      {showCursor && isTyping && currentIndex < text.length && (
        <span className="cursor"></span>
      )}
    </span>
  );
};

export default AnimatedText;
