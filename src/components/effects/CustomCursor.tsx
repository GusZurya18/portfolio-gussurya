import { useMousePosition } from "@/hooks/use-animations";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor after mount
    const timer = setTimeout(() => setIsVisible(true), 100);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hoverable")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: x - 4,
          top: y - 4,
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          backgroundColor: "white",
          borderRadius: "50%",
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      />
      {/* Cursor ring */}
      <div
        className={`fixed pointer-events-none z-[9998] border border-foreground/50 rounded-full transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: x - 20,
          top: y - 20,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          transform: isHovering ? "scale(1.2)" : "scale(1)",
        }}
      />
    </>
  );
};

export default CustomCursor;
