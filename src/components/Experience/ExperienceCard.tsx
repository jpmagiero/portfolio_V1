import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-current/5 backdrop-blur-sm rounded-lg p-8 border border-current/10"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-current/70 mb-4">
        <span className="text-current">{company}</span> • {period}
      </div>
      <ul className="list-disc list-inside text-current/70 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}