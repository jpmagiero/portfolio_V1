
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

export function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section title
            const title = entry.target.querySelector(".section-title");
            if (title) title.classList.add("animate-fade-in");
            
            // Animate cards with staggered delay
            const cards = entry.target.querySelectorAll(".animate-on-scroll");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
              }, 200 + index * 150);
            });
            
            // Stop observing after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="section-container">
        <h2 className="section-title">{t.aboutTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* About Me */}
          <div className="animate-on-scroll glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">{t.aboutTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.aboutText}
            </p>
          </div>
          
          {/* Professional Objective */}
          <div className="animate-on-scroll glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">{t.objectiveTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.objectiveText}
            </p>
          </div>
          
          {/* Education */}
          <div className="animate-on-scroll glass-card p-6 md:p-8 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">{t.educationTitle}</h3>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="font-medium">{t.degree}</p>
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-accent/50 px-3 py-1 text-sm font-medium">
                  {t.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
