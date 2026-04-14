import { motion } from 'framer-motion';
import { education } from '../data/projects';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Academic background and qualifications
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4" />
          </div>

          {/* Education Cards */}
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                      {edu.duration}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
