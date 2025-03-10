import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        </div>
    );
};

export default App;
