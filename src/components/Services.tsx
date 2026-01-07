import { Target, Zap, TrendingUp, Users, LineChart, Rocket } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Market Positioning",
    description: "Define your unique value proposition and competitive positioning in the AI landscape."
  },
  {
    icon: Zap,
    title: "GTM Strategy",
    description: "End-to-end go-to-market planning from product-market fit to scale."
  },
  {
    icon: TrendingUp,
    title: "Revenue Acceleration",
    description: "Optimize pricing, packaging, and sales motions for maximum growth."
  },
  {
    icon: Users,
    title: "Customer Acquisition",
    description: "Build sustainable demand generation and conversion engines."
  },
  {
    icon: LineChart,
    title: "AI Product Strategy",
    description: "Navigate the unique challenges of AI product development and deployment."
  },
  {
    icon: Rocket,
    title: "Launch Excellence",
    description: "Execute flawless product launches that capture market attention."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Strategic <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive consulting services tailored for AI-first companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_hsl(200_100%_55%/0.1)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
