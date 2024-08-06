import Links from './Links'
import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = ({links, text}) => {
    return (
        <footer>
             <img alt="Logo" src={logo}></img>
            <nav>
             <Links links={links} text="About"/> {/* pass the links array as a prop to Links component */}
             <Links links={links} text="Careers"/>
             <Links links={links} text="Events"/>
             <Links links={links} text="Products"/>
             <Links links={links} text="Support"/>
             <img alt="Logo" src={facebook}></img>
             <img alt="Logo" src={twitter}></img>
             <img alt="Logo" src={pinterest}></img>
             <img alt="Logo" src={instagram}></img>
            </nav>
        </footer>
    );
}

export default Footer;