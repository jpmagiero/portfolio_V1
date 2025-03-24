import React from 'react';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from './components/Navigation/NavLink';
import { MobileNavLink } from './components/Navigation/MobileNavLink';
import { ExperienceCard } from './components/Experience/ExperienceCard';
import { SocialLink } from './components/Social/SocialLink';
import { technologies } from './data/technologies';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-current origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm border-b border-current/10 z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              João Paulo Magiero R.
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">{t('nav.about')}</NavLink>
              <NavLink href="#experience">{t('nav.experience')}</NavLink>
              <NavLink href="#skills">{t('nav.skills')}</NavLink>
              <NavLink href="#contact">{t('nav.contact')}</NavLink>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-full border border-current/10 hover:bg-current/5 transition-colors"
              >
                {language === 'en' ? 'PT' : 'EN'}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-current/5 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-full border border-current/10 hover:bg-current/5 transition-colors"
              >
                {language === 'en' ? 'PT' : 'EN'}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-current/5 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm border-b border-current/10`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </MobileNavLink>
              <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>
                {t('nav.experience')}
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
                {t('nav.skills')}
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${isDark ? 'from-white/5' : 'from-black/5'} to-transparent`} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center relative z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-current/70 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">{t('about.title')}</h2>
          <div className="bg-current/5 backdrop-blur-sm rounded-lg p-8 border border-current/10">
            <p className="text-current/70 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">{t('experience.title')}</h2>
          <div className="space-y-8">
            <ExperienceCard
              title={t('experience.job1.title')}
              company={t('experience.job1.company')}
              period={t('experience.job1.period')}
              description={[
                t('experience.job1.description1'),
                t('experience.job1.description2'),
                t('experience.job1.description3')
              ]}
            />
            <ExperienceCard
              title={t('experience.job2.title')}
              company={t('experience.job2.company')}
              period={t('experience.job2.period')}
              description={[
                t('experience.job2.description1'),
                t('experience.job2.description2')
              ]}
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">{t('skills.title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-4 p-6 bg-current/5 backdrop-blur-sm rounded-lg border border-current/10"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className={`w-16 h-16 object-contain ${isDark ? 'filter invert' : ''}`}
                />
                <span className="text-sm text-current/70">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
          <div className="flex justify-center space-x-8">
            <SocialLink
              href="mailto:jpmagiero@gmail.com"
              icon={<Mail size={24} />}
              label={t('social.email')}
            />
            <SocialLink
              href="https://linkedin.com/in/jpmagiero"
              icon={<Linkedin size={24} />}
              label={t('social.linkedin')}
            />
            <SocialLink
              href="https://github.com/jpmagiero"
              icon={<Github size={24} />}
              label={t('social.github')}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;