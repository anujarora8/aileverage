const EngagementModel = () => {
  return (
    <section id="engagement" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            How We Work
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Not theory. Proven playbooks, hired teams, delivered outcomes. 
              At scale. We embed with your leadership team - no junior staff, no deliverable-and-disappear - across 
              the three areas that actually move the needle:
            </p>

            <ul className="space-y-2">
              <li>
                <span className="text-foreground font-medium">Talent</span> - defining the AI hiring bar, building the org
              </li>
              <li>
                <span className="text-foreground font-medium">Operating Model</span> - stage-gated rollouts, scorecards, internal rhythm
              </li>
              <li>
                <span className="text-foreground font-medium">Vendor & Tech</span> - cut through the noise, deploy the right stack, get ROI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
