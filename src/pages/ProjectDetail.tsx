import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CustomCursor from "@/components/effects/CustomCursor";
//project Lokana
import lokanaImage1 from "@/assets/projects/Lokana/Database.png";
import lokanaImage2 from "@/assets/projects/Lokana/Figma.png";
import lokanaImage3 from "@/assets/projects/Lokana/Landpage.png";
import lokanaImage4 from "@/assets/projects/Lokana/Flowchart.png";
import lokanaImage5 from "@/assets/projects/Lokana/maskot.png";
//project Pindai
import pindaiImage1 from "@/assets/projects/Pindai/Dashboard Ui Game.jpg";
import pindaiImage2 from "@/assets/projects/Pindai/Landing page hero.jpg";
import pindaiImage3 from "@/assets/projects/Pindai/flowchart.png";
import pindaiImage4 from "@/assets/projects/Pindai/Dashboard UI Gameplay.png";
import pindaiImage5 from "@/assets/projects/Pindai/Quiz.png";
import pindaiImage6 from "@/assets/projects/Pindai/UI Chatbot dashboard.png";
import pindaiImage7 from "@/assets/projects/Pindai/UI Simulasi jika jawaban no 1 benar.png";
//project Invoice Pro
import invoiceProImage3 from "@/assets/projects/Invoice Pro/landpage.jpg";
import invoiceProImage1 from "@/assets/projects/Invoice Pro/dashboard-satu.jpg";
import invoiceProImage2 from "@/assets/projects/Invoice Pro/dashboard-2.jpg";
import invoiceProImage4 from "@/assets/projects/Invoice Pro/database.jpg";
import invoiceProImage5 from "@/assets/projects/Invoice Pro/ui design.jpg";
import invoiceProImage6 from "@/assets/projects/Invoice Pro/userflow.jpg";

// Mock data for project detail
type Tool = { name: string; icon: string };

