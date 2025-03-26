import React from 'react';
import "../Navbar.css"

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
                        <a href="/about" className="navbar-link">
                            Über mich
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/contact" className="navbar-link">
                            Meine Projekte
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
