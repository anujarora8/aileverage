const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            The Intersection of Strategy and Intelligence
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              With 10+ years at the intersection of management consulting and AI, I help companies 
              transform technical innovation into market-dominating products.
            </p>
            
            <p>
              Market leadership requires a tight coupling of product excellence and GTM precision. 
              I partner with founders and executive teams to build that integrated engine - moving 
              beyond the hype to create sustainable, scalable revenue.
            </p>
          </div>
        </div>
        
        {/* Subtle divider */}
        <div className="max-w-xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default About;
