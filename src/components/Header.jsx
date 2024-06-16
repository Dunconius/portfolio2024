import React from 'react';
import "../styles/Header.css"

const Header = ({ toggleMenu }) => {
    return (
        <div className="header-div">
            <button className="hamburger-icon" onClick={toggleMenu}>
                &#9776; {/* Unicode character for hamburger icon */}
            </button>
            <h1>This is the header</h1>
        </div>
    );
};

export default Header;
