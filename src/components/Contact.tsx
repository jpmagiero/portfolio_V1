
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
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
            
            // Animate contact elements
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in-up");
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
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-accent/30 to-background/80"
    >
      <div className="section-container">
        <h2 className="section-title">{t.contactTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <Card className="animate-on-scroll opacity-0 overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{t.email}</h3>
              <a 
                href="mailto:jpmagiero@gmail.com"
                className="text-primary hover:underline"
              >
                jpmagiero@gmail.com
              </a>
            </CardContent>
          </Card>
          
          {/* GitHub Card */}
          <Card className="animate-on-scroll opacity-0 overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">GitHub</h3>
              <a 
                href="https://github.com/jpmagiero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/jpmagiero
              </a>
            </CardContent>
          </Card>
          
          {/* LinkedIn Card */}
          <Card className="animate-on-scroll opacity-0 overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/jpmagiero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/jpmagiero
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12">
          <p className="text-muted-foreground animate-on-scroll opacity-0">
            {t.contactText}
          </p>
        </div>
      </div>
    </section>
  );
}
