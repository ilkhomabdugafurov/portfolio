import React from 'react';

const Certificate = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default Certificate;
