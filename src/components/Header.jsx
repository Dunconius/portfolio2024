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
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/experience"}>Experience</NavLink>
                <NavLink to={"/skills"}>Skills</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;
