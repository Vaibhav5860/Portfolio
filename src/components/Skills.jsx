//seen


import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const iconMap = {
  Code,
  Database,
  Layout,
  Terminal,
};

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            My Skills
          </h2>
          <div className="h-[1px] w-full bg-white/10"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <motion.div
                key={index}
                variants={item}
                className="group border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-white/10 text-gray-400 text-sm rounded-full font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
