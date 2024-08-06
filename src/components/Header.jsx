import Links from './Links'
import logo from '../assets/images/logo.svg';
import '../sass/header.scss';

const Header = ({links, text}) => {
    return (
        <header>
            <section className="header-section" >
                <img alt="Logo" src={logo}></img>
                <nav>
                    <Links links={links} text="About"/> 
                    <Links links={links} text="Careers"/>
                    <Links links={links} text="Events"/>
                    <Links links={links} text="Products"/>
                    <Links links={links} text="Support"/>
                </nav>
            </section>
            <section className="header-text" >
                <h2>IMMERSIVE <br></br> EXPERIENCES <br></br> THAT DELIVER</h2>
            </section>
        </header>
    );
}

export default Header;