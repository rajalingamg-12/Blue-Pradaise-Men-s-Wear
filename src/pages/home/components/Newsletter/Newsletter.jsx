import "./Newsletter.css";

import {
    FaPaperPlane,
    FaEnvelopeOpenText
} from "react-icons/fa";

function Newsletter() {

    return (

        <section className="newsletter">

            <div className="newsletter-overlay"></div>

            <div className="container newsletter-container">

                <div className="newsletter-left">

                    <div className="newsletter-icon">

                        <FaEnvelopeOpenText />

                    </div>

                    <span>JOIN OUR COMMUNITY</span>

                    <h2>

                        Get Exclusive Fashion
                        <br />
                        Updates & Offers

                    </h2>

                    <p>

                        Subscribe to receive new arrivals,
                        seasonal collections, exclusive discounts,
                        styling tips and members-only offers.

                    </p>

                </div>

                <div className="newsletter-right">

                    <div className="newsletter-box">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                        />

                        <button>

                            Subscribe

                            <FaPaperPlane />

                        </button>

                    </div>

                    <small>

                        By subscribing, you agree to receive promotional emails.
                        You can unsubscribe anytime.

                    </small>

                </div>

            </div>

        </section>

    );

}

export default Newsletter;