import React from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../../context/CartContext";

import "./OrderSummary.css";

function OrderSummary() {

    const navigate = useNavigate();

    const { cartItems, clearCart } = useCart();

    const subtotal = cartItems.reduce(

        (total, item) =>
            total + item.price * item.quantity,

        0

    );

    const shipping = subtotal > 3000 ? 0 : 99;

    const tax = Math.round(subtotal * 0.05);

    const total = subtotal + shipping + tax;

    const handlePlaceOrder = () => {

        if (cartItems.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        clearCart();

        navigate("/order-success");

    };

    return (

        <div className="order-summary">

            <h2>

                Order Summary

            </h2>

            <div className="summary-products">

                {cartItems.length === 0 ? (

                    <p className="empty-cart">

                        No products in cart.

                    </p>

                ) : (

                    cartItems.map(item => (

                        <div
                            key={item.id}
                            className="summary-item"
                        >

                            <div className="summary-left">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div>

                                    <h4>

                                        {item.name}

                                    </h4>

                                    <span>

                                        Qty : {item.quantity}

                                    </span>

                                </div>

                            </div>

                            <strong>

                                ₹{item.price * item.quantity}

                            </strong>

                        </div>

                    ))

                )}

            </div>

            <div className="summary-total">

                <div>

                    <span>Subtotal</span>

                    <span>₹{subtotal}</span>

                </div>

                <div>

                    <span>Shipping</span>

                    <span>

                        {shipping === 0
                            ? "Free"
                            : `₹${shipping}`}

                    </span>

                </div>

                <div>

                    <span>GST (5%)</span>

                    <span>₹{tax}</span>

                </div>

                <hr />

                <div className="grand-total">

                    <span>Total</span>

                    <span>

                        ₹{total}

                    </span>

                </div>

            </div>

            <button
                className="place-order-btn"
                onClick={handlePlaceOrder}
            >

                Place Order

            </button>

        </div>

    );

}

export default OrderSummary;