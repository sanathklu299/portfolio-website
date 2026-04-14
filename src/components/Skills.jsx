import { motion } from 'framer-motion';
import { skills } from '../data/projects';
import {
  Code,
  Server,
  Wrench,
  FileCode,
  FileType,
  Palette,
  Atom,
  Database,
  Layers,
  Share2,
  GitBranch,
  Container,
  Cloud,
  Terminal,
  GitMerge,
  BarChart3,
} from 'lucide-react';

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  'Tools & DevOps': Wrench,
};

const skillIcons = {
  Code,
  FileCode,
  FileType,
  Palette,
  Atom,
  Server,
  Python: Code,
  Database,
  Layers,
  Share2,
  GitBranch,
  Container,
  Cloud,
  Terminal,
  GitMerge,
  BarChart3,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => {
              const Icon = categoryIcons[category.category] || Code;

              return (
                <motion.div
                  key={category.category}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, skillIndex) => {
                      const SkillIcon = skillIcons[skill.icon] || Code;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        >
                          <div className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-2">
                            <SkillIcon size={16} className="text-primary" />
                            <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
