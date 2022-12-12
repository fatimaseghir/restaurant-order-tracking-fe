import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function OrderSummary() {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby=""
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Order Summary</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="fname">First name:</label>
                                <input type="text" id="fname" name="fname" />
                                <label htmlFor="lname">Last name:</label>
                                <input type="text" id="lname" name="lname" />
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="lname" name="lname" />
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="lname" name="lname" />
                                <label htmlFor="address">Postcode:</label>
                                <input type="text" id="lname" name="lname" />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel Order</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Modify Order</button>
                            <button type="button" className="btn btn-primary">Complete</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default OrderSummary;