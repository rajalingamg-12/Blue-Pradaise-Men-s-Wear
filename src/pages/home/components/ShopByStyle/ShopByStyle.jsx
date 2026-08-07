import "./ShopByStyle.css";
import styles from "./styleData";

import { FaArrowRight } from "react-icons/fa";

function ShopByStyle() {

    return (

        <section className="shop-style">

            <div className="container">

                <div className="section-header">

                    <span>SHOP BY STYLE</span>

                    <h2>
                        Dress For Every Occasion
                    </h2>

                    <p>
                        Curated collections designed for every moment of your lifestyle.
                    </p>

                </div>

                <div className="style-grid">

                    {styles.map((item)=>(

                        <div
                            className="style-card"
                            key={item.id}
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="style-overlay">

                                <h3>{item.title}</h3>

                                <p>{item.subtitle}</p>

                                <button>

                                    Explore

                                    <FaArrowRight/>

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default ShopByStyle;