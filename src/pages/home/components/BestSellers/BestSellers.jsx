// import "./BestSellers.css";
// import bestSellers from "./bestSellerData";

// import {
//     FaHeart,
//     FaShoppingBag,
//     FaStar,
//     FaArrowRight
// } from "react-icons/fa";

// function BestSellers() {

//     return (

//         <section className="best-sellers">

//             <div className="container">

//                 <div className="section-header">

//                     <span>BEST SELLERS</span>

//                     <h2>Most Loved Collection</h2>

//                     <p>
//                         Our customers' favorite styles, crafted with premium quality and timeless elegance.
//                     </p>

//                 </div>

//                 <div className="best-grid">

//                     {bestSellers.map((item) => (

//                         <div
//                             className="best-card"
//                             key={item.id}
//                         >

//                             <div className="best-image">

//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                 />

//                                 <button className="wishlist">

//                                     <FaHeart />

//                                 </button>

//                             </div>

//                             <div className="best-content">

//                                 <p>{item.category}</p>

//                                 <h3>{item.name}</h3>

//                                 <div className="rating">

//                                     {[...Array(item.rating)].map((_, index) => (

//                                         <FaStar key={index} />

//                                     ))}

//                                 </div>

//                                 <div className="price-row">

//                                     <div>

//                                         <span className="price">
//                                             ₹{item.price}
//                                         </span>

//                                         <span className="old-price">
//                                             ₹{item.oldPrice}
//                                         </span>

//                                     </div>

//                                     <button className="cart-btn">

//                                         <FaShoppingBag />

//                                     </button>

//                                 </div>

//                             </div>

//                         </div>

//                     ))}

//                 </div>

//                 <button className="view-btn">

//                     View All Products

//                     <FaArrowRight />

//                 </button>

//             </div>

//         </section>

//     );

// }

// export default BestSellers;

import "./BestSellers.css";
import bestSellers from "./bestSellerData";

import {
    FaHeart,
    FaShoppingBag,
    FaStar,
    FaArrowRight,
    FaBolt
} from "react-icons/fa";

import { useCart } from "../../../../context/CartContext";
import { useWishlist } from "../../../../context/WishlistContext";

import { useNavigate } from "react-router-dom";


function BestSellers() {

    /* ==========================================
       CART
    ========================================== */

    const {
        addToCart
    } = useCart();


    /* ==========================================
       WISHLIST
    ========================================== */

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();


    /* ==========================================
       NAVIGATION
    ========================================== */

    const navigate = useNavigate();


    /* ==========================================
       ADD TO CART
    ========================================== */

    const handleAddToCart = (item) => {

        addToCart(item);

    };


    /* ==========================================
       BUY NOW
    ========================================== */

    const handleBuyNow = (item) => {

        addToCart(item);

        navigate("/checkout");

    };


    /* ==========================================
       WISHLIST
    ========================================== */

    const handleWishlist = (item) => {

        toggleWishlist(item);

    };


    /* ==========================================
       VIEW ALL PRODUCTS
    ========================================== */

    const handleViewProducts = () => {

        navigate("/shop");

    };


    return (

        <section className="best-sellers2">

            <div className="container2">


                {/* ==================================================
                   SECTION HEADER
                ================================================== */}

                <div className="section-header2">

                    <span>
                        BEST SELLERS
                    </span>

                    <h2>
                        Most Loved Collection
                    </h2>

                    <p>
                        Our customers' favorite styles, crafted
                        with premium quality and timeless elegance.
                    </p>

                </div>


                {/* ==================================================
                   PRODUCT GRID
                ================================================== */}

                <div className="best-grid2">

                    {bestSellers.map((item) => (

                        <div
                            className="best-card2"
                            key={item.id}
                        >


                            {/* ==================================================
                               PRODUCT IMAGE
                            ================================================== */}

                            <div className="best-image2">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />


                                {/* ==================================================
                                   WISHLIST BUTTON
                                ================================================== */}

                                <button
                                    type="button"
                                    className={
                                        isInWishlist(item.id)
                                            ? "wishlist active2"
                                            : "wishlist"
                                    }
                                    title={
                                        isInWishlist(item.id)
                                            ? "Remove from Wishlist"
                                            : "Add to Wishlist"
                                    }
                                    onClick={() =>
                                        handleWishlist(item)
                                    }
                                >

                                    <FaHeart />

                                </button>

                            </div>


                            {/* ==================================================
                               PRODUCT CONTENT
                            ================================================== */}

                            <div className="best-content2">


                                {/* CATEGORY */}

                                <p>
                                    {item.category}
                                </p>


                                {/* PRODUCT NAME */}

                                <h3>
                                    {item.name}
                                </h3>


                                {/* ==================================================
                                   RATING
                                ================================================== */}

                                <div className="rating2">

                                    {[...Array(item.rating)].map(
                                        (_, index) => (

                                            <FaStar
                                                key={index}
                                            />

                                        )
                                    )}

                                </div>


                                {/* ==================================================
                                   PRICE
                                ================================================== */}

                                <div className="price-row2">

                                    <div className="price-container2">

                                        <span className="price2">
                                            ₹{item.price}
                                        </span>

                                        {item.oldPrice && (

                                            <span className="old-price2">
                                                ₹{item.oldPrice}
                                            </span>

                                        )}

                                    </div>

                                </div>


                                {/* ==================================================
                                   ACTION BUTTONS
                                ================================================== */}

                                <div className="best-actions2">


                                    {/* ==========================================
                                       ADD TO CART
                                    ========================================== */}

                                    <button
                                        type="button"
                                        className="best-cart-btn2"
                                        onClick={() =>
                                            handleAddToCart(item)
                                        }
                                    >

                                        <FaShoppingBag />

                                        <span>
                                            Add to Cart
                                        </span>

                                    </button>


                                    {/* ==========================================
                                       BUY NOW
                                    ========================================== */}

                                    <button
                                        type="button"
                                        className="best-buy-btn2"
                                        onClick={() =>
                                            handleBuyNow(item)
                                        }
                                    >

                                        <FaBolt />

                                        <span>
                                            Buy Now
                                        </span>

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>


                {/* ==================================================
                   VIEW ALL PRODUCTS
                ================================================== */}

                <button
                    type="button"
                    className="view-btn2"
                    onClick={handleViewProducts}
                >

                    <span>
                        View All Products
                    </span>

                    <FaArrowRight />

                </button>

            </div>

        </section>

    );

}


export default BestSellers;