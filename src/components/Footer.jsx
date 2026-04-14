import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/sanathklu299', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sanath-joshi-2a6548258/', label: 'LinkedIn' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-xl font-bold gradient-text">
              Portfolio
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Building digital experiences with passion
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React &
            Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
