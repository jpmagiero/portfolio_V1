
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { animateOnScroll } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for scroll animations
    const cleanup = animateOnScroll();
    
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
