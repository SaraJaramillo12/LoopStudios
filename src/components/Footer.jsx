import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';
import '../sass/footer.scss';

const Footer = () => {
    const links = ["About", "Careers", "Events", "Products", "Support"];
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <img alt="Logo" src={logo} className="footer-logo"/>
                    <ul className="footer-links">
                        {links.map((link, index) => (
                            <li key={index} className="footer-link">{link}</li>
                        ))}
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="social-icons">
                        <div className="social-icon-wrapper">
                            <img alt="Facebook" src={facebook} className="social-icon" />
                        </div>
                        <div className="social-icon-wrapper">
                            <img alt="Twitter" src={twitter} className="social-icon" />
                        </div>
                        <div className="social-icon-wrapper">
                            <img alt="Pinterest" src={pinterest} className="social-icon" />
                        </div>
                        <div className="social-icon-wrapper">
                            <img alt="Instagram" src={instagram} className="social-icon" />
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2021 Loopstudios. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;