import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
// import MainContent from "./MainContent";
import Footer from "./Footer";
import About from "./content/About";
import Contact from "./content/Contact";
import Experience from "./content/Experience";
import Intro from "./content/Intro";
import Projects from "./content/Projects";
import Skills from "./content/Skills";
import "../styles/MainContent.css"

const AppLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    }
    
    return (
        <div className="AppLayout">
            <Header toggleMenu={toggleMenu} />
            <NavBar toggleContent={toggleContent} isOpen={isMenuOpen} />
            <div className="main-content">
                <About isVisible={isContentVisible}/>
                <Contact />
                <Experience />
                <Intro />
                <Projects />
                <Skills />
            </div>
            <Footer />
        </div>
    );
};

export default AppLayout;