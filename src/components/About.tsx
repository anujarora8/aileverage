const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
           <h2 className="font-display text-2xl md:text-3xl font-light mb-6">
            Where Most Companies Are
           </h2>
          
           <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              The shift to agentic AI isn't a product decision — it's an organizational transformation. That means rethinking who you hire, how you operate, and which vendors actually deliver. Most software companies are 12–18 months behind on all three. The ones closing the gap aren't figuring it out alone.
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
