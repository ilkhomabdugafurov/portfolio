import React from 'react';

const Skill = ({ name }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-40 text-center">
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default Skill;
