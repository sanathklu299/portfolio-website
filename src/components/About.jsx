import { motion } from 'framer-motion';
import profile from "../assets/Sanathjoshi.jpg";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                {/* Profile Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl auto-pulse" />
                <div className="absolute inset-2 bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden flex items-center justify-center">
                  <img src={profile} alt="Sanath Joshi" className="w-full h-full object-cover" />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                I'm Jinkalwar Sanath Joshi, a final-year B.Tech (ECE) student at Koneru Lakshmaiah University
                with a CGPA of 9.11. I have a strong passion for technology and enjoy building modern
                applications that solve real-world problems.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I specialize in Full-Stack Development and Data Science, with skills in Java, JavaScript, React,
                Next.js, MySQL, Python, SQL, Azure, Power BI, and Tableau. I'm always eager to explore new
                technologies, improve my problem-solving skills, and grow as a developer and data enthusiast.
              </p>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
