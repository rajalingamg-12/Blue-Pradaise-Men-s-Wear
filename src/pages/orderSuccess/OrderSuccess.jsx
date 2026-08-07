import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import "./OrderSuccess.css";

function OrderSuccess() {

    const orderId =
        "BP" + Math.floor(100000 + Math.random() * 900000);

    const deliveryDate = new Date();

    deliveryDate.setDate(deliveryDate.getDate() + 5);

    return (

        <div className="order-success">

            <div className="success-card">

                <FaCheckCircle className="success-icon" />

                <h1>

                    Order Placed Successfully!

                </h1>

                <p>

                    Thank you for shopping with
                    <strong> Blue Paradise Men's Wear</strong>.

                </p>

                <div className="order-info">

                    <div>

                        <span>Order ID</span>

                        <strong>{orderId}</strong>

                    </div>

                    <div>

                        <span>Estimated Delivery</span>

                        <strong>
                            {deliveryDate.toDateString()}
                        </strong>

                    </div>

                </div>

                <div className="success-buttons">

                    <Link
                        to="/shop"
                        className="continue-btn"
                    >

                        Continue Shopping

                    </Link>

                    <Link
                        to="/orders"
                        className="orders-btn"
                    >

                        View Orders

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default OrderSuccess;