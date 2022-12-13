import './style.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu from '../../icons/menu.png';
import contact  from '../../icons/contact.png';
import phone from '../../icons/phone.png';
import drink from '../../icons/drink2.png';

function NavBar() {

    return (
            <div className="container-nav">
                <div className="icon">
                    <AnchorLink href='#description'><img className="logo" src={drink} alt="image" ></img>
                    <p className="menu-text">RESTAURANT</p></AnchorLink>
                </div>
                <div className="icon">
                    <AnchorLink href='#menu'><img className="logo" src={menu} alt="image" ></img>
                    <p className="menu-text">MENU</p></AnchorLink>
                </div>
                <div className="icon">
                    <AnchorLink href='#farm'><img className="logo" src={contact} alt="image" ></img>
                     <p className="menu-text">FARM</p></AnchorLink>
                </div>
                <div className="icon">
                    <AnchorLink href='#contact'><img className="logo" src={phone} alt="image" ></img>
                    <p className="menu-text">CONTACT</p></AnchorLink>
                </div>
            </div>
    );
}

export default NavBar;