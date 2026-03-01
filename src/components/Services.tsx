const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Focused. Senior. Hands-on.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            No junior staff. No deliverable-and-disappear. I embed with your leadership team 
            across three areas:
          </p>
          
          <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <li>
              <span className="text-foreground font-medium">Talent</span> — defining the AI hiring bar, building the org
            </li>
            <li>
              <span className="text-foreground font-medium">Operating Model</span> — stage-gated rollouts, scorecards, internal rhythm
            </li>
            <li>
              <span className="text-foreground font-medium">Vendor & Tech</span> — cut through the noise, deploy the right stack, get ROI
            </li>
          </ul>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Services;
