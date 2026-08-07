import React from "react";

import {
    FaTrash,
    FaMinus,
    FaPlus
} from "react-icons/fa";

import "./CartItem.css";

function CartItem({

    item,

    increaseQuantity,

    decreaseQuantity,

    removeItem

}) {

    return (

        <div className="cart-item">

            <div className="cart-image">

                <img
                    src={item.image}
                    alt={item.name}
                />

            </div>

            <div className="cart-details">

                <h3>{item.name}</h3>

                <p>Brand : {item.brand}</p>

                <p>Size : {item.size}</p>

                <p>Color : {item.color}</p>

                <h4>₹{item.price}</h4>

            </div>

            <div className="cart-quantity">

                <button
                    onClick={() =>
                        decreaseQuantity(item.id)
                    }
                >
                    <FaMinus />
                </button>

                <span>{item.quantity}</span>

                <button
                    onClick={() =>
                        increaseQuantity(item.id)
                    }
                >
                    <FaPlus />
                </button>

            </div>

            <div className="cart-total">

                ₹{item.price * item.quantity}

            </div>

            <div className="cart-remove">

                <button
                    onClick={() =>
                        removeItem(item.id)
                    }
                >
                    <FaTrash />
                </button>

            </div>

        </div>

    );

}

export default CartItem;