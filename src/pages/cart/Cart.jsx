import React from "react";

import { useCart } from "../../context/CartContext";

import CartItem from "./components/CartItem/CartItem";
import CartSummary from "./components/CartSummary/CartSummary";
import EmptyCart from "./components/EmptyCart/EmptyCart";

import "./Cart.css";

function Cart() {

    const {

        cartItems,

        increaseQuantity,

        decreaseQuantity,

        removeItem,

        clearCart

    } = useCart();

    return (

        <div className="cart-page">

            <div className="cart-header">

                <h1>Shopping Cart</h1>

                <p>Review your selected products before checkout.</p>

            </div>

            {cartItems.length === 0 ? (

                <EmptyCart />

            ) : (

                <div className="cart-container">

                    <div className="cart-items">

                        {cartItems.map((item) => (

                            <CartItem
                                key={item.id}
                                item={item}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                removeItem={removeItem}
                            />

                        ))}

                        <button
                            className="clear-cart-btn"
                            onClick={clearCart}
                        >

                            Clear Cart

                        </button>

                    </div>

                    <CartSummary cartItems={cartItems} />

                </div>

            )}

        </div>

    );

}

export default Cart;