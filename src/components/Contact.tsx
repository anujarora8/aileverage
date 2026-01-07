import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Let's Connect
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Currently accepting a limited number of new advisory roles and projects for 2026. 
            If you've been referred or would like to discuss a potential partnership, please 
            reach out via LinkedIn or email.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

export default Contact;
