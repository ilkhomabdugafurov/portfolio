import React from 'react';
import{motion} from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
    <motion.h2
      className="text-4xl font-extrabold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Hi, I’m Ilkhom
    </motion.h2>
    <motion.p
      className="text-lg mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Frontend React Developer | Passionate about clean code & UX
    </motion.p>
    <motion.a
      href="#projects"
      className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      See My Work
    </motion.a>
  </section>
  );
};

export default Hero;