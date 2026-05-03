import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/GusZurya18", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ida-bagus-surya-dharma-07a153342/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/dhasvarya.works", label: "Instagram" },
    
  ];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <ScrollReveal animation="fade-right">
            <Link to="/" className="text-2xl font-black group inline-block">
              Gus Surya
              <span className="group-hover:text-muted-foreground transition-colors duration-300">.</span>
            </Link>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal animation="fade-up">
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <Link to="/projects" className="hover:text-foreground transition-colors duration-300 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/about" className="hover:text-foreground transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal animation="fade-left">
            <div className="flex items-center justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Copyright */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {currentYear} Gus Surya. All rights reserved.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
