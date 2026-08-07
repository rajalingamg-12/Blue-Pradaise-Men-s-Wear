import "./BestSellers.css";
import bestSellers from "./bestSellerData";

import {
    FaHeart,
    FaShoppingBag,
    FaStar,
    FaArrowRight
} from "react-icons/fa";

function BestSellers() {

    return (

        <section className="best-sellers">

            <div className="container">

                <div className="section-header">

                    <span>BEST SELLERS</span>

                    <h2>Most Loved Collection</h2>

                    <p>
                        Our customers' favorite styles, crafted with premium quality and timeless elegance.
                    </p>

                </div>

                <div className="best-grid">

                    {bestSellers.map((item) => (

                        <div
                            className="best-card"
                            key={item.id}
                        >

                            <div className="best-image">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <button className="wishlist">

                                    <FaHeart />

                                </button>

                            </div>

                            <div className="best-content">

                                <p>{item.category}</p>

                                <h3>{item.name}</h3>

                                <div className="rating">

                                    {[...Array(item.rating)].map((_, index) => (

                                        <FaStar key={index} />

                                    ))}

                                </div>

                                <div className="price-row">

                                    <div>

                                        <span className="price">
                                            ₹{item.price}
                                        </span>

                                        <span className="old-price">
                                            ₹{item.oldPrice}
                                        </span>

                                    </div>

                                    <button className="cart-btn">

                                        <FaShoppingBag />

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                <button className="view-btn">

                    View All Products

                    <FaArrowRight />

                </button>

            </div>

        </section>

    );

}

export default BestSellers;