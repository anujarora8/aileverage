import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="hero-glow top-1/4 left-1/4 animate-pulse-slow" />
      <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up">
            Strategic consulting for AI companies seeking to dominate their markets. 
            Combine cutting-edge AI expertise with proven GTM frameworks.
          </p>
          
          <div className="flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Button variant="hero" size="xl">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
