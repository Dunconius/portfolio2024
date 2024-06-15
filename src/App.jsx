import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AnchorMenu from "./components/AnchorMenu";
import Intro from "./components/Intro";
import "./styles/App.css"


const App = () => {
  return (
    <div className="portfolio-site">
      <div className="sidebar">
        <Intro />
        <AnchorMenu />

      </div>
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