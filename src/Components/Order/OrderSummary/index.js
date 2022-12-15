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
                            {...register("name", {
                                required: "Please enter your name"
                            })}
                        />
                        {errors.name && <p className="errorMsg">{errors.name.message}</p>}
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input
                            className="label-name"
                            type="text"
                            placeholder="Enter you email"
                            {...register("email", {
                                required: "Please enter your email",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Please enter a valid email"
                                }
                            })}
                        />
                        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    </div>
                    <div className="input-container">
                        <label>Address</label>
                        <input
                            className="label-name"
                            type="text"
                            placeholder="Enter you address"
                            {...register("address", {
                                required: "Please enter your address"
                            })}
                        />
                        {errors.address && <p className="errorMsg">{errors.address.message}</p>}
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