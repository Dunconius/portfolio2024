import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/variables.css";

function Template() {
    
    const [theme, setTheme] = useState('light-theme');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return(<>
        <Header onChangeTheme={setTheme} />
        <Outlet />
        <Footer />
    </>);
}

export default Template;