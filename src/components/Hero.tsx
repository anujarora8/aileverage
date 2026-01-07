const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            AI Leverage LLC
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Turning AI innovation into market leadership.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Strategic Go-To-Market advisory and execution for companies building the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
