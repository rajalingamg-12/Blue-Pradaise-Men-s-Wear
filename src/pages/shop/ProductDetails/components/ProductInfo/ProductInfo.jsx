import React, { useState } from "react";
import {
    FaStar,
    FaHeart,
    FaShoppingCart,
    FaBolt
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useCart } from "../../../../../context/CartContext";
import { useWishlist } from "../../../../../context/WishlistContext";

import "./ProductInfo.css";

function ProductInfo({ product }) {

    const navigate = useNavigate();

    const { addToCart } = useCart();

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();

    const [selectedSize, setSelectedSize] = useState(
        product.size[0]
    );

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {

        addToCart({

            ...product,

            size: selectedSize,

            quantity

        });

    };

    const handleBuyNow = () => {

        addToCart({

            ...product,

            size: selectedSize,

            quantity

        });

        navigate("/cart");

    };

    return (

        <div className="product-info">

            <span className="product-category">

                {product.category}

            </span>

            <h1>

                {product.name}

            </h1>

            <div className="product-rating">

                <FaStar className="star" />

                <span>{product.rating}</span>

                <small>

                    ({product.reviews} Reviews)

                </small>

            </div>

            <div className="price-section">

                <span className="new-price">

                    ₹{product.price}

                </span>

                <span className="old-price">

                    ₹{product.oldPrice}

                </span>

                <span className="discount">

                    {product.discount}% OFF

                </span>

            </div>

            <div className="product-meta">

                <p>

                    <strong>Brand:</strong> {product.brand}

                </p>

                <p>

                    <strong>Availability:</strong>

                    <span className="stock">

                        In Stock

                    </span>

                </p>

            </div>

            {/* Size */}

            <div className="size-section">

                <h4>Select Size</h4>

                <div className="sizes">

                    {product.size.map((size) => (

                        <button
                            key={size}
                            className={
                                selectedSize === size
                                    ? "active-size"
                                    : ""
                            }
                            onClick={() =>
                                setSelectedSize(size)
                            }
                        >

                            {size}

                        </button>

                    ))}

                </div>

            </div>

            {/* Quantity */}

            <div className="quantity-section">

                <h4>Quantity</h4>

                <div className="quantity-box">

                    <button
                        onClick={() =>
                            quantity > 1 &&
                            setQuantity(quantity - 1)
                        }
                    >

                        -

                    </button>

                    <span>

                        {quantity}

                    </span>

                    <button
                        onClick={() =>
                            setQuantity(quantity + 1)
                        }
                    >

                        +

                    </button>

                </div>

            </div>

            {/* Buttons */}

            <div className="action-buttons">

                <button
                    className="cart-btn"
                    onClick={handleAddToCart}
                >

                    <FaShoppingCart />

                    Add to Cart

                </button>

                <button
                    className="buy-btn"
                    onClick={handleBuyNow}
                >

                    <FaBolt />

                    Buy Now

                </button>

                <button
                    className="wish-btn"
                    onClick={() =>
                        toggleWishlist(product)
                    }
                >

                    <FaHeart
                        color={
                            isInWishlist(product.id)
                                ? "#ff3b30"
                                : "#fff"
                        }
                    />

                </button>

            </div>

        </div>

    );

}

export default ProductInfo;