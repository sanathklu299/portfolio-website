import { motion } from 'framer-motion';
import { experience } from '../data/projects';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My professional journey and internships
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4" />
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-px" />

              {/* Timeline Items */}
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-slate-100 dark:border-slate-900" />

                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <Briefcase size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {exp.duration}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
