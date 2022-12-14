import './style.css';
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import {useEffect, useState} from "react";

function Menu() {

    const extractResponseData = (response) => {
        return response.json();
    };

    const [menu, setMenu] = useState([]);

    const fetchMenu = async () => {
        const response = await fetch(`http://localhost:8080/menu`);
        if (!response.ok) {
            throw new Error("Menu can't be fetched");
        }
        const menuData = await extractResponseData(response);
        setMenu(menuData.data);
        console.log(menu.data);
    };

    useEffect( () => {
        fetchMenu()
            .catch(err => err.message = 'Error here!')
    }, []);

    return (
        <div id="menu" className="menu">
            <h1>Menu</h1>
            <div className="menu-container">
                <div className="menu-item">
                   <h3>Starters</h3>
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