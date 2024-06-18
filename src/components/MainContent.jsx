import React from 'react';
import About from "./content/About";
import Contact from "./content/Contact";
import Experience from "./content/Experience";
import Intro from "./content/Intro";
import Projects from "./content/Projects";
import Skills from "./content/Skills";
import "../styles/MainContent.css"

const MainContent = () => {
    return (
        <div className="main-content">
            <About />
            <Contact />
            <Experience />
            <Intro />
            <Projects />
            <Skills />
        </div>
    );
};

export default MainContent;
