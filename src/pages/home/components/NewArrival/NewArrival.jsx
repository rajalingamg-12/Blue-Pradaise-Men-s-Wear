// import "./NewArrival.css";
// import products from "./productData";

// import {
//     FaHeart,
//     FaShoppingBag,
//     FaEye,
//     FaArrowRight,
//     FaBolt
// } from "react-icons/fa";

// function NewArrival() {

//     const handleAddToCart = (item) => {
//         console.log("Added to cart:", item);

//         // Later you can connect this to your Cart Context / Redux
//         alert(`${item.name} added to cart!`);
//     };

//     const handleBuyNow = (item) => {
//         console.log("Buy now:", item);

//         // Later you can navigate to checkout
//         alert(`Proceeding to buy ${item.name}`);
//     };

//     return (

//         <section className="new-arrival">

//             <div className="container">

//                 <div className="section-header">

//                     <span>NEW ARRIVALS</span>

//                     <h2>
//                         Discover The Latest Collection
//                     </h2>

//                     <p>
//                         Premium fashion crafted for modern gentlemen.
//                     </p>

//                 </div>

//                 <div className="product-grid">

//                     {products.map((item) => (

//                         <div
//                             className="product-card"
//                             key={item.id}
//                         >

//                             <div className="product-image">

//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                 />

//                                 <span className="badge">
//                                     {item.badge}
//                                 </span>

//                                 <div className="product-icons">

//                                     <button
//                                         onClick={() => handleAddToCart(item)}
//                                         title="Add to Cart"
//                                     >
//                                         <FaShoppingBag />
//                                     </button>

//                                     <button title="Wishlist">
//                                         <FaHeart />
//                                     </button>

//                                     <button title="Quick View">
//                                         <FaEye />
//                                     </button>

//                                 </div>

//                             </div>

//                             <div className="product-info">

//                                 <p>{item.category}</p>

//                                 <h3>{item.name}</h3>

//                                 <div className="price">

//                                     <span className="new">
//                                         ₹{item.price}
//                                     </span>

//                                     <span className="old">
//                                         ₹{item.oldPrice}
//                                     </span>

//                                 </div>

//                                 {/* ACTION BUTTONS */}

//                                 <div className="product-actions">

//                                     <button
//                                         className="add-cart-btn"
//                                         onClick={() => handleAddToCart(item)}
//                                     >
//                                         <FaShoppingBag />
//                                         Add to Cart
//                                     </button>

//                                     <button
//                                         className="buy-now-btn"
//                                         onClick={() => handleBuyNow(item)}
//                                     >
//                                         <FaBolt />
//                                         Buy Now
//                                     </button>

//                                 </div>

//                             </div>

//                         </div>

//                     ))}

//                 </div>

//                 <button className="explore-btn">

//                     Explore Collection

//                     <FaArrowRight />

//                 </button>

//             </div>

//         </section>

//     );

// }

// export default NewArrival;
import "./NewArrival.css";
import products from "./productData";

import {
    FaHeart,
    FaShoppingBag,
    FaEye,
    FaArrowRight,
    FaBolt
} from "react-icons/fa";

import { useCart } from "../../../../context/CartContext";
import { useWishlist } from "../../../../context/WishlistContext";
import { useNavigate } from "react-router-dom";

function NewArrival() {

    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();

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

        addToWishlist(item);

    };


    /* ==========================================
       QUICK VIEW
    ========================================== */

    const handleQuickView = (item) => {

        console.log("Quick View:", item);

        // You can later navigate to:
        // navigate(`/product/${item.id}`);

    };


    return (

        <section className="new-arrival">

            <div className="container">

                {/* ==========================================
                    SECTION HEADER
                ========================================== */}

                <div className="section-header">

                    <span>NEW ARRIVALS</span>

                    <h2>
                        Discover The Latest Collection
                    </h2>

                    <p>
                        Premium fashion crafted for modern gentlemen.
                    </p>

                </div>


                {/* ==========================================
                    PRODUCT GRID
                ========================================== */}

                <div className="product-grid">

                    {products.map((item) => (

                        <div
                            className="product-card"
                            key={item.id}
                        >

                            {/* ==========================================
                                PRODUCT IMAGE
                            ========================================== */}

                            <div className="product-image">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />


                                {/* BADGE */}

                                {item.badge && (

                                    <span className="badge">
                                        {item.badge}
                                    </span>

                                )}


                                {/* ==========================================
                                    PRODUCT ICONS
                                ========================================== */}

                                <div className="product-icons">

                                    {/* ADD TO CART */}

                                    <button
                                        type="button"
                                        title="Add to Cart"
                                        onClick={() =>
                                            handleAddToCart(item)
                                        }
                                    >

                                        <FaShoppingBag />

                                    </button>


                                    {/* WISHLIST */}

                                    <button
                                        type="button"
                                        title="Add to Wishlist"
                                        onClick={() =>
                                            handleWishlist(item)
                                        }
                                    >

                                        <FaHeart />

                                    </button>


                                    {/* QUICK VIEW */}

                                    <button
                                        type="button"
                                        title="Quick View"
                                        onClick={() =>
                                            handleQuickView(item)
                                        }
                                    >

                                        <FaEye />

                                    </button>

                                </div>

                            </div>


                            {/* ==========================================
                                PRODUCT INFORMATION
                            ========================================== */}

                            <div className="product-info">

                                <p>
                                    {item.category}
                                </p>


                                <h3>
                                    {item.name}
                                </h3>


                                {/* PRICE */}

                                <div className="price">

                                    <span className="new">
                                        ₹{item.price}
                                    </span>

                                    {item.oldPrice && (

                                        <span className="old">
                                            ₹{item.oldPrice}
                                        </span>

                                    )}

                                </div>


                                {/* ==========================================
                                    ACTION BUTTONS
                                ========================================== */}

                                <div className="product-actions">


                                    {/* ADD TO CART */}

                                    <button
                                        type="button"
                                        className="add-cart-btn"
                                        onClick={() =>
                                            handleAddToCart(item)
                                        }
                                    >

                                        <FaShoppingBag />

                                        <span>
                                            Add to Cart
                                        </span>

                                    </button>


                                    {/* BUY NOW */}

                                    <button
                                        type="button"
                                        className="buy-now-btn"
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


                {/* ==========================================
                    EXPLORE COLLECTION
                ========================================== */}

                <button
                    type="button"
                    className="explore-btn"
                    onClick={() => navigate("/collections")}
                >

                    Explore Collection

                    <FaArrowRight />

                </button>

            </div>

        </section>

    );

}

export default NewArrival;