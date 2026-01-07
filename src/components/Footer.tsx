import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="gradient-text font-display font-bold text-lg">A</span>
            </div>
            <span className="font-display font-semibold">AI Leverage Consulting</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 AI Leverage Consulting by Anuj Arora. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
