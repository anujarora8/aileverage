const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The Intersection of Strategy and Intelligence
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              With over 10 years at the intersection of management consulting and artificial intelligence, 
              I help AI companies transform innovative technology into market-dominating products.
            </p>
            
            <p>
              AI Leverage was founded on a simple premise: Great technology doesn't win markets—the right 
              GTM engine does. I partner with founders and executive teams to build that engine, moving 
              beyond the hype to create sustainable, scalable revenue.
            </p>
          </div>
          
          <p className="mt-8 text-foreground font-medium">
            - Anuj Arora, Founder & Principal Consultant
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
