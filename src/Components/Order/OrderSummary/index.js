import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function OrderSummary() {
    return (
        <>
            <div className="modal fade" id="orderSummaryModal" tabIndex="-1" aria-labelledby=""
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Order Summary</h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="fname">First name</label>
                                <input className="form-control" type="text" id="fname" name="fname" />
                                <label htmlFor="lname">Last name</label>
                                <input className="form-control" type="text" id="lname" name="lname" />
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="text" id="lname" name="lname" />
                                <label htmlFor="address">Address</label>
                                <input className="form-control" type="text" id="lname" name="lname" />
                                <label htmlFor="address">Postcode</label>
                                <input className="form-control" type="text" id="lname" name="lname" />
                            </form>
                        </div>
                        <div id="orderSummaryFooter" className="modal-footer justify-content-between">
                            <button type="button" className="fw-bold bg-dark text-light border border-3 border-light" data-bs-dismiss="modal">Cancel Order</button>
                            <button type="button" className="fw-bold bg-dark text-light border border-3 border-light" data-bs-dismiss="modal">Modify</button>
                            <button type="button" className="fw-bold bg-dark text-light border border-3 border-light" data-bs-dismiss="modal">Complete</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default OrderSummary;