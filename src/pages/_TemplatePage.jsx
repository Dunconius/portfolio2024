import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Glow from '../components/glow';


function Template() {
    
    const [theme, setTheme] = useState('dark-theme');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return(<>
        <div className="main-container">
            <div className="glow-container">
                <Glow />
            </div>
            <Header onChangeTheme={setTheme} />
            <div className="page-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>);
}

export default Template;