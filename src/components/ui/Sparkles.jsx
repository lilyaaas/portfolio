import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// --- UTILS ---
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const range = (len) => Array.from({ length: len }, (_, i) => i);

// --- HOOKS ---
const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = React.useRef(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
};

// --- CONFIG ---
const DEFAULT_COLORS = ["#D083A0", "#FFD700", "#00FFFF", "#ADFF2F"];

const generateSparkle = (color, min, max) => {
  return {
    id: uuidv4(),
    createdAt: Date.now(),
    color,
    size: random(min, max),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      zIndex: 2,
    },
  };
};

const Sparkles = ({ 
  colors = DEFAULT_COLORS, 
  children, 
  minSize = 10,
  maxSize = 20,
  ...delegated 
}) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(3).map(() => 
      generateSparkle(colors[random(0, colors.length)], minSize, maxSize)
    );
  });

  useRandomInterval(
    () => {
      const randomColor = colors[random(0, colors.length)];
      const sparkle = generateSparkle(randomColor, minSize, maxSize);
      
      setSparkles(prevSparkles => {
        const now = Date.now();
        const nextSparkles = prevSparkles.filter(sp => (now - sp.createdAt) < 750);
        nextSparkles.push(sparkle);
        return nextSparkles;
      });
    },
    50,
    450
  );

  return (
    <span className="inline-block relative" {...delegated}>
      <style>{`
        @keyframes comeInOut {
          0% { transform: scale(0); }
          50% { transform: scale(1); }
          100% { transform: scale(0); }
        }
      `}</style>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className="relative z-10 font-bold">{children}</strong>
    </span>
  );
};

const Sparkle = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
  
  return (
    <span className="absolute block pointer-events-none animate-[comeInOut_700ms_forwards]" style={style} aria-hidden="true">
      <svg
        className="block animate-spin"
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
      >
        <path d={path} fill={color} />
      </svg>
    </span>
  );
};

export default Sparkles;