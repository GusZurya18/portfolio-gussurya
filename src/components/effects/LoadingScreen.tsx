import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-foreground flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-background text-6xl md:text-8xl font-black mb-8 tracking-tighter">
        I'm Gus Surya
        <span className="inline-block animate-pulse">.</span>
      </div>
      
      <div className="w-64 h-1 bg-background/20 overflow-hidden">
        <div
          className="h-full bg-background transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      
      <div className="text-background/60 mt-4 text-sm font-medium">
        {Math.floor(Math.min(progress, 100))}%
      </div>
    </div>
  );
};

export default LoadingScreen;
