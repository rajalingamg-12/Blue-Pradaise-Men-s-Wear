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

    const { addToCart } = useCart();

    return (

        <div className="wishlist-page">

            <div className="wishlist-header">

                <h1>My Wishlist</h1>

                <p>
                    Save your favorite products for later.
                </p>

            </div>

            {wishlistItems.length === 0 ? (

                <EmptyWishlist />

            ) : (

                <div className="wishlist-grid">

                    {wishlistItems.map((item) => (

                        <WishlistItem
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            removeFromWishlist={removeFromWishlist}
                        />

                    ))}

                </div>

            )}

        </div>

    );

}

export default Wishlist;