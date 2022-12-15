import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Navbar from './Navbar';
import AnchorLink from "react-anchor-link-smooth-scroll";
import OrderSummary from "../OrderConfirmed";
import './index.css';
import MenuItemCard from "./MenuItemCard";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import MenuContext from "../../Contexts/MenuContext";
import {useForm} from "react-hook-form";

function Order() {

    const menu = React.useContext(MenuContext);

    const navigate = useNavigate();

    const {
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/orderconfirmed');
    }

    const onCancel = () => {
        reset();
        navigate('/');
    }

    return (
        <>
            <main className="orderMain">
            <h3 className="order-title">Add Items to Order</h3>
            <div className="orderNav">
                <h5><AnchorLink className="nav-item nav-link" href="#starters">Starters</AnchorLink></h5>
                <h5><AnchorLink className="nav-item nav-link" href="#mains">Mains</AnchorLink></h5>
                <h5><AnchorLink className="nav-item nav-link" href="#desserts">Desserts</AnchorLink></h5>
            </div>
            <div className="orderTitles">
                <h5 id="starters" className="subheading">Starters</h5>
                <div className='itemContainer'>
                    {menu.slice(0, 6).map((menuItem, index) => {
                        return (
                            <div className='menuItemCard' key={index}>
                                <MenuItemCard menuItem={menuItem} />
                            </div>
                        );
                    })}
                </div>

                <h5 id="mains" className="subheading">Mains</h5>
                <div className='itemContainer'>
                {menu.slice(6,12).map((menuItem, index) => {
                    return (
                        <div className='menuItemCard' key={index}>
                            <MenuItemCard menuItem={menuItem} />
                        </div>
                    );
                })}
                </div>

                <h5 id="desserts" className="subheading">Desserts</h5>
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
                <button onClick={onCancel}>
                    Cancel
                </button>
                <button onClick={onSubmit} type="Submit">
                    Submit
                </button>
            </div>
            </main>
        </>
    );
}

export default Order;