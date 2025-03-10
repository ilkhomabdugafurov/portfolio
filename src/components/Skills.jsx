import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold mb-4 text-center">Skills</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <Skill name="React" />
        <Skill name="JavaScript" />
        <Skill name="Tailwind CSS" />
        <Skill name="Redux" />
        <Skill name="GitHub" />
      </div>
    </section>
  );
};

export default Skills;
