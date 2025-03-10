import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
      <div className="grid gap-8 md:grid-cols-2">
        <Project 
          title="Expense Tracker" 
          description="Track your daily expenses. Built with React & Redux." 
        />
        <Project 
          title="Portfolio Website" 
          description="This very portfolio showcasing my skills." 
        />
      </div>
    </section>
  );
};

export default Projects;
