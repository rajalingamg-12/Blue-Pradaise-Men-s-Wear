import React from "react";

import { FaTrash, FaShoppingCart, FaEye } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "./WishlistItem.css";

function WishlistItem({

    item,

    addToCart,

    removeFromWishlist

}) {

    const navigate = useNavigate();

    const handleMoveToCart = () => {

        addToCart(item);

        removeFromWishlist(item.id);

    };

    return (

        <div className="wishlist-card">

            <div className="wishlist-image">

                <img
                    src={item.image}
                    alt={item.name}
                />

            </div>

            <div className="wishlist-content">

                <span className="wishlist-category">

                    {item.category}

                </span>

                <h3>

                    {item.name}

                </h3>

                <div className="wishlist-price">

                    ₹{item.price}

                    <span>

                        ₹{item.oldPrice}

                    </span>

                </div>

                <div className="wishlist-buttons">

                    <button
                        className="move-cart-btn"
                        onClick={handleMoveToCart}
                    >

                        <FaShoppingCart />

                        Move to Cart

                    </button>

                    <button
                        className="view-btn"
                        onClick={() =>
                            navigate(`/shop/product/${item.id}`)
                        }
                    >

                        <FaEye />

                    </button>

                    <button
                        className="delete-btn"
                        onClick={() =>
                            removeFromWishlist(item.id)
                        }
                    >

                        <FaTrash />

                    </button>

                </div>

            </div>

        </div>

    );

}

export default WishlistItem;