import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Navbar from './Navbar';
import AnchorLink from "react-anchor-link-smooth-scroll";
import OrderSummary from "./OrderSummary";
import './index.css';
import MenuItemCard from "./MenuItemCard";

function Order() {

    const placeholderMenu = [
        {
            menu_item_image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            image_alt: 'Classic Burger',
            menu_item_name: 'Classic Burger',
            menu_item_description: 'A delicious beef burger with all the fixings, including lettuce, tomato, onion, pickles, ketchup, and mustard.',
            menu_item_price: 6.99,
        },
        {
            menu_item_image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            image_alt: 'Classic Burger',
            menu_item_name: 'Classic Burger',
            menu_item_description: 'A delicious beef burger with all the fixings, including lettuce, tomato, onion, pickles, ketchup, and mustard.',
            menu_item_price: 6.99,
        },
        {
            menu_item_image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            image_alt: 'Classic Burger',
            menu_item_name: 'Classic Burger',
            menu_item_description: 'A delicious beef burger with all the fixings, including lettuce, tomato, onion, pickles, ketchup, and mustard.',
            menu_item_price: 6.99,
        }
        ];

    return (
        <>
            <main className="orderMain">
            <OrderSummary />
            {/*<Navbar />*/}
            <h1 className="text-center">Order</h1>
            <div className="orderNav">

                <h3><AnchorLink className="nav-item nav-link" href="#starters">Starters</AnchorLink></h3>
                <h3><AnchorLink className="nav-item nav-link" href="#mains">Mains</AnchorLink></h3>
                <h3><AnchorLink className="nav-item nav-link" href="#desserts">Desserts</AnchorLink></h3>
            </div>
            <div className="orderTitles">
                <h4 id="starters" className="">Starters</h4>
                <div className='itemContainer'>

                </div>

                <h4 id="mains" className="">Mains</h4>
                <div className='itemContainer'>
                {placeholderMenu.map((menuItem, index) => {
                    return (
                        <div className='menuItemCard' key={index}>
                            <MenuItemCard menuItem={menuItem} />
                        </div>
                    );
                })}
                </div>

                <h4 id="desserts" className="">Desserts</h4>
                <div className='itemContainer'>

                </div>

            </div>

            <div className="orderFooter">
                <button type="button" className="orderButton">CANCEL ORDER</button>
                <button type="button" className="orderButton" data-bs-toggle="modal" data-bs-target="#orderSummaryModal">
                COMPLETE ORDER
                </button>

            </div>
            </main>

        </>
    );
}

export default Order;