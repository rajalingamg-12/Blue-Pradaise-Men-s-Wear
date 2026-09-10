import "./PromoBanner.css";
import { FaArrowRight } from "react-icons/fa";

import banner from "../../../../assets/blue-promo.jpeg";

function PromoBanner() {

    return (

        <section className="promo-banner">

            <img
                src={banner}
                alt="Blue Paradise Collection"
                className="promo-image"
            />

            <div className="promo-overlay">

                <div className="promo-content">

                    <span>LIMITED EDITION</span>

                    <h2>
                        Crafted For Every
                        Modern Gentleman
                    </h2>

                    <p>
                        Discover timeless essentials designed with
                        premium fabrics, exceptional craftsmanship,
                        and effortless elegance.
                    </p>

                    <button>

                        Explore Collection

                        <FaArrowRight />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default PromoBanner;