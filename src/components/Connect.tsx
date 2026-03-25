import ShimmerButton from "@/components/ui/shimmer-button";
import { Linkedin, Mail } from "lucide-react";

const Connect = () => {
  return (
    <section id="connect" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl md:text-2xl font-light mb-4">
            Focused. Senior. Hands-on.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Accepting a limited number of new advisory roles for 2026.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a href="https://www.linkedin.com/in/anujarora95/" target="_blank" rel="noopener noreferrer">
              <ShimmerButton className="w-full sm:w-52 gap-2">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </ShimmerButton>
            </a>
            <a href="mailto:anuj@aileveragegroup.com">
              <ShimmerButton className="w-full sm:w-52 gap-2">
                <Mail className="w-5 h-5" />
                Send an Email
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
