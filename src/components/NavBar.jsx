import React from 'react';


const NavBar = ({ isOpen, toggleContent}) => {
    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <button className="nav-button" onClick={toggleContent}>About Me</button>
            <h3>menu item 2</h3>
            <h3>menu item 3</h3>
            <h3>menu item 4</h3>
        </div>
    );
};

export default NavBar;
