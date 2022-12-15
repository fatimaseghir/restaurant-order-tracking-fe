import '../Order/OrderSummary/index.css';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function OrderConfirmed() {

    return (
        <>
            <div className="form-container">
                <h3>Thank you for your order!</h3>
            </div>
        </>
    );
}

export default OrderConfirmed;