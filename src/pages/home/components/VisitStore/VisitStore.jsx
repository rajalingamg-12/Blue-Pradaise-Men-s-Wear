import "./VisitStore.css";

import storeImage from "../VisitStore/assets/store.jpeg";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaArrowRight
} from "react-icons/fa";

function VisitStore() {

    return (

        <section className="visit-store">

            <div className="container visit-container">

                {/* Left */}

                <div className="visit-image">

                    <img
                        src={storeImage}
                        alt="Blue Paradise Men's Wear Store"
                    />

                    <div className="store-badge">

                        Premium
                        <br />
                        Showroom

                    </div>

                </div>

                {/* Right */}

                <div className="visit-content">

                    <span>VISIT OUR STORE</span>

                    <h2>

                        Experience Premium
                        <br />
                        Men's Fashion In Person

                    </h2>

                    <p>

                        Step into Blue Paradise Men's Wear and discover
                        a curated collection of premium shirts,
                        trousers, blazers, ethnic wear, casual outfits,
                        accessories, and more. Our team is ready to
                        help you find the perfect look.

                    </p>

                    <div className="visit-info">

                        <div className="info-item">

                            <FaMapMarkerAlt />

                            <div>

                                <h4>Address</h4>

                                <p>
                                    Under the Bridge, TVM road,
                                    Parvathipuram,
                                    Nagercoil,
                                    Tamil Nadu - 629003.
                                </p>

                            </div>

                        </div>

                        <div className="info-item">

                            <FaPhoneAlt />

                            <div>

                                <h4>Call Us</h4>

                                <p>+91 7947412725</p>

                            </div>

                        </div>

                        <div className="info-item">

                            <FaEnvelope />

                            <div>

                                <h4>Email</h4>

                                <p>info@blueparadise.com</p>

                            </div>

                        </div>

                        <div className="info-item">

                            <FaClock />

                            <div>

                                <h4>Working Hours</h4>

                                <p>
                                    Mon - Sun : 09:30 AM - 10:00 PM
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="visit-buttons">

                        <button className="primary-btn">

                            Get Directions

                            <FaArrowRight />

                        </button>

                        <button className="secondary-btn">

                            Contact Us

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default VisitStore;