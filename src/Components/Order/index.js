import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Navbar from './Navbar';
import AnchorLink from "react-anchor-link-smooth-scroll";
import OrderSummary from "./OrderSummary";
import './index.css';
import MenuItemCard from "./MenuItemCard";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Order() {

    const extractResponseData = (response) => {
        return response.json();
    };

    const [menu, setMenu] = useState([]);

    const fetchMenu = async () => {
        const response = await fetch('http://localhost:8080/menu');
        if (!response.ok) {
            throw new Error('Menu can not be fetched');
        }
        const menuData = await extractResponseData(response);
        setMenu(menuData.data);
    }

    useEffect(() => {
        fetchMenu()
            .catch(err => err.message = 'Error here!')
    }, [])

    return (
        <>
            <main className="orderMain">
            <OrderSummary />
            {/*<Navbar />*/}
            <h1 className="order-title">Order</h1>
            <div className="orderNav">
                <h3><AnchorLink className="nav-item nav-link" href="#starters">Starters</AnchorLink></h3>
                <h3><AnchorLink className="nav-item nav-link" href="#mains">Mains</AnchorLink></h3>
                <h3><AnchorLink className="nav-item nav-link" href="#desserts">Desserts</AnchorLink></h3>
            </div>
            <div className="orderTitles">
                <h4 id="starters" className="subheading">Starters</h4>
                <div className='itemContainer'>
                    {menu.slice(0, 6).map((menuItem, index) => {
                        return (
                            <div className='menuItemCard' key={index}>
                                <MenuItemCard menuItem={menuItem} />
                            </div>
                        );
                    })}
                </div>

                <h4 id="mains" className="subheading">Mains</h4>
                <div className='itemContainer'>
                {menu.slice(6,12).map((menuItem, index) => {
                    return (
                        <div className='menuItemCard' key={index}>
                            <MenuItemCard menuItem={menuItem} />
                        </div>
                    );
                })}
                </div>

                <h4 id="desserts" className="subheading">Desserts</h4>
                <div className='itemContainer'>
                    {menu.slice(12).map((menuItem, index) => {
                        return (
                            <div className='menuItemCard' key={index}>
                                <MenuItemCard menuItem={menuItem} />
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className="orderFooter">
                <Link to={`/`}><button type="button" className="orderButton">CANCEL ORDER</button></Link>
                <button type="button" className="orderButton" data-bs-toggle="modal" data-bs-target="#orderSummaryModal">
                COMPLETE ORDER
                </button>
            </div>
            </main>
        </>
    );
}

export default Order;