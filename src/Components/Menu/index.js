import './style.css';
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import {useEffect, useState} from "react";

// const menuTemp =
//    [
//         {id: 1, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "9.95"},
//         {id: 2, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "10.50"},
//         {id: 3, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 4, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "9.95"},
//         {id: 5, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "8.75"},
//         {id: 6, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "8.75"},
//         {id: 7, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "9.95"},
//         {id: 8, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 9, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 10, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 11, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 12, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 13, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 15, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 16, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 17, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 18, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"},
//         {id: 19, name: "Beef Fillet Carpaccio", description: "Beef Fillet Carpaccio", price: "11.25"}
//     ]
// ;

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