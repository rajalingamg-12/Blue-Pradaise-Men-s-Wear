import "./Testimonials.css";

import testimonials from "./testimonialData";

import { FaStar } from "react-icons/fa";

function Testimonials() {

    return (

        <section className="testimonials">

            <div className="container">

                <div className="section-header">

                    <span>TESTIMONIALS</span>

                    <h2>
                        What Our Customers Say
                    </h2>

                    <p>
                        Thousands of customers trust Blue Paradise Men's Wear
                        for premium quality, exceptional comfort and timeless style.
                    </p>

                </div>

                <div className="testimonial-grid">

                    {

                        testimonials.map((item)=>(

                            <div
                                className="testimonial-card"
                                key={item.id}
                            >

                                <div className="stars">

                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>

                                </div>

                                <p className="review">

                                    "{item.review}"

                                </p>

                                <div className="customer">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div>

                                        <h4>{item.name}</h4>

                                        <span>{item.location}</span>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Testimonials;