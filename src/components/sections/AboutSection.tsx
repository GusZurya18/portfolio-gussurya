import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CounterCard from "@/components/ui/CounterCard";

const AboutSection = () => {
  const stats = [
    { end: 23, suffix: "+", label: "Projects Completed" },
    { end: 3, suffix: "+", label: "Years Experience" },
    { end: 12, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <ScrollReveal animation="fade-right">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                About Me
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={100}>
              <h2 className="text-display-md mb-8">
                Bridging creativity and technology
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={200}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a Fullstack Developer with expertise in UI/UX design, I create 
                comprehensive digital solutions that are both beautiful and functional.
                From web applications to IoT systems, I bring ideas to life.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={300}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me writing novels or exploring 
                new technologies. This blend of creative writing and technical 
                skills gives me a unique perspective on storytelling through design.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex gap-4">
                <Link to="/about">
                  <Button variant="portfolio" size="lg" className="group">
                    Learn more
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <CounterCard
                key={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
