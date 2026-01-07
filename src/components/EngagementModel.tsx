import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const EngagementModel = () => {
  return (
    <section id="engagement" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Focused. Senior. Hands-on.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I operate as a high-bandwidth extension of your leadership team. Because I limit the number 
            of active engagements, every partner receives direct access, deep strategic focus, and 
            execution-level support.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            My advisory spans the full GTM lifecycle - from market positioning and pricing strategy to 
            customer acquisition and launch execution - ensuring every piece is optimized for the AI era.
          </p>

          <p className="text-muted-foreground mb-8">
            Currently accepting a limited number of new advisory roles for 2026.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
