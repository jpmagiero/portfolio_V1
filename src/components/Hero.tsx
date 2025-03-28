
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Animation for the hero section elements
    const animateHero = () => {
      const elements = document.querySelectorAll('.hero-animate');
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in-up');
        }, i * 200);
      });
    };
    
    animateHero();
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center overflow-hidden hero-gradient relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        <div className="space-y-8">
          <p className="hero-animate opacity-0 text-lg sm:text-xl text-muted-foreground font-medium">
            {t.greeting}
          </p>
          
          <h1 className="hero-animate opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold">
            João Paulo Magiero R.
          </h1>
          
          <p className="hero-animate opacity-0 text-xl sm:text-2xl md:text-3xl text-primary/90 font-medium">
            {t.title}
          </p>
          
          <div className="hero-animate opacity-0 pt-6">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#contact">
                {t.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <button 
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="animate-bounce bg-primary/10 rounded-full p-3 hover:bg-primary/20 transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
}
