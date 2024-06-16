import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Footer from "./Footer";

const AppLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div className="AppLayout">
            <Header toggleMenu={toggleMenu} />
            <NavBar isOpen={isMenuOpen} />
            <MainContent />
            <Footer />
        </div>
    );
};

export default AppLayout;