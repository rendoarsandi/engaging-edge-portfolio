import { useSprings, animated, SpringValue, SpringConfig } from '@react-spring/web';
import { useEffect, useRef, useState, CSSProperties } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: Record<string, unknown>;
  animationTo?: Record<string, unknown>;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Create proper react-spring config
  const springConfig: SpringConfig = { 
    tension: 170,
    friction: 26
  };

  const springs = useSprings(
    letters.length,
    letters.map((_: string, i: number) => ({
      from: animationFrom,
      to: inView
        ? async (next: any) => {
          await next(animationTo);
          animatedCount.current += 1;
          if (animatedCount.current === letters.length && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: springConfig
    }))
  );

  // If there are no letters, just render the text directly
  if (!letters.length) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <animated.span
                key={index}
                style={springs[index] as any}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </animated.span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </p>
  );
};

export default SplitText; 