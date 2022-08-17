import logoFooter from '../../assets/logo_footer.png';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt='logo Kasa blanc' />
            <p>© 2022 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;