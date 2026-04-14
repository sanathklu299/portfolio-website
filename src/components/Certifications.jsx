import { motion } from 'framer-motion';
import { certifications } from '../data/projects';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-100/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4" />
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Badge Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {cert.date}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
