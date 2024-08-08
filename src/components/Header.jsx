import { useState } from 'react';
import Links from './Links';
import logo from '../assets/images/logo.svg';
import hamburgerMenu from '../assets/images/icon-hamburger.svg';
import closeMenuIcon from '../assets/images/icon-close.svg';
import '../sass/header.scss';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const links = ["About", "Careers", "Events", "Products", "Support"];

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <section className="header-section">
                <img alt="Logo" src={logo} />
                <img
                    alt="Menu Icon"
                    src={isMenuOpen ? closeMenuIcon : hamburgerMenu}
                    className="menu-icon"
                    onClick={toggleMenu}
                />
                <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                    <img alt="Logo" src={logo} className="menu-logo" />
                    <ul>
                        {links.map((link, index) => (
                            <Links key={index} text={link} />
                        ))}
                    </ul>
                </nav>
            </section>
            <section className="header-text">
                <h2>IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER</h2>
            </section>
        </header>
    );
};

export default Header;
