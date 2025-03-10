import React from 'react';
import Skill from './Skill';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
    <h3 className="text-3xl font-bold mb-4 text-center">Skills</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {['React', 'JavaScript', 'Tailwind CSS', 'Redux', 'GitHub'].map((skill, index) => (
        <motion.div
          key={skill}
          className="bg-white p-4 rounded-lg shadow-md w-40 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold">{skill}</p>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

export default Skills;