const mockProjectDetails: Record<string, {
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  tools: Tool[];
  images: string[];
  link?: string;
}> = {
  "1": {
    title: "LOKANA MSME Website",
    category: "UI/UX Design & Web Development",
    client: "School Assignment",
    year: "February 2026",
    description: "A comprehensive website for Lokana, a microfinance institution dedicated to empowering MSMEs. The site features an intuitive interface for loan applications, educational resources, and a dynamic dashboard for clients to track their financial health.",
    challenge: "Many Balinese MSMEs and local artists struggle to gain digital visibility and reach a wider audience outside their local circles. The goal was to create a centralized platform that makes discovering local talent as easy as browsing a modern marketplace. The challenge was to design a site that felt vibrant and authentic to Bali’s creative spirit, while also being highly functional and accessible for users with varying levels of digital literacy.",
    solution: "I designed a seamless user journey focused on discoverability for both business owners and potential buyers. To strengthen the brand identity, I introduced \"Nara\", a fun and expressive mascot that guides users through the platform, making the experience more engaging and human. ",
    tools: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Vs Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/120px-Laravel.svg.png?_=20190820171151" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    images: [
      lokanaImage4,
      lokanaImage1,
      lokanaImage2,
      lokanaImage3,
      lokanaImage5,
    ],
    link: "https://example.com/lokana-msme-website"
  },
  "2": {
    title: "PINDAI Digital Security Education Platform",
    category: "UI/UX Design",
    client: "Competition Project",
    year: "September 2025",
    description: "PINDAI is an educational platform designed to raise awareness about digital security among young adults. The platform offers interactive modules, real-world case studies, and gamified learning experiences to help users understand the importance of cybersecurity in their daily lives.",
    challenge: "In Indonesia, many teenagers lack awareness of digital security and literacy, often finding traditional educational methods boring or overly technical. The challenge was to bridge this gap: how can we make digital safety education both essential and fun for the younger generation?",
    solution: "To address this, I designed Pindai, a gamified learning platform specifically tailored to resonate with Indonesian youth. The solution focuses on transforming complex digital security concepts into an engaging and interactive experience by implementing gamification elements that eliminate the \"boredom factor\" typically associated with literacy tools. I crafted a modern, vibrant user interface that aligns with Gen Z aesthetics, moving away from rigid educational structures to create a more relatable environment. By designing a simplified, bite-sized learning flow, I ensured that users could build their digital awareness incrementally without feeling overwhelmed, resulting in a smooth and enjoyable user experience.",
    tools: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Obsidian", icon: "https://files.svgcdn.io/logos/obsidian-icon.svg" },
    ],
    images: [
      pindaiImage3,
      pindaiImage1,
      pindaiImage2,
      pindaiImage4,
      pindaiImage5,
      pindaiImage6,
      pindaiImage7,
    ],
    link: "https://example.com/pindai-digital-security-education-platform"
  },
  "3": {
    title: "InvoicePro",
    category: "UI/UX Design & Web Development",
    client: "Internship Program at PT. BaliSolutionBiz",
    year: "Desember 2025",
    description: "A modern invoice management system designed to streamline accounting processes for small to medium-sized businesses.",
    challenge: "Managing corporate invoices and tracking employee productivity often involves messy data and complex workflows that lead to human error. The project required a system that could handle heavy data without overwhelming the user, The client needed a solution that could handle complex invoicing scenarios while maintaining a user-friendly interface. The system had to integrate seamlessly with existing accounting software.",
    solution: "I took a user-centered approach by mapping out detailed flowcharts and user flows to simplify the invoicing process. I designed an analytical dashboard that visualizes annual revenue and product trends through intuitive charts, turning raw data into actionable insights. The result is a highly accessible interface that allows administrators to monitor performance and transactions in real-time with minimal learning curve, I developed a responsive web application with a clean, intuitive interface that allows users to create, manage, and track invoices effortlessly. The system includes automated reminders, customizable templates, and real-time reporting features.",
    tools: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Vs Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/120px-Laravel.svg.png?_=20190820171151" },
      { name: "Laragon", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laragon/laragon-original.svg" },
    ],
    images: [
      invoiceProImage6,
      invoiceProImage5,
      invoiceProImage4,
      invoiceProImage1,
      invoiceProImage2,
      invoiceProImage3,
    ],
    link: "https://invoice.programtrial.com/"
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjectDetails[id || "1"] || mockProjectDetails["1"];
  const liveSiteLink = project.link;

  return (
    <div className="min-h-screen bg-background cursor-none md:cursor-none">
      <CustomCursor />
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <ScrollReveal animation="fade-right">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-300" />
              Back to Projects
            </Link>
          </ScrollReveal>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <ScrollReveal animation="fade-up">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  {project.category}
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="text-display-lg mb-6">{project.title}</h1>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </ScrollReveal>
            </div>
            <div className="space-y-6">
              <ScrollReveal animation="fade-left" delay={100}>
                <div className="group">
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">{project.client}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="group">
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">{project.year}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={300}>
                {liveSiteLink ? (
                  <Button asChild variant="portfolio" size="lg" className="w-full group">
                    <a href={liveSiteLink} target="_blank" rel="noreferrer">
                      <span>View Live Site</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="portfolio" size="lg" className="w-full group" disabled>
                    <span>View Live Site</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                )}
              </ScrollReveal>
            </div>
          </div>

          {/* Tools Used */}
          <ScrollReveal animation="fade-up">
            <div className="mb-16 pb-16 border-b border-border">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Tools Used
              </p>
              <div className="flex flex-wrap gap-4">
                {project.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex items-center gap-3 px-5 py-3 border border-border hover:border-foreground transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-border">
            <ScrollReveal animation="fade-up">
              <div className="group">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-display font-bold text-muted-foreground/30 group-hover:text-foreground transition-colors duration-500">
                    01
                  </span>
                  <h2 className="text-2xl font-display font-bold uppercase tracking-tight">
                    Challenge
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="group">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-display font-bold text-muted-foreground/30 group-hover:text-foreground transition-colors duration-500">
                    02
                  </span>
                  <h2 className="text-2xl font-display font-bold uppercase tracking-tight">
                    Solution
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Project Images */}
          <div className="space-y-8">
            {project.images.map((image, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                <div
                  className={`${index === 0 ? "aspect-video" : "aspect-[16/9]"} overflow-hidden bg-muted group`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Navigation to other projects */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="mt-16 pt-16 border-t border-border">
              <div className="flex justify-between items-center">
                <Link
                  to={`/project/${Math.max(1, parseInt(id || "1") - 1)}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-300" />
                  Previous Project
                </Link>
                <Link
                  to={`/project/${Math.min(4, parseInt(id || "1") + 1)}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Next Project
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;