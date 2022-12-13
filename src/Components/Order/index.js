import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './OrderSummary';
import AnchorLink from "react-anchor-link-smooth-scroll";
// import './Navbar';
import OrderSummary from "./OrderSummary";
import './index.css';
import {Link} from "react-router-dom";


function Order() {


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
                <h4 id="mains" className="">Mains</h4>
                <h4 id="desserts" className="">Desserts</h4>
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