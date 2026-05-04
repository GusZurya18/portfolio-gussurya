import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Award, Lightbulb, Target, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CustomCursor from "@/components/effects/CustomCursor";
import { certificates } from "@/data/certificates";



const CertificateDetail = () => {
  const { id } = useParams();
  const cert = certificates.find((c) => c.id === id);

  if (!cert) {
    return (
      <div className="min-h-screen bg-background cursor-none">
        <CustomCursor />
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-display-md mb-6">Certificate Not Found</h1>
          <Link to="/#certificates">
            <Button variant="outline">Back to Certificates</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
        <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
            <ScrollReveal animation="fade-up">
            <Link
                to="/#certificates"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Certificates
            </Link>
            </ScrollReveal>

            {/* Changed from grid md:grid-cols-2 to flex column on mobile, row on md */}
            <div className="flex flex-col md:flex-row md:items-start gap-10">
            {/* Text content - takes full width on mobile, half on desktop */}
            <ScrollReveal animation="fade-up" className="flex-1">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <Award size={14} /> {cert.issuer} &bull; {cert.date}
                </p>
                <h1 className="text-display-lg leading-none mb-6">{cert.title}</h1>
                {cert.credentialUrl && (
                <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium border border-foreground/30 px-5 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                >
                    View Credential <ExternalLink size={14} />
                </a>
                )}
            </ScrollReveal>

            {/* Image container - takes full width on mobile, half on desktop */}
            <ScrollReveal animation="fade-up" delay={150} className="flex-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted border border-border">
                <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                </div>
            </ScrollReveal>
            </div>
        </div>
        </section>

      {/* About the program */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-5xl relative">
          <div className="absolute -top-6 right-0 text-[8rem] md:text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
            01
          </div>
          <ScrollReveal animation="fade-up">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
              <BookOpen size={14} /> About the Program
            </p>
            <h2 className="text-display-md mb-8">The Journey</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {cert.about}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenge & How I Faced It */}
      <section className="py-20 px-6 border-t border-border/50 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal animation="fade-up">
              <div className="relative">
                <div className="absolute -top-6 -left-2 text-[6rem] font-black text-foreground/[0.06] leading-none select-none pointer-events-none">
                  02
                </div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2 relative">
                  <Target size={14} /> Challenge
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 relative">What Was Hard</h3>
                <p className="text-muted-foreground leading-relaxed relative">{cert.challenge}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="relative">
                <div className="absolute -top-6 -left-2 text-[6rem] font-black text-foreground/[0.06] leading-none select-none pointer-events-none">
                  03
                </div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2 relative">
                  <Lightbulb size={14} /> How I Faced It
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 relative">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed relative">{cert.howIFacedIt}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-5xl relative">
          <div className="absolute -top-6 right-0 text-[8rem] md:text-[12rem] font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
            04
          </div>
          <ScrollReveal animation="fade-up">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Key Takeaways
            </p>
            <h2 className="text-display-md mb-12">What I Learned</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {cert.learnings.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="group flex gap-5 p-6 border border-border/60 rounded-lg hover:border-foreground/40 hover:bg-secondary/40 transition-all duration-300">
                  <span className="text-2xl font-black text-foreground/20 group-hover:text-foreground/60 transition-colors leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground/90 leading-relaxed pt-1">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Documentation — Masonry */}
      <section className="py-20 px-6 border-t border-border/50 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal animation="fade-up">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Documentation
            </p>
            <h2 className="text-display-md mb-12">Moments Captured</h2>
          </ScrollReveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {cert.gallery.map((src, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-border/60 group">
                  <img
                    src={src}
                    alt={`${cert.title} documentation ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    style={{ aspectRatio: i % 3 === 0 ? "4 / 5" : i % 3 === 1 ? "1 / 1" : "3 / 4" }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-3xl text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-display-md mb-6">Explore More</h2>
            <p className="text-muted-foreground mb-8">
              Check out other certifications and projects in the portfolio.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/certificates">
                <Button variant="outline" size="lg">
                  All Certificates <ArrowLeft size={16} className="ml-2 rotate-180" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg">
                  View Projects <ArrowLeft size={16} className="ml-2 rotate-180" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificateDetail;