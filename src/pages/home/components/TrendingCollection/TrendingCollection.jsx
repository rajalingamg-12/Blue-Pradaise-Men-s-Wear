import "./TrendingCollection.css";
import trendingProducts from "./trendingData";

import {
    FaHeart,
    FaShoppingBag,
    FaArrowRight
} from "react-icons/fa";

function TrendingCollection() {

    return (

        <section className="trending">

            <div className="container">

                <div className="section-header">

                    <span>TRENDING NOW</span>

                    <h2>Discover What's Trending</h2>

                    <p>
                        Fresh arrivals and customer favourites designed for the modern gentleman.
                    </p>

                </div>

                <div className="trending-tabs">

                    <button className="active">
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

                <div className="trending-grid">

                    {trendingProducts.map((item)=>(

                        <div
                            className="trend-card"
                            key={item.id}
                        >

                            <div className="trend-image">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <span className="trend-badge">

                                    {item.category}

                                </span>

                                <button className="trend-heart">

                                    <FaHeart/>

                                </button>

                            </div>

                            <div className="trend-content">

                                <h3>{item.title}</h3>

                                <span>₹ {item.price}</span>

                                <button>

                                    Add To Cart

                                    <FaShoppingBag/>

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                <div className="trend-footer">

                    <button>

                        View Complete Collection

                        <FaArrowRight/>

                    </button>

                </div>

            </div>

        </section>

    );

}

export default TrendingCollection;