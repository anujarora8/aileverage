const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-semibold text-lg tracking-tight">AI Leverage Group</span>
        
        <nav className="flex items-center gap-8">
          <a 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#engagement" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
