import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">Contact</h3>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Name" className="p-3 border rounded-md" />
        <input type="email" placeholder="Email" className="p-3 border rounded-md" />
        <textarea placeholder="Message" rows="4" className="p-3 border rounded-md"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
