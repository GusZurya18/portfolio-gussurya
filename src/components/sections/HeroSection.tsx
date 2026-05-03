import { ArrowUpRight, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { useEffect, useState } from "react";

// Helper function to convert hex color to hue-rotate value
const getHueRotate = (hexColor: string): number => {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;
  
  // Find max and min values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  
  let h = 0;
  
  if (diff === 0) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: h = ((g - b) / diff) % 6; break;
      case g: h = (b - r) / diff + 2; break;
      case b: h = (r - g) / diff + 4; break;
    }
    h *= 60;
  }
  
  return Math.round(h);
};

// Floating tech icons component
const FloatingIcons = () => {
  const icons = [
    { name: "Figma", url: "https://files.svgcdn.io/devicon/figma.svg", color: "#F24E1E", position: "top-20 left-[10%]", delay: 0 },
    { name: "VS Code", url: "https://files.svgcdn.io/devicon/vscode.svg", color: "#007ACC", position: "top-32 right-[15%]", delay: 0.5 },
    { name: "Android", url: "https://files.svgcdn.io/devicon/android.svg", color: "#3DDC84", position: "top-[45%] left-[5%]", delay: 1 },
    { name: "Ai", url: "https://files.svgcdn.io/ri/ai.svg", color: "#FF9A00", position: "bottom-32 left-[12%]", delay: 1.5 },
    { name: "Obsidian", url: "https://files.svgcdn.io/logos/obsidian-icon.svg", color: "#31A8FF", position: "top-28 left-[25%]", delay: 2 },
    { name: "React", url: "https://files.svgcdn.io/devicon/react.svg", color: "#61DAFB", position: "bottom-40 right-[10%]", delay: 0.3 },
    { name: "Laravel", url: "https://files.svgcdn.io/devicon/laravel.svg", color: "#339933", position: "top-[40%] right-[8%]", delay: 0.8 },
    { name: "IoT", url: "https://files.svgcdn.io/eos-icons/iot.svg", color: "#00B4AB", position: "bottom-28 right-[20%]", delay: 1.2 },
    { name : "Flutter", url: "https://files.svgcdn.io/devicon/flutter.svg", color: "#FF5722", position: "top-16 right-[5%]", delay: 1.8 },
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={icon.name}
          className={`absolute ${icon.position} hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-background border border-border shadow-lg opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer z-10`}
          style={{
            animation: `float 4s ease-in-out infinite`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <img 
            src={icon.url}
            alt={icon.name}
            className="w-6 h-6"
            style={{ filter: `brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(${getHueRotate(icon.color)})` }}
          />
        </div>
      ))}
    </>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Floating Tech Icons */}
      <FloatingIcons />

      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, hsl(var(--foreground) / 0.03) 0%, transparent 50%)`,
          transition: "background 0.3s ease-out",
        }}
      />

      <div className="container mx-auto relative">
        <div className="flex flex-col items-center text-center">
          {/* Intro text */}
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="text-lg md:text-xl mb-6">
              👋 Hi, I'm <span className="font-semibold">Gus Surya</span> — a creative designer & developer
            </p>
          </ScrollReveal>

          {/* Main Typography */}
          <div className="relative mb-6">
            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="text-display-xl font-black relative">
                <span className="relative inline-block hover:text-foreground/80 transition-colors duration-300">
                UI/UX-
                </span>
                <span className="relative inline-flex items-center">
                  Designer
                  <MousePointer 
                    className="absolute -top-4 -right-8 w-6 h-6 animate-bounce" 
                    style={{ animationDuration: "2s" }}
                  />
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex items-center justify-center gap-4 mt-2">
                <h2 className="text-display-lg text-stroke font-black hover:text-foreground transition-all duration-500 cursor-default">
                  & Developer
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Short Description */}
          <ScrollReveal animation="fade-up" delay={350}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Crafting seamless digital experiences from concept to code. 
              Specialized in <span className="text-foreground font-medium">UI/UX | Web & Mobile Development</span>, 
              <span className="text-foreground font-medium"> IoT Enthusiast</span>, and 
              <span className="text-foreground font-medium"> Creative Writing</span>.
            </p>
          </ScrollReveal>

          {/* Portrait Image */}
          <ScrollReveal animation="scale" delay={400}>
            <div 
              className="relative w-56 h-56 md:w-72 md:h-72 mb-8 group"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-foreground/10 group-hover:border-foreground/30 transition-all duration-500">
                <img
                  src={heroPortrait}
                  alt="Gus Surya - Fullstack Developer & Designer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-foreground/10 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
              {/* Decorative cursor icon */}
              <div className="absolute -top-2 right-8 bg-background rounded-full p-2 shadow-lg border border-border group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </ScrollReveal>

          {/* Location */}
          <ScrollReveal animation="fade-up" delay={500}>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Indonesia, Bali 🇮🇩
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="portfolio" 
                size="xl" 
                onClick={scrollToProjects}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                  View My Work
                </span>
              </Button>
              <Button 
                variant="portfolioSolid" 
                size="xl"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">
                  Let's Collaborate
                </span>
              </Button>
            </div>
          </ScrollReveal>

          {/* Tech Stack Pills */}
          <ScrollReveal animation="fade-up" delay={700}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {["UI/UX Designer", "Fullstack Developer"].map((tech, i) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 text-sm border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <ScrollReveal animation="fade-in" delay={1000}>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
              <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-bounce" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
