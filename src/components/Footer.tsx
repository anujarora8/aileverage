import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={logo} 
            alt="AI Leverage Group" 
            className="h-8 w-auto invert opacity-60"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Leverage LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
