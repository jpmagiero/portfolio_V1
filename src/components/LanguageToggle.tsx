
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent rounded-full"
      aria-label={language === "en" ? "Switch to Portuguese" : "Switch to English"}
    >
      <span className="font-medium">
        {language === "en" ? "PT" : "EN"}
      </span>
      <span className="sr-only">
        {language === "en" ? "Switch to Portuguese" : "Switch to English"}
      </span>
    </Button>
  );
}
