import "./BrandStory.css";

import brandImage from "../BrandStory/assets/logo-blue.jpeg";

import { FaArrowRight } from "react-icons/fa";

function BrandStory() {

    return (

        <section className="brand-story">

            <div className="container brand-container">

                <div className="brand-image">

                    <img
                        src={brandImage}
                        alt="Blue Paradise Men's Wear"
                    />

                    <div className="experience-card">

                        <h2>3+</h2>

                        <p>Years of Excellence</p>

                    </div>

                </div>

                <div className="brand-content">

                    <span>OUR STORY</span>

                    <h2>

                        Where Style Meets
                        <br />
                        Confidence

                    </h2>

                    <p>

                        At Blue Paradise Men's Wear, we believe that
                        great style begins with exceptional quality.
                        Every collection is carefully selected to
                        combine comfort, elegance, and modern fashion
                        for today's gentleman.

                    </p>

                    <p>

                        From casual everyday essentials to premium
                        occasion wear, our mission is to help every
                        customer look confident and feel their best.

                    </p>

                    <div className="brand-stats">

                        <div>

                            <h3>2K+</h3>

                            <span>Happy Customers</span>

                        </div>

                        <div>

                            <h3>500+</h3>

                            <span>Premium Styles</span>

                        </div>

                        <div>

                            <h3>4.9★</h3>

                            <span>Customer Rating</span>

                        </div>

                    </div>

                    <button>

                        Discover More

                        <FaArrowRight />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default BrandStory;