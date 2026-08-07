import React from "react";

import BillingForm from "./components/BillingForm";
import OrderSummary from "./components/OrderSummary";
import PaymentMethod from "./components/PaymentMethod";
import CouponBox from "./components/CouponBox";

import "./Checkout.css";

function Checkout() {

    return (

        <div className="checkout-page">

            <div className="checkout-header">

                <h1>

                    Checkout

                </h1>

                <p>

                    Complete your order securely.

                </p>

            </div>

            <div className="checkout-container">

                <div className="checkout-left">

                    <BillingForm />

                    <CouponBox />

                    <PaymentMethod />

                </div>

                <div className="checkout-right">

                    <OrderSummary />

                </div>

            </div>

        </div>

    );

}

export default Checkout;