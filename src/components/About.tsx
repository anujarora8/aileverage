const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
            Where Most Companies Are
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The shift to agentic AI isn't a product decision — it's an organizational transformation. 
              New hiring bar. New operating model. New vendor landscape.
            </p>
            
            <p>
              Most software companies are 12–18 months behind. The ones closing that gap aren't 
              figuring it out alone.
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
