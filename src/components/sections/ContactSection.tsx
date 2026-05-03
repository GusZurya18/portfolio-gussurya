import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/effects/ScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "idabagussuryadharma218@gmail.com" },
    { icon: Phone, label: "Phone", value: "+62 877 0201 0614" },
    { icon: MapPin, label: "Location", value: "Bali, Indonesia" },
    { icon: Instagram, label: "Instagram", value: "@dhasvarya.works" },
  ];

  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <ScrollReveal animation="fade-right">
              <p className="text-sm uppercase tracking-widest text-background/60 mb-4">
                Get in Touch
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={100}>
              <h2 className="text-display-md mb-8">
                Let's work together
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={200}>
              <p className="text-lg text-background/70 mb-12 leading-relaxed">
                Have a project in mind? I'd love to hear about it. 
                Drop me a message and let's create something amazing together.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <ScrollReveal key={item.label} animation="fade-right" delay={300 + index * 100}>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-background/60">{item.label}</p>
                      <p className="font-medium group-hover:translate-x-2 transition-transform duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <ScrollReveal animation="fade-left" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-background/20 text-background placeholder:text-background/40 h-14 focus:border-background transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-background/20 text-background placeholder:text-background/40 h-14 focus:border-background transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-background/20 text-background placeholder:text-background/40 min-h-[150px] resize-none focus:border-background transition-colors duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-background text-foreground hover:bg-background/90 group relative overflow-hidden"
              >
                <span className={`flex items-center gap-2 transition-all duration-300 ${isSubmitting ? "opacity-0" : "opacity-100"}`}>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  </span>
                )}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
