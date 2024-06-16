import React from 'react';


const NavBar = ({ isOpen }) => {
    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <h3>menu item 1</h3>
            <h3>menu item 2</h3>
            <h3>menu item 3</h3>
            <h3>menu item 4</h3>
        </div>
    );
};

export default NavBar;
