import React, { useState } from "react";

import "./CouponBox.css";

function CouponBox() {

    const [coupon, setCoupon] = useState("");

    const [message, setMessage] = useState("");

    const [discount, setDiscount] = useState(0);

    const applyCoupon = () => {

        const code = coupon.trim().toUpperCase();

        switch (code) {

            case "WELCOME10":

                setDiscount(10);

                setMessage("🎉 10% discount applied!");

                break;

            case "SAVE20":

                setDiscount(20);

                setMessage("🎉 20% discount applied!");

                break;

            case "BLUE50":

                setDiscount(50);

                setMessage("🎉 ₹50 instant discount applied!");

                break;

            default:

                setDiscount(0);

                setMessage("❌ Invalid coupon code");

        }

    };

    return (

        <div className="coupon-box">

            <h2>

                Apply Coupon

            </h2>

            <div className="coupon-input">

                <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    value={coupon}
                    onChange={(e) =>
                        setCoupon(e.target.value)
                    }
                />

                <button
                    onClick={applyCoupon}
                >

                    Apply

                </button>

            </div>

            {message && (

                <p className="coupon-message">

                    {message}

                </p>

            )}

            {discount > 0 && (

                <div className="available-coupon">

                    Discount :
                    <strong>

                        {discount}
                        {discount === 50 ? "₹" : "%"}

                    </strong>

                </div>

            )}

        </div>

    );

}

export default CouponBox;