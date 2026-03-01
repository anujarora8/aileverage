import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EngagementModel from "@/components/EngagementModel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <EngagementModel />
      <Footer />
    </div>
  );
};

export default Index;
