import './style.css';
import menu from '../../icons/menu.png';
import contact  from '../../icons/contact.png';
import phone from '../../icons/phone.png';
import drink from '../../icons/drink2.png';

function NavBar() {

    return (
            <div className="container-nav">
                <div className="icon">
                    <a><img className="logo" src={drink} alt="image" ></img></a>
                    <p>RESTAURANT</p>
                </div>
                <div className="icon">
                    <a><img className="logo" src={menu} alt="image" ></img></a>
                    <p>MENU</p>
                </div>
                <div className="icon">
                    <a><img className="logo" src={contact} alt="image" ></img></a>
                    <p>FARM</p>
                </div>
                <div className="icon">
                    <a><img className="logo" src={phone} alt="image" ></img></a>
                    <p>CONTACT</p>
                </div>
            </div>
    );
}

export default NavBar;