import React from "react";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import WishlistItem from "./components/WishlistItem";
import EmptyWishlist from "./components/EmptyWishlist";

import "./Wishlist.css";


function Wishlist() {

    const {
        wishlistItems,
        removeFromWishlist
    } = useWishlist();


    const {
        addToCart
    } = useCart();


    /* ==================================================
       ADD TO CART
    ================================================== */

    const handleAddToCart = (item) => {

        addToCart(item);

    };


    /* ==================================================
       REMOVE FROM WISHLIST
    ================================================== */

    const handleRemove = (item) => {

        removeFromWishlist(item.id);

    };


    return (

        <div className="wishlist-page">


            {/* ==================================================
               HEADER
            ================================================== */}

            <div className="wishlist-header">

                <span className="wishlist-label">
                    MY COLLECTION
                </span>

                <h1>
                    My Wishlist
                </h1>

                <p>
                    Save your favorite products for later.
                </p>

            </div>


            {/* ==================================================
               EMPTY WISHLIST
            ================================================== */}

            {wishlistItems.length === 0 ? (

                <EmptyWishlist />

            ) : (


                /* ==================================================
                   WISHLIST PRODUCTS
                ================================================== */

                <div className="wishlist-grid">

                    {wishlistItems.map((item) => (

                        <WishlistItem
                            key={item.id}
                            item={item}
                            addToCart={handleAddToCart}
                            removeFromWishlist={handleRemove}
                        />

                    ))}

                </div>

            )}

        </div>

    );

}


export default Wishlist;