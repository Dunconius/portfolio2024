import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";


function Template() {
    
    const [theme, setTheme] = useState('dark-theme');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return(<>
        <div className="main-container">
            <Header onChangeTheme={setTheme} />
            <div className="page-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>);
}

export default Template;