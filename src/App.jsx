import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="portfolio-site">
      <nav className="anchor-menu">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <div className="main-content">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;