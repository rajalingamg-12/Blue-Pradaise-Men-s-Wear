import React, { useState } from "react";

import {
    FaCreditCard,
    FaUniversity,
    FaMoneyBillWave,
    FaMobileAlt
} from "react-icons/fa";

import "./PaymentMethod.css";

function PaymentMethod() {

    const [payment, setPayment] = useState("cod");

    const methods = [

        {
            id: "card",
            title: "Credit / Debit Card",
            icon: <FaCreditCard />
        },

        {
            id: "upi",
            title: "UPI Payment",
            icon: <FaMobileAlt />
        },

        {
            id: "netbanking",
            title: "Net Banking",
            icon: <FaUniversity />
        },

        {
            id: "cod",
            title: "Cash On Delivery",
            icon: <FaMoneyBillWave />
        }

    ];

    return (

        <div className="payment-method">

            <h2>

                Payment Method

            </h2>

            <div className="payment-list">

                {methods.map((method) => (

                    <label
                        key={method.id}
                        className={
                            payment === method.id
                                ? "payment-card active"
                                : "payment-card"
                        }
                    >

                        <input
                            type="radio"
                            name="payment"
                            checked={payment === method.id}
                            onChange={() =>
                                setPayment(method.id)
                            }
                        />

                        <div className="payment-icon">

                            {method.icon}

                        </div>

                        <div>

                            <h4>

                                {method.title}

                            </h4>

                        </div>

                    </label>

                ))}

            </div>

        </div>

    );

}

export default PaymentMethod;