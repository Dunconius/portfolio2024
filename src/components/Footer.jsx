import React from 'react';
import GithubLogo from "../assets/Github";
import LinkedInLogo from '../assets/Linkedin';
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <a className="footer-link" href="https://github.com/Dunconius" target='blank'><GithubLogo /></a>
            <a className="footer-link" href="https://www.linkedin.com/in/duncanbean/" target='blank'><LinkedInLogo /></a>
            <p>Built with React, Javascript, CSS, and VSCode</p>
        </footer>
    );
};

export default Footer;
