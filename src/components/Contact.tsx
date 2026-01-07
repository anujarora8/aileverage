import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-12 md:p-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your GTM?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Let's discuss how AI Leverage Consulting can accelerate your market entry 
            and drive sustainable revenue growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Calendar className="w-5 h-5" />
              Book Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              <Mail className="w-5 h-5" />
              anuj@aileverageconsulting.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
