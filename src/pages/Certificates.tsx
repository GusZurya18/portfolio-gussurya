import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CustomCursor from "@/components/effects/CustomCursor";
import { certificates } from "@/data/certificates";

const Certificates = () => {
  const issuers = ["All", ...Array.from(new Set(certificates.map((c) => c.issuer)))];
  const [activeIssuer, setActiveIssuer] = useState("All");

  const filtered =
    activeIssuer === "All"
      ? certificates
      : certificates.filter((c) => c.issuer === activeIssuer);

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
                Achievements
              </p>
              <h1 className="text-display-lg mb-8">Certificates</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A collection of programs and credentials I've earned across design, development, IoT, and writing.
              </p>
            </div>
          </ScrollReveal>

          {/* Issuer Filter */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="flex flex-wrap gap-4 mb-12">
              {issuers.map((issuer) => (
                <button
                  key={issuer}
                  onClick={() => setActiveIssuer(issuer)}
                  className={`px-6 py-2 text-sm font-medium border transition-all duration-300 relative overflow-hidden group ${
                    activeIssuer === issuer
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-foreground/30 hover:border-foreground"
                  }`}
                >
                  <span className="relative z-10">{issuer}</span>
                  {activeIssuer !== issuer && (
                    <span className="absolute inset-0 bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  )}
                  {activeIssuer !== issuer && (
                    <span className="absolute inset-0 flex items-center justify-center text-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                      {issuer}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cert, index) => (
              <ScrollReveal key={cert.id} animation="fade-up" delay={index * 100}>
                <Link
                  to={`/certificate/${cert.id}`}
                  className="group relative block bg-secondary/30 border border-border/50 rounded-lg overflow-hidden hover:border-foreground/30 transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-background font-medium px-4 py-2 border border-background/30 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Details
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>

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

                  <div className="absolute top-4 right-4 text-5xl font-black text-foreground/5 group-hover:text-foreground/10 transition-colors pointer-events-none">
                    0{index + 1}
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

export default Certificates;