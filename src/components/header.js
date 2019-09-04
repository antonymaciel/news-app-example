import React from 'react';
import { Link } from "react-router-dom";
import { ResponsiveNavigation } from 'react-foundation';
import '../styles/header.scss';

const Header = () => (
    <header className="header">
        <ResponsiveNavigation className="navigation-container">
                <nav className="navigation">
                    <Link className="item" to="/">Home</Link>
                    <Link className="item" to="/faq">FAQ</Link>
                    <Link className="item" to="/about">About</Link>
                </nav>
        </ResponsiveNavigation>
    </header>
) 

export default Header;