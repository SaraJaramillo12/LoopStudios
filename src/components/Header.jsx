import Links from './Links'
import logo from '../assets/images/logo.svg';
import '../sass/header.scss';

const Header = ({links, text}) => {
    return (
        <header>
            <img alt="Logo" src={logo}></img>
            <nav>
             <Links links={links} text="About"/> {/* pass the links array as a prop to Links component */}
             <Links links={links} text="Careers"/>
             <Links links={links} text="Events"/>
             <Links links={links} text="Products"/>
             <Links links={links} text="Support"/>
            </nav>
        </header>
    );
}

export default Header;