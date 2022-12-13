import './style.css';
import {Link} from "react-router-dom";

function ClickToOrder() {

    return (
        <div className="click-to-order">
            <Link to={`/order`}>
            <button className="order">ORDER</button>
            </Link>
        </div>
    );
}

export default ClickToOrder;
