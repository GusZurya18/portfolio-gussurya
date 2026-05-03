import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CustomCursor from "@/components/effects/CustomCursor";
//cover image
//lokana
import lokanaCover from "@/assets/projects/Lokana/Landpage.png";
//pindai
import pindaiCover from "@/assets/projects/Pindai/Landing page hero.jpg";
//invoice pro
import invoiceProCover from "@/assets/projects/Invoice Pro/landpage.jpg";

// UPDATE INTERFACE - Gunakan array untuk categories
interface Project {
  id: string;
  title: string;
  categories: string[];  // Ubah dari 'category' ke 'categories' sebagai array
  imageUrl: string;
  description: string;
}

// UPDATE DATA - Semua project pakai format yang sama
const mockProjects: Project[] = [
  {
    id: "1",
    title: "LOKANA MSME Website",
    categories: ["UI/UX Design", "Web Development"],  // Array
    imageUrl: lokanaCover,
    description: "A comprehensive website for Lokana, a microfinance institution dedicated to empowering MSMEs.",
  },
  {
    id: "2",
    title: "PINDAI Digital Security Education Platform",
    categories: ["UI/UX Design"],  // Array dengan satu item
    imageUrl: pindaiCover,
    description: "Educational platform focused on cybersecurity awareness and training",
  },
  {
    id: "3",
    title: "InvoicePro",
    categories: ["UI/UX Design", "Web Development"],  // Array
    imageUrl: invoiceProCover,
    description: "Modern invoice management system for small businesses",
  },
];

const categories = ["All", "UI/UX Design", "Web Development"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // UPDATE FILTER LOGIC - Cek apakah category termasuk dalam array
  const filteredProjects =
    activeCategory === "All"
      ? mockProjects
      : mockProjects.filter((project) => 
          project.categories.includes(activeCategory)  // Cek di array categories
        );

  // Helper function untuk menampilkan categories
  const displayCategories = (categories: string[]) => {
    return categories.join(" • ");  // Gabungkan dengan bullet point
  };

  return (
    <div className="min-h-screen bg-background cursor-none md:cursor-none">
      <CustomCursor />
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <ScrollReveal animation="fade-up">
            <div className="mb-16">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                My Work
              </p>
              <h1 className="text-display-lg mb-8">Projects</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A collection of my best work in web design, development, and photography.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium border transition-all duration-300 relative overflow-hidden group ${
                    activeCategory === category
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-foreground/30 hover:border-foreground"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{category}</span>
                  {activeCategory !== category && (
                    <span className="absolute inset-0 bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  )}
                  {activeCategory !== category && (
                    <span className="absolute inset-0 flex items-center justify-center text-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                      {category}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} animation="fade-up" delay={index * 100}>
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
                    <div className={`absolute inset-0 bg-foreground/80 flex items-center justify-center transition-opacity duration-500 ${
                      hoveredId === project.id ? "opacity-100" : "opacity-0"
                    }`}>
                      <span className="text-background font-medium flex items-center gap-2">
                        View Project
                        <ArrowUpRight size={18} className="animate-pulse" />
                      </span>
                    </div>
                    {/* Project number */}
                    <div className="absolute top-4 left-4 text-5xl font-black text-foreground/10 group-hover:text-background/20 transition-colors duration-500">
                      0{index + 1}
                    </div>
                  </div>
                  <div className="mt-4">
                    {/* UPDATE DISPLAY - Tampilkan semua categories */}
                    <p className="text-sm text-muted-foreground mb-1">
                      {displayCategories(project.categories)}
                    </p>
                    <h3 className="text-xl font-semibold relative inline-block">
                      {project.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-500" />
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;