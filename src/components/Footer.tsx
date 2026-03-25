const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-light tracking-wide text-foreground/60">
            AI Leverage Group
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Leverage LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
