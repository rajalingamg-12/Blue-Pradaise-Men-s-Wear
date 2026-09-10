import "./Hero.css";
import heroBanner from "../../../../assets/blue18.jpeg";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
    return (
        <section className="hero">

            {/* Background Image */}
            <div className="hero-image">
                <img
                    src={heroBanner}
                    alt="Blue Paradise Men's Wear"
                />
            </div>

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Hero Content */}
            <div className="hero-content">

                <span className="hero-tag">
                    BLUE PARADISE MEN'S WEAR
                </span>

                <h1>
                    Elevate Every
                    <br />
                    Moment With Style
                </h1>

                <p>
                    Premium menswear crafted for confidence,
                    comfort, and timeless elegance.
                </p>

                <button className="hero-btn">
                    Explore Collection
                    <FaArrowRight />
                </button>

            </div>


        </section>
    );
}

export default Hero;