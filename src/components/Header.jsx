import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import "../styles/Header.css"

const Header = ({onChangeTheme}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    
    return (
        <header>
            <div className="header-div">
                <div className="header-title">
                    <h1>Duncan Bean</h1>
                    <p>Junior Web Developer</p>
                </div>
                <button className="hamburger-icon" onClick={toggleMenu}>
                    &#9776; {/* Unicode character for hamburger icon */}
                </button>
            </div>
            <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
                <div id="nav-links">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
                    <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
                    <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                </div>
                <div id="theme-links">
                    <button onClick={() => onChangeTheme('light-theme}')}>Light Mode</button>
                    <button onClick={() => onChangeTheme('dark-theme')}>Dark Mode</button>
                    <button onClick={() => onChangeTheme('neon-theme')}>Neon</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
