import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h2 className="text-4xl font-extrabold mb-4">Hi, I’m Ilkhom</h2>
      <p className="text-lg mb-6">Frontend React Developer | Passionate about clean code & UX</p>
      <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">See My Work</a>
    </section>
  );
};

export default Hero;