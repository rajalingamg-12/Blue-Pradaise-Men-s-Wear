import "./NewArrival.css";
import products from "./productData";

import {
    FaHeart,
    FaShoppingBag,
    FaEye,
    FaArrowRight
} from "react-icons/fa";

function NewArrival() {

    return (

        <section className="new-arrival">

            <div className="container">

                <div className="section-header">

                    <span>NEW ARRIVALS</span>

                    <h2>
                        Discover The Latest Collection
                    </h2>

                    <p>
                        Premium fashion crafted for modern gentlemen.
                    </p>

                </div>

                <div className="product-grid">

                    {products.map((item)=>(
                        <div
                            className="product-card"
                            key={item.id}
                        >

                            <div className="product-image">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <span className="badge">
                                    {item.badge}
                                </span>

                                <div className="product-icons">

                                    <button>
                                        <FaHeart/>
                                    </button>

                                    <button>
                                        <FaEye/>
                                    </button>

                                    <button>
                                        <FaShoppingBag/>
                                    </button>

                                </div>

                            </div>

                            <div className="product-info">

                                <p>{item.category}</p>

                                <h3>{item.name}</h3>

                                <div className="price">

                                    <span className="new">
                                        ₹{item.price}
                                    </span>

                                    <span className="old">
                                        ₹{item.oldPrice}
                                    </span>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                <button className="explore-btn">

                    Explore Collection

                    <FaArrowRight/>

                </button>

            </div>

        </section>

    );

}

export default NewArrival;