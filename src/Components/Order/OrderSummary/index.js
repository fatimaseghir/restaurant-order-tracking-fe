import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import {Link} from "react-router-dom";



function OrderSummary() {

    // Please note that form validation and post request will be a task from Story7 onward as desired validation code will
    // connect with POST request.
    // Divs for input errors have already been added here.


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
                            <form name="orderSummaryForm">

                                <label htmlFor="first-name">First name</label>
                                <input id="first-name" name="first-name" className="submit-contact form-control"
                                       type="text" />
                                <div id="firstNameError" className="alert hidden formItem_alert"></div>

                                <label htmlFor="last-name">Last name</label>
                                <input id="last-name" name="first-name" className="submit-contact form-control"
                                       type="text" />
                                <div id="firstNameError" className="alert hidden formItem_alert"></div>

                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" className="submit-contact form-control"
                                       type="text" />
                                <div id="emailError" className="alert hidden formItem_alert"></div>

                                <label htmlFor="address">Address</label>
                                <input id="address" name="address" className="submit-contact form-control"
                                       type="text" />
                                <div id="addressError" className="alert hidden formItem_alert"></div>

                                <label htmlFor="postcode">Postcode</label>
                                <input id="postcode" name="postcode" className="submit-contact form-control"
                                       type="text" />
                                <div id="postcodeError" className="alert hidden formItem_alert"></div>


                                <div id="orderSummaryFooter" className="modal-footer justify-content-between">
                                    <Link to={`/`}><button type="button" className="fw-bold bg-dark text-light border border-3 border-light" data-bs-dismiss="modal">Cancel Order</button></Link>
                                    <Link to={`/order`}><button type="button" className="fw-bold bg-dark text-light border border-3 border-light" data-bs-dismiss="modal">Modify</button></Link>
                                    <button type="submit" className="fw-bold bg-dark text-light border border-3 border-light" data-bs-dismiss="modal">Complete</button>
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