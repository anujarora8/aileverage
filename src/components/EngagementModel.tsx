import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const EngagementModel = () => {
  return (
    <section id="engagement" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            How We Work
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Not theory. Proven playbooks, hired teams, delivered outcomes. 
              At scale. We embed with your leadership team — no junior staff, no deliverable-and-disappear — across 
              the three areas that actually move the needle:
            </p>

            <ul className="space-y-4">
              <li>
                <span className="text-foreground font-medium">Talent</span> — defining the AI hiring bar, building the org
              </li>
              <li>
                <span className="text-foreground font-medium">Operating Model</span> — stage-gated rollouts, scorecards, internal rhythm
              </li>
              <li>
                <span className="text-foreground font-medium">Vendor & Tech</span> — cut through the noise, deploy the right stack, get ROI
              </li>
            </ul>

            <p>
              Built for software companies with traction who know they need to evolve but don't have the 
              internal expertise to lead an AI transformation without getting it wrong.
            </p>

            <p className="italic text-foreground/80 font-medium">
              That's not consulting. That's operational memory.
            </p>

            <p>
              Accepting a limited number of new advisory roles for 2026.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-52" asChild>
              <a href="https://www.linkedin.com/in/anujarora95/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-52" asChild>
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
