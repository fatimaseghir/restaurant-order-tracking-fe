import './style.css';
import {Link} from "react-router-dom";

function ClickToOrder() {

    return (
        <div className="click-to-order">
            <Link to={`/order`}>
            <button className="order"><a href="">ORDER</a></button>
            </Link>
        </div>
    );
}

export default ClickToOrder;
