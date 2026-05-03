import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { useState } from "react";
//cover image
//lokana
import lokanaCover from "@/assets/projects/Lokana/Landpage.png";
//pindai
import pindaiCover from "@/assets/projects/Pindai/Landing page hero.jpg";
//invoice pro
import invoiceProCover from "@/assets/projects/Invoice Pro/landpage.jpg";
interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Lokana MSME Website ",
    category: "UI/UX Design & Web Development",
    imageUrl: lokanaCover,
  },
  {
    id: "2",
    title: "PINDAI Digital Security Education Platform",
    category: "UI/UX Design",
    imageUrl: pindaiCover,
  },
  {
    id: "3",
    title: "InvoicePro",
    category: "UI/UX Design & Web Development",
    imageUrl: invoiceProCover,
  },
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <ScrollReveal animation="fade-right">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                Selected Works
              </p>
              <h2 className="text-display-md">Projects</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left">
            <Link
              to="/projects"
              className="hidden sm:flex items-center gap-2 text-sm font-medium group"
            >
              <span className="relative">
                View all projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockProjects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              animation="fade-up" 
              delay={index * 100}
            >
              <Link
                to={`/project/${project.id}`}
                className="project-card group block"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredId === project.id ? "scale-110 grayscale-0" : "scale-100 grayscale"
                    }`}
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-foreground/80 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}>
                    <span className="text-background font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                      <ArrowUpRight size={18} className="animate-pulse" />
                    </span>
                  </div>
                  {/* Project number */}
                  <div className="absolute top-4 left-4 text-6xl font-black text-foreground/10 group-hover:text-background/20 transition-colors duration-500">
                    0{index + 1}
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-semibold relative inline-block">
                      {project.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-500" />
                    </h3>
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile View All Link */}
        <ScrollReveal animation="fade-up" delay={400}>
          <Link
            to="/projects"
            className="sm:hidden flex items-center justify-center gap-2 mt-12 text-sm font-medium group"
          >
            View all projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
