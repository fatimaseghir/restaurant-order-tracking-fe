import './style.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu from '../../icons/menu.png';
import contact  from '../../icons/contact.png';
import phone from '../../icons/phone.png';
import drink from '../../icons/drink2.png';
import {Link} from "react-router-dom";

function NavBar() {

    return (
            <div className="container-nav">
                <div className="icon-nav">
                    <AnchorLink href='#description'><img className="logo-nav" src={drink} alt="image" ></img>
                    <p className="menu-text">RESTAURANT</p></AnchorLink>
                </div>
                <div className="icon-nav">
                    <AnchorLink href='#menu'><img className="logo-nav" src={menu} alt="image" ></img>
                    <p className="menu-text">MENU</p></AnchorLink>
                </div>
                <div className="icon-nav">
                    <Link to={`/createorder`}><img className="logo-nav" src={contact} alt="image" ></img>
                     <p className="menu-text">ORDER</p></Link>
                </div>
                <div className="icon-nav">
                    <AnchorLink href='#contact'><img className="logo-nav" src={phone} alt="image" ></img>
                    <p className="menu-text">CONTACT</p></AnchorLink>
                </div>
            </div>
    );
}

export default NavBar;