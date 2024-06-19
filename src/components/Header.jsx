import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import "../styles/Header.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <header>
            <div className="header-div">
                <button className="hamburger-icon" onClick={toggleMenu}>
                    &#9776; {/* Unicode character for hamburger icon */}
                </button>
                <h1>This is the header</h1>
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
                    <button>Light Mode</button>
                    <button>Dark Mode</button>
                    <button>Neon</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
