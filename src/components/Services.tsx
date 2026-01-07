const services = [
  "Market Positioning — Define your unique value proposition and competitive positioning",
  "GTM Strategy — End-to-end go-to-market planning from product-market fit to scale",
  "Revenue Acceleration — Optimize pricing, packaging, and sales motions for growth",
  "Customer Acquisition — Build sustainable demand generation and conversion engines",
  "AI Product Strategy — Navigate the unique challenges of AI product development",
  "Launch Excellence — Execute flawless product launches that capture market attention"
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Strategic Services
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service, index) => (
            <p 
              key={index}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {service}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
