import React from "react";
import {
  FaHeart,
  FaEye,
  FaStar,
  FaShoppingCart
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useCart } from "../../../../context/CartContext";
import { useWishlist } from "../../../../context/WishlistContext";

import "./ProductCard.css";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist
  } = useWishlist();

  return (

    <div
      className="product-card"
      onClick={() => navigate(`/shop/product/${product.id}`)}
    >

      {/* Product Image */}

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
          className="main-image"
        />

        <img
          src={product.hoverImage}
          alt={product.name}
          className="hover-image"
        />

        <span className="discount-badge">

          -{product.discount}%

        </span>

        <div className="product-icons">

          {/* Wishlist */}

          <button
            onClick={(e) => {

              e.stopPropagation();

              toggleWishlist(product);

            }}
          >

            <FaHeart

              color={
                isInWishlist(product.id)
                  ? "#ff3b30"
                  : "#555"
              }

            />

          </button>

          {/* Quick View */}

          <button
            onClick={(e) => {

              e.stopPropagation();

              navigate(`/shop/product/${product.id}`);

            }}
          >

            <FaEye />

          </button>

        </div>

      </div>

      {/* Product Content */}

      <div className="product-content">

        <p className="category">

          {product.category}

        </p>

        <h3>

          {product.name}

        </h3>

        <div className="rating">

          <FaStar className="star" />

          <span>

            {product.rating}

          </span>

          <small>

            ({product.reviews})

          </small>

        </div>

        <div className="price">

          <span className="new-price">

            ₹{product.price}

          </span>

          <span className="old-price">

            ₹{product.oldPrice}

          </span>

        </div>

        <button
          className="cart-btn"
          onClick={(e) => {

            e.stopPropagation();

            addToCart(product);

          }}
        >

          <FaShoppingCart />

          Add to Cart

        </button>

      </div>

    </div>

  );

}

export default ProductCard;