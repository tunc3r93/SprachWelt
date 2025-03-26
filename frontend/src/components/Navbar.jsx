import React from 'react';
import "../assets/css/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    Meine App
                </a>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">
                            Startseite
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/choose-language" className="navbar-link">
                            Sprachenauswahl
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/learn-type" className="navbar-link">
                            Lernmethode
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
