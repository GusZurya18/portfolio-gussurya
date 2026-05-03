import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CustomCursor from "@/components/effects/CustomCursor";
import { useScrollReveal } from "@/hooks/use-animations";

const About = () => {
  const skills = [
    { name: "Fullstack Development", level: 92 },
    { name: "UI/UX Design", level: 96 },
    { name: "Mobile Development (Flutter)", level: 85 },
    { name: "IoT Development", level: 88 },
    { name: "Project Management", level: 94 },
    { name: "WordPress Development", level: 88 },
    { name: "Grapic Design", level: 90 }, 
    { name: "Content Writing", level: 86 },
  ];

  const experiences = [
    {
      year: "June 2025 - Desember 2025",
      title: "Fullstack Developer & Designer",
      company: "PT BaliSolutionBiz",
      description: "",
    },
    {
      year: "Desember 2024 - March 2025",
      title: "Graphic Designer & Production Team",
      company: "Digibali Digital Creative Agency & Advertising",
      description: "",
    },
  ];

  const tools = [
    "VS Code", "Figma", "Android Studio", "Adobe Illustrator", "Laravel" , "Lunacy", "Affinity", "Microsoft Office",
    "Adobe Photoshop", "React", "Obsidian", "Flutter", "Arduino","Canva", "Notion", "GitHub", "Postman", "Jira", "Trello", "Slack", "Zoom",
    "Google Workspace", "Rasberry Pi", "ESP32", "Netlify", "Vercel", "Firebase", "AWS", "Laragon", "Docker", "WordPress", "Blender", "FlutterFlow", "Webflow" , "Framer",
  ];

  return (
    <div className="min-h-screen bg-background cursor-none md:cursor-none">
      <CustomCursor />
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <ScrollReveal animation="fade-right">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  About Me
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" delay={100}>
                <h1 className="text-display-lg mb-8">
                  Hi, I'm Gus Surya
                </h1>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Fullstack Developer and UI/UX Designer based in Indonesia. 
                  I specialize in creating seamless digital experiences across web and mobile platforms,
                  with a keen interest in IoT development.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Beyond coding, I'm also a novel writer who loves blending creativity with technology.
                  My diverse skill set allows me to approach projects from multiple perspectives,
                  ensuring both technical excellence and creative innovation.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <Button variant="portfolioSolid" size="lg" className="group">
                      Get in Touch
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <a href="/CV Ida Bagus Surya Dharma - UI UX Design & Fullstack Developer.pdf" download>
                    <Button variant="portfolio" size="lg">
                      Download CV
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={heroPortrait}
                    alt="Gus Surya - Fullstack Developer & Designer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-foreground/20 -z-10 group-hover:inset-0 transition-all duration-500" />
              </div>
            </ScrollReveal>
          </div>

          {/* Tools Section */}
          <div className="mb-24">
            <ScrollReveal animation="fade-up">
              <h2 className="text-display-md mb-8">Tools & Technologies</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={tool}
                    className="px-5 py-3 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default text-sm font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Skills Section */}
          <div className="mb-24">
            <ScrollReveal animation="fade-up">
              <h2 className="text-display-md mb-12">Skills & Expertise</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} animation="fade-up" delay={index * 100}>
                  <SkillBar name={skill.name} level={skill.level} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <ScrollReveal animation="fade-up">
              <h2 className="text-display-md mb-12">Experience</h2>
            </ScrollReveal>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                  <div
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-12 border-b border-border last:border-0 group"
                  >
                    <div className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {exp.year}
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-semibold mb-1 group-hover:translate-x-2 transition-transform duration-300">{exp.title}</h3>
                      <p className="text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Animated skill bar component
const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: "200ms"
          }}
        />
      </div>
    </div>
  );
};

export default About;
