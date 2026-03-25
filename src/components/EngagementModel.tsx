const EngagementModel = () => {
  return (
    <section id="engagement" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
           <h2 className="font-display text-2xl md:text-3xl font-light mb-6">
            How We Work
           </h2>
          
           <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              We embed with your leadership team - senior operator, no junior handoffs, no deliverable-and-disappear. We've built and deployed this playbook before. You get the benefit of that without the trial and error.
            </p>

            <p className="text-foreground/80">
              Three areas. Each one a gap most companies underestimate:
            </p>

            <ul className="space-y-3">
              <li>
                <span className="font-medium text-foreground">Talent</span> - Define the AI hiring bar before you get burned by the wrong hires. Build the org that can actually execute.
              </li>
              <li>
                <span className="font-medium text-foreground">Operating Model</span> - Stage-gated rollouts, internal scorecards, decision rhythm. The infrastructure that makes AI stick.
              </li>
              <li>
                <span className="font-medium text-foreground">Vendor & Tech</span> - Cut through the noise, select the right stack, and measure ROI before you're locked in.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
