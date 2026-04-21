import { useEffect } from "react";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-full min-h-screen flex flex-col items-center justify-center z-999999 bg-darkBg transition-colors duration-500">
      {/* Ambient glow */}
      <div className="absolute w-60 h-60 bg-secondary/15 rounded-full blur-[80px]" />

      {/* Spinner rings */}
      <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
        <div className="absolute w-16 h-16 border-[3px] border-transparent border-t-primary border-l-primary/50 rounded-full animate-[spin_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite]" />
        <div className="absolute w-12 h-12 border-2 border-transparent border-t-secondary rounded-full animate-[spin_1.5s_linear_infinite_reverse]" />
        <div className="absolute w-8 h-8 border border-transparent border-t-muted rounded-full animate-[spin_2s_linear_infinite]" />
      </div>

      {/* Logo text */}
      <span className="font-josefin text-2xl font-bold text-gradient tracking-wider">
        Ilyas
      </span>
    </div>
  );
};

export default Preloader;
