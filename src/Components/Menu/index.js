import './style.css';
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import MenuContext from '../../Contexts/MenuContext';
import React from "react";

function Menu() {

    const menu = React.useContext(MenuContext);

    return (
        <div id="menu" className="menu">
            <h1>Menu</h1>
            <div className="menu-container">
                <div className="menu-item">
                   <h3>Burgers</h3>
                    {menu.slice(0,6).map((menuItem) => {
                        return (
                            <p key={menuItem.id}>{menuItem.name} £{menuItem.price}</p>
                        )})}
                    <img className="meal" src={img6} />
                </div>
                <div className="menu-item">
                <h3>Mains</h3>
                    {menu.slice(6,12).map((menuItem) => {
                        return (
                            <p key={menuItem.id}>{menuItem.name} £{menuItem.price}</p>
                        )})}
                    <img className="meal" src={img5} />
                </div>
                <div className="menu-item">
                <h3>Desserts</h3>
                    {menu.slice(12).map((menuItem) => {
                        return (
                            <p key={menuItem.id}>{menuItem.name} £{menuItem.price}</p>
                        )})}
                    <img className="meal" src={img7} />
                </div>
            </div>
        </div>
    );
}

export default Menu;