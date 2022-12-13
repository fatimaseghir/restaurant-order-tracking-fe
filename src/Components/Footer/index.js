import './style.css';
import flame from "../../icons/flame.png";

function Footer() {

    return (
        <footer className="footer-main">
            <img className="back-to-top" src={flame} alt="logo"></img>
            <p className="text">© 2022 Stanleys' Steaks</p>
        </footer>
    );
}

export default Footer;