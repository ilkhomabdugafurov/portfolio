import React from 'react';
import Certificate from './Certificate';

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold mb-8 text-center">Certificates</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <Certificate title="Google IT Support" />
        <Certificate title="PDP Fullstack Java Developer" />
      </div>
    </section>
  );
};

export default Certificates;
