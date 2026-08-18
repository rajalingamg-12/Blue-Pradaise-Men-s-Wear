// import "./TrendingCollection.css";
// import trendingProducts from "./trendingData";

// import {
//     FaHeart,
//     FaShoppingBag,
//     FaArrowRight
// } from "react-icons/fa";

// function TrendingCollection() {

//     return (

//         <section className="trending">

//             <div className="container">

//                 <div className="section-header">

//                     <span>TRENDING NOW</span>

//                     <h2>Discover What's Trending</h2>

//                     <p>
//                         Fresh arrivals and customer favourites designed for the modern gentleman.
//                     </p>

//                 </div>

//                 <div className="trending-tabs">

//                     <button className="active">
//                         New Arrivals
//                     </button>

//                     <button>
//                         Best Sellers
//                     </button>

//                     <button>
//                         Premium
//                     </button>

//                     <button>
//                         Limited Edition
//                     </button>

//                 </div>

//                 <div className="trending-grid">

//                     {trendingProducts.map((item)=>(

//                         <div
//                             className="trend-card"
//                             key={item.id}
//                         >

//                             <div className="trend-image">

//                                 <img
//                                     src={item.image}
//                                     alt={item.title}
//                                 />

//                                 <span className="trend-badge">

//                                     {item.category}

//                                 </span>

//                                 <button className="trend-heart">

//                                     <FaHeart/>

//                                 </button>

//                             </div>

//                             <div className="trend-content">

//                                 <h3>{item.title}</h3>

//                                 <span>₹ {item.price}</span>

//                                 <button>

//                                     Add To Cart

//                                     <FaShoppingBag/>

//                                 </button>

//                             </div>

//                         </div>

//                     ))}

//                 </div>

//                 <div className="trend-footer">

//                     <button>

//                         View Complete Collection

//                         <FaArrowRight/>

//                     </button>

//                 </div>

//             </div>

//         </section>

//     );

// }

// export default TrendingCollection;
import "./TrendingCollection.css";
import trendingProducts from "./trendingData";

import {
    FaHeart,
    FaShoppingBag,
    FaArrowRight,
    FaBolt
} from "react-icons/fa";

import { useCart } from "../../../../context/CartContext";
import { useWishlist } from "../../../../context/WishlistContext";

import { useNavigate } from "react-router-dom";


function TrendingCollection() {

    /* ==================================================
       CART
    ================================================== */

    const {
        addToCart
    } = useCart();


    /* ==================================================
       WISHLIST
    ================================================== */

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();


    /* ==================================================
       NAVIGATION
    ================================================== */

    const navigate = useNavigate();


    /* ==================================================
       ADD TO CART
    ================================================== */

    const handleAddToCart = (item) => {

        addToCart(item);

    };


    /* ==================================================
       BUY NOW
    ================================================== */

    const handleBuyNow = (item) => {

        addToCart(item);

        navigate("/checkout");

    };


    /* ==================================================
       WISHLIST
    ================================================== */

    const handleWishlist = (item) => {

        toggleWishlist(item);

    };


    /* ==================================================
       VIEW COLLECTION
    ================================================== */

    const handleViewCollection = () => {

        navigate("/shop");

    };


    return (

        <section className="trending1">

            <div className="container1">


                {/* ==================================================
                   SECTION HEADER
                ================================================== */}

                <div className="section-header1">

                    <span>
                        TRENDING NOW
                    </span>

                    <h2>
                        Discover What's Trending
                    </h2>

                    <p>
                        Fresh arrivals and customer favourites
                        designed for the modern gentleman.
                    </p>

                </div>


                {/* ==================================================
                   TRENDING TABS
                ================================================== */}

                <div className="trending-tabs1">

                    <button className="active1">
                        New Arrivals
                    </button>

                    <button>
                        Best Sellers
                    </button>

                    <button>
                        Premium
                    </button>

                    <button>
                        Limited Edition
                    </button>

                </div>


                {/* ==================================================
                   PRODUCT GRID
                ================================================== */}

                <div className="trending-grid1">

                    {trendingProducts.map((item) => (

                        <div
                            className="trend-card1"
                            key={item.id}
                        >


                            {/* ==================================================
                               IMAGE
                            ================================================== */}

                            <div className="trend-image1">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                />


                                {/* CATEGORY BADGE */}

                                <span className="trend-badge1">

                                    {item.category}

                                </span>


                                {/* ==================================================
                                   WISHLIST
                                ================================================== */}

                                <button
                                    type="button"
                                    className={
                                        isInWishlist(item.id)
                                            ? "trend-heart active1"
                                            : "trend-heart1"
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

                            <div className="trend-content1">

                                <h3>
                                    {item.title}
                                </h3>


                                {/* PRICE */}

                                <span className="trend-price1">
                                    ₹ {item.price}
                                </span>


                                {/* ==================================================
                                   ACTION BUTTONS
                                ================================================== */}

                                <div className="trend-actions1">


                                    {/* ADD TO CART */}

                                    <button
                                        type="button"
                                        className="trend-cart-btn1"
                                        onClick={() =>
                                            handleAddToCart(item)
                                        }
                                    >

                                        <FaShoppingBag />

                                        <span>
                                            Add To Cart
                                        </span>

                                    </button>


                                    {/* BUY NOW */}

                                    <button
                                        type="button"
                                        className="trend-buy-btn1"
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
                   FOOTER BUTTON
                ================================================== */}

                <div className="trend-footer1">

                    <button
                        type="button"
                        onClick={handleViewCollection}
                    >

                        <span>
                            View Complete Collection
                        </span>

                        <FaArrowRight />

                    </button>

                </div>

            </div>

        </section>

    );

}


export default TrendingCollection;