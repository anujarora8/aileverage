const services = [
  "Market Positioning — Define your unique value proposition and competitive edge.",
  "GTM Strategy — End-to-end planning from product-market fit to global scale.",
  "Revenue Acceleration — Optimize pricing, packaging, and sales motions.",
  "Customer Acquisition — Build sustainable demand and conversion engines.",
  "AI Product Strategy — Navigate the unique challenges of AI development.",
  "Launch Excellence — Execute product launches that capture market attention."
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Areas of Engagement
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            I provide targeted advisory across the full GTM lifecycle, ensuring every piece of the puzzle is optimized for the AI era.
          </p>
          
          <div className="space-y-4">
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
      </div>
    </section>
  );
};

export default Services;
