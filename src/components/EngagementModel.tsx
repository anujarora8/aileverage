import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EngagementModel = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="engagement" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Focused. Senior. Hands-on.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            I operate as a high-bandwidth extension of your leadership team. I integrate product 
            strategy with the full GTM lifecycle - from positioning and pricing to customer acquisition 
            and launch execution - ensuring every piece is optimized for the AI era.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Accepting a limited number of new advisory roles for 2026.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.linkedin.com/in/anujarora95/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="mailto:anuj@aileverage.dev">
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
