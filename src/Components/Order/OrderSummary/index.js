import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

function OrderSummary() {

    // Please note that form validation and post request will be a task from Story7 onward as desired validation code will
    // connect with POST request.
    // Divs for input errors have already been added here.

    return (
        <>
            <div className="modal modal-xl fade" id="orderSummaryModal" tabIndex="-1" aria-labelledby=""
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Order Summary</h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-7 fw-bold">Item</div>
                                    <div className="col-3 fw-bold text-center">Amount</div>
                                    <div className="col-1 fw-bold">Price</div>
                                </div>
                                <div className="row">
                                    <div className="col-7">Cheeseburger</div>
                                    <div className="col-3 text-center">2</div>
                                    <div className="col-1">£22.98</div>
                                </div>
                                <div className="row">
                                    <div className="col-7">Cheeseburger</div>
                                    <div className="col-3 text-center">2</div>
                                    <div className="col-1">£22.98</div>
                                </div>
                                <div className="row border-bottom border-1 border-light pb-2 mb-2">
                                    <div className="col-7">Cheeseburger</div>
                                    <div className="col-3 text-center">2</div>
                                    <div className="col-1">£22.98</div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-7"></div>
                                    <div className="col-3 fw-bold text-end">Total:</div>
                                    <div className="col-1">£108.76</div>
                                </div>
                            </div>
                            <form name="orderSummaryForm ">
                                <label htmlFor="first-name">First name</label>
                                <input id="first-name" name="first-name" className="submit-contact form-control w-50"
                                       type="text" />
                                <label htmlFor="last-name">Last name</label>
                                <input id="last-name" name="first-name" className="submit-contact form-control w-50"
                                       type="text" />
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" className="submit-contact form-control w-75"
                                       type="text" />
                                <label htmlFor="address">Address</label>
                                <textarea id="address" name="address" className="submit-contact form-control w-75 h-25"
                                       type="text" rows="2" />
                                <label htmlFor="postcode">Postcode</label>
                                <input id="postcode" name="postcode" className="submit-contact form-control w-25 mb-4"
                                       type="text" />
                                <div id="orderSummaryFooter" className="modal-footer justify-content-between">
                                    <button type="button" className="border border-3 border-light" data-bs-dismiss="modal">CANCEL</button>
                                    <button type="button" className="border border-3 border-light" data-bs-dismiss="modal">MODIFY</button>
                                    <button type="submit" className="border border-3 border-light" data-bs-dismiss="modal">COMPLETE</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default OrderSummary;