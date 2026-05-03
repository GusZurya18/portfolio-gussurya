import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { certificates } from "@/data/certificates";


const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Achievements
            </p>
            <h2 className="text-display-md mb-4">Certificates</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Professional certifications and credentials that validate my expertise across multiple disciplines.
            </p>
          </div>
        </ScrollReveal>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <ScrollReveal
              key={cert.id}
              animation="fade-up"
              delay={index * 100}
            >
              <Link
                to={`/certificate/${cert.id}`}
                className="group relative block bg-secondary/30 border border-border/50 rounded-lg overflow-hidden hover:border-foreground/30 transition-all duration-500"
              >
                {/* Certificate Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="flex items-center gap-2 text-background font-medium px-4 py-2 border border-background/30 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {cert.issuer} &bull; {cert.date}
                    </p>
                    <h3 className="font-semibold text-lg leading-tight group-hover:text-foreground/80 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  {cert.credentialUrl && (
                    <ExternalLink size={16} className="text-muted-foreground mt-1 shrink-0" />
                  )}
                </div>

                {/* Corner Number */}
                <div className="absolute top-4 right-4 text-5xl font-black text-foreground/5 group-hover:text-foreground/10 transition-colors pointer-events-none">
                  0{index + 1}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;