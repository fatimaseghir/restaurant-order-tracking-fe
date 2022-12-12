import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './OrderSummary';
import './Navbar';


function Order() {




    return (
        <>
            <Navbar />
            <h1>Order</h1>
            <div>
                <a className="nav-item nav-link" href="">Starters</a>
                <a className="nav-item nav-link" href="">Mains</a>
                <a className="nav-item nav-link" href="">Desserts</a>
            </div>
            <div>
                <h2>Starters</h2>
                <h2>Mains</h2>
                <h2>Desserts</h2>
            </div>

            <div>
                <button type="button">Cancel Order</button>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Checkout
                </button>





            </div>

        </>
    );
}

export default Order;