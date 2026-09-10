import "./Footer.css";
import logo from "../../assets/logo-blue.jpeg";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowUp
} from "react-icons/fa";

function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (

        <>
            <footer className="footer">

                <div className="container">

                    <div className="footer-grid">

                        {/* Company */}

                        <div className="footer-about">

                            <img
                                src={logo}
                                alt="Blue Paradise"
                            />

                            <h3>Blue Paradise</h3>

                            <p>
                                Premium Men's Wear crafted for confidence,
                                elegance and everyday comfort.
                                Experience luxury fashion with timeless style.
                            </p>

                            <div className="social-links">

                                <a href="/">
                                    <FaFacebookF />
                                </a>

                                <a href="/">
                                    <FaInstagram />
                                </a>

                                <a href="/">
                                    <FaLinkedinIn />
                                </a>

                                <a href="/">
                                    <FaYoutube />
                                </a>

                            </div>

                        </div>

                        {/* Shop */}

                        <div>

                            <h4>Shop</h4>

                            <ul>

                                <li>Shirts</li>

                                <li>T-Shirts</li>

                                <li>Jeans</li>

                                <li>Trousers</li>

                                <li>Blazers</li>

                                <li>Accessories</li>

                            </ul>

                        </div>

                        {/* Company */}

                        <div>

                            <h4>Company</h4>

                            <ul>

                                <li>About Us</li>

                                <li>New Arrivals</li>

                                <li>Offers</li>

                                <li>Privacy Policy</li>

                                <li>Terms & Conditions</li>

                                <li>Contact Us</li>

                            </ul>

                        </div>

                        {/* Contact */}

                        <div>

                            <h4>Contact</h4>

                            <ul className="contact-list">

                                <li>

                                    <FaPhoneAlt />

                                    +91 79426 79764

                                </li>

                                <li>

                                    <FaEnvelope />

                                    info@blueparadise.com

                                </li>

                                <li>

                                    <FaMapMarkerAlt />

                                    Under the Bridge ,TVM Road,Parvathipuram,Nagercoil,
                                    Tamil Nadu

                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="footer-bottom">

                        <p>

                            © 2018 Blue Paradise Men's Wear.
                            All Rights Reserved.

                        </p>

                        <button
                            onClick={scrollTop}
                            className="top-btn"
                        >

                            <FaArrowUp />

                        </button>

                    </div>

                </div>

            </footer>

        </>

    );

}

export default Footer;