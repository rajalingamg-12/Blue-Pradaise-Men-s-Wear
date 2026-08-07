import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CartSummary.css";

function CartSummary({ cartItems }) {

    const navigate = useNavigate();

    const [coupon, setCoupon] = useState("");

    const shipping = 99;

    const gstRate = 0.18;

    const subtotal = useMemo(() => {

        return cartItems.reduce(

            (total, item) => total + item.price * item.quantity,

            0

        );

    }, [cartItems]);

    const discount = coupon.toUpperCase() === "BLUE10"
        ? subtotal * 0.10
        : 0;

    const gst = (subtotal - discount) * gstRate;

    const total = subtotal - discount + shipping + gst;

    return (

        <div className="cart-summary">

            <h2>

                Order Summary

            </h2>

            <div className="coupon-box">

                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                />

                <button>

                    Apply

                </button>

            </div>

            <div className="summary-row">

                <span>Subtotal</span>

                <span>₹{subtotal.toFixed(2)}</span>

            </div>

            <div className="summary-row">

                <span>Shipping</span>

                <span>₹{shipping.toFixed(2)}</span>

            </div>

            <div className="summary-row">

                <span>Discount</span>

                <span>-₹{discount.toFixed(2)}</span>

            </div>

            <div className="summary-row">

                <span>GST (18%)</span>

                <span>₹{gst.toFixed(2)}</span>

            </div>

            <hr />

            <div className="summary-total">

                <span>Total</span>

                <span>₹{total.toFixed(2)}</span>

            </div>

            <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
            >

                Proceed to Checkout

            </button>

        </div>

    );

}

export default CartSummary;