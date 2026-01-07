import { CheckCircle2 } from "lucide-react";

const credentials = [
  "Former McKinsey Senior Partner",
  "Stanford MBA, AI/ML Specialization",
  "Advised 50+ AI/ML companies",
  "Board member at 3 AI startups",
  "Published author on AI strategy",
  "Keynote speaker at AI Summit"
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <div className="relative glass-card rounded-2xl p-8 md:p-12">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 glow-effect">
                <span className="font-display text-4xl font-bold gradient-text">AA</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Anuj Arora</h3>
              <p className="text-primary font-medium mb-4">Founder & Principal Consultant</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years at the intersection of management consulting and artificial intelligence, 
                I help AI companies transform innovative technology into market-dominating products.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why <span className="gradient-text">AI Leverage</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bridging the gap between world-class AI innovation and strategic go-to-market execution. 
              I bring the rigor of top-tier consulting with deep AI domain expertise.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
