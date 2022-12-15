import '../../OrderConfirmed/index.css';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function OrderSummary() {

    const extractResponseData = (response) => {
        return response.json();
    };

    let customSettings = {
        method: 'POST',
        body: JSON.stringify(''),
        headers: {
            'Content-type': 'application/json'
        }
    }

    const postOrder= async (data) => {
        customSettings.body = JSON.stringify(data);
        const response = await fetch(`http://localhost:8080/orders`, customSettings);
        if (!response.ok) {
            throw new Error("Post can't be done");
        }
        const orderNumber = await extractResponseData(response);
        console.log(orderNumber);
    };

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        postOrder(data);
        console.log(data);
        navigate('/order');
    }

    const onCancel = () => {
        reset();
        navigate('/');
    }

    return (
        <>
            <div className="form-container">
                <h3>New Order</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <label>Name</label>
                        <input
                            className="label-name"
                            type="text"
                            placeholder="Enter you name"
                            {...register("customerName", {
                                required: "Please enter your name"
                            })}
                        />
                        {errors.customerName && <p className="errorMsg">{errors.customerName.message}</p>}
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input
                            className="label-name"
                            type="text"
                            placeholder="Enter you email"
                            {...register("customerEmail", {
                                required: "Please enter your email",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Please enter a valid email"
                                }
                            })}
                        />
                        {errors.customerEmail && <p className="errorMsg">{errors.customerEmail.message}</p>}
                    </div>
                    <div className="input-container">
                        <label>Address</label>
                        <input
                            className="label-name"
                            type="text"
                            placeholder="Enter you address"
                            {...register("deliveryAddress", {
                                required: "Please enter your address"
                            })}
                        />
                        {errors.deliveryAddress && <p className="errorMsg">{errors.deliveryAddress.message}</p>}
                    </div>
                    <div className="buttons-container">
                    <button className="button-styling" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="button-styling" type="Submit">
                        Continue
                    </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default OrderSummary;