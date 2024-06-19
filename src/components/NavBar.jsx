import React from 'react';


const NavBar = ({ isOpen, toggleContent}) => {
    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <div>
                <button className="nav-button" onClick={toggleContent}>About Me</button>
                <h3>menu item 2</h3>
                <h3>menu item 3</h3>
                <h3>menu item 4</h3>
            </div>
            <div>
                <h3>Light Mode</h3>
                <h3>Dark Mode</h3>
                <h3>Neon</h3>
            </div>
        </div>
    );
};

export default NavBar;
