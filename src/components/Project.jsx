import React from 'react';

const Project = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Project;
