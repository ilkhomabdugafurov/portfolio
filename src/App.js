import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div className="bg-white min-h-screen text-gray-900 font-sans">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />

            {/* Toastify container */}
            <ToastContainer
                position="top-right"
                autoClose={3000} // 3 sekunddan keyin yopiladi
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default App;
