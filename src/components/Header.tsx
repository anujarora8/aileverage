import logo from "@/assets/logo.png";
import ShimmerButton from "@/components/ui/shimmer-button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="AI Leverage Group" 
            className="h-5 w-auto opacity-90"
          />
        </a>
        
        <nav className="flex items-center gap-8">
          <a href="#connect">
            <ShimmerButton className="h-9 px-4 text-sm">
              Connect with us
            </ShimmerButton>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
