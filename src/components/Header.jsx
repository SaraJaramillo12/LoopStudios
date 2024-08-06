import Links from './Links'
import logo from '../assets/images/logo.svg';
import '../sass/header.scss';

const Header = () => {
    const links = ["About", "Careers", "Events", "Products", "Support"];
    return (
        <header>
            <section className="header-section" >
                <img alt="Logo" src={logo}></img>
                <nav>
                    <ul>
                        {links.map((link, index) => (
                            <Links key={index} text={link} />
                        ))}
                    </ul>
                </nav>
            </section>
            <section className="header-text" >
                <h2>IMMERSIVE <br></br> EXPERIENCES <br></br> THAT DELIVER</h2>
            </section>
        </header>
    );
}

export default Header;