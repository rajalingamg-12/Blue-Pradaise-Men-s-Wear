// import React from "react";

// import { Link } from "react-router-dom";

// import { FaHeartBroken } from "react-icons/fa";

// import "./EmptyWishlist.css";

// function EmptyWishlist() {

//     return (

//         <div className="empty-wishlist">

//             <div className="empty-icon">

//                 <FaHeartBroken />

//             </div>

//             <h2>

//                 Your Wishlist is Empty

//             </h2>

//             <p>

//                 Save your favorite products and they'll appear here.

//             </p>

//             <Link
//                 to="/shop"
//                 className="shop-btn"
//             >

//                 Continue Shopping

//             </Link>

//         </div>

//     );

// }

// export default EmptyWishlist;

import React from "react";
import { Link } from "react-router-dom";
import { FaHeartBroken } from "react-icons/fa";

import "./EmptyWishlist.css";

function EmptyWishlist() {
    return (
        <div className="empty-wishlist">

            <div className="empty-icon">
                <FaHeartBroken />
            </div>

            <h2>
                Your Wishlist is Empty
            </h2>

            <p>
                Save your favorite products and they'll appear here.
            </p>

            <Link
                to="/shop"
                className="shop-btn"
            >
                Continue Shopping
            </Link>

        </div>
    );
}

export default EmptyWishlist;