import React from "react";
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_7a3xqdv",
            "template_nrtw57l",
            e.target,
            "F__p_nX3w3JwMi3oK"
        )
        .then(
            (result) => {
              toast.success("✅ Message Sent Successfully!");
            },
            (error) => {
              toast.error("❌ Failed to send message!");
            }
        );

    e.target.reset();
};

const Contact = () => {
    return (
        <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Contact</h3>
            <form
                onSubmit={sendEmail}
                className="flex flex-col gap-4 max-w-md mx-auto"
            >
                <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    className="p-3 border rounded-md"
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="p-3 border rounded-md"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="p-3 border rounded-md"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
