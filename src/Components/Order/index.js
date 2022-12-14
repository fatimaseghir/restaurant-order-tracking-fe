import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './OrderSummary';
import AnchorLink from "react-anchor-link-smooth-scroll";
import OrderSummary from "./OrderSummary";
import './index.css';
import {Link} from "react-router-dom";


function Order() {


    return (
        <>
            <main className="orderMain">
            <Link to={`/`} className="icon-home">HOME</Link>
            <OrderSummary />
            <h1 className="order-title">Order</h1>
            <div className="orderNav">
                <h5><AnchorLink className="nav-item nav-link" href="#starters">Starters</AnchorLink></h5>
                <h5><AnchorLink className="nav-item nav-link" href="#mains">Mains</AnchorLink></h5>
                <h5><AnchorLink className="nav-item nav-link" href="#desserts">Desserts</AnchorLink></h5>
            </div>
            <div className="orderTitles">
                <h5 id="starters" className="">Starters</h5>
                <h5 id="mains" className="">Mains</h5>
                <h5 id="desserts" className="">Desserts</h5>
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