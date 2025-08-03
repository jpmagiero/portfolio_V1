
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";
import { CalendarDays, Briefcase } from "lucide-react";

export function Experience() {
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
            
            // Animate timeline items with staggered delay
            const items = entry.target.querySelectorAll(".timeline-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in-left");
              }, 200 + index * 200);
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
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-accent/30"
    >
      <div className="section-container">
        <h2 className="section-title">{t.experienceTitle}</h2>
        
        <div className="space-y-12">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-6 md:left-1/2 w-px h-full bg-border dark:bg-border transform -translate-x-1/2"></div>
            
            {/* SMi Group */}
            <div className="timeline-item opacity-0 relative flex flex-col md:flex-row md:items-center mb-16">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                <h3 className="font-semibold text-xl">{t.company3}</h3>
                <p className="text-primary/90 font-medium">{t.position3}</p>
                <div className="flex items-center justify-end mt-2 space-x-2">
                  <span className="text-sm text-muted-foreground">{t.period3}</span>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="bg-primary rounded-full p-2 z-10">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-1 md:order-2">
                <div className="glass-card p-6">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>{t.responsibility3_1}</li>
                    <li>{t.responsibility3_2}</li>
                    <li>{t.responsibility3_3}</li>
                    <li>{t.responsibility3_4}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* SenseUp */}
            <div className="timeline-item opacity-0 relative flex flex-col md:flex-row md:items-center mb-16">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                <h3 className="font-semibold text-xl">{t.company1}</h3>
                <p className="text-primary/90 font-medium">{t.position1}</p>
                <div className="flex items-center justify-end mt-2 space-x-2">
                  <span className="text-sm text-muted-foreground">{t.period1}</span>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="bg-primary rounded-full p-2 z-10">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-1 md:order-2">
                <div className="glass-card p-6">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>{t.responsibility1_1}</li>
                    <li>{t.responsibility1_2}</li>
                    <li>{t.responsibility1_3}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Conexos */}
            <div className="timeline-item opacity-0 relative flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                <h3 className="font-semibold text-xl">{t.company2}</h3>
                <p className="text-primary/90 font-medium">{t.position2}</p>
                <div className="flex items-center justify-end mt-2 space-x-2">
                  <span className="text-sm text-muted-foreground">{t.period2}</span>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="bg-primary rounded-full p-2 z-10">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-1 md:order-2">
                <div className="glass-card p-6">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>{t.responsibility2_1}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
