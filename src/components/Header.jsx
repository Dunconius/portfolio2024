import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import "../styles/Header.css"
import Hamburger from "./Hamburger";

const Header = ({onChangeTheme}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleThemeChange = (theme) => {
        onChangeTheme(theme);
        setIsOpen(false);
    };
    
    
    return (
        <header>
            <div className="header-div">
                <div className="header-title">
                    <NavLink to="/" className="home-button" onClick={() => setIsOpen(false)}><h1>Duncan Bean</h1></NavLink>
                    <p>Junior Web Developer</p>
                </div>
                <Hamburger isOpen={isOpen} onClick={toggleMenu} />
                
            </div>
            <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
                <div id="nav-links">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
                    <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
                    <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
                    {/* <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink> */}
                </div>
                <div id="theme-links">
                    <button onClick={() => handleThemeChange('light-theme')}>Light Mode</button>
                    <button onClick={() => handleThemeChange('dark-theme')}>Dark Mode</button>
                    <button onClick={() => handleThemeChange('neon-theme')}>Neon</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
