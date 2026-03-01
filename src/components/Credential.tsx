const Credential = () => {
  return (
    <section id="credential" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            The Credential
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              This isn't theory. I've hired the teams, built the playbooks, and delivered the outcomes. At scale.
            </p>
            
            <p className="text-foreground/80 font-medium">
              That's not consulting. That's operational memory.
            </p>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Credential;
