import "./FeatureStrip.css";
import Marquee from "react-fast-marquee";

import {
    FaShippingFast,
    FaUndoAlt,
    FaShieldAlt,
    FaHeadset
} from "react-icons/fa";

function FeatureStrip() {

    const features = [
        {
            icon: <FaShippingFast />,
            title: "Free Shipping",
            text: "On Orders Above ₹999"
        },
        {
            icon: <FaUndoAlt />,
            title: "Easy Returns",
            text: "7 Days Return Policy"
        },
        {
            icon: <FaShieldAlt />,
            title: "Secure Payment",
            text: "100% Safe Checkout"
        },
        {
            icon: <FaHeadset />,
            title: "Premium Support",
            text: "Mon - Sun | 09.30AM - 10.00PM"
        }
    ];

    return (

        <section className="feature-strip">

            <Marquee
                speed={45}
                gradient={false}
                pauseOnHover={true}
            >

                {features.map((item, index) => (

                    <div
                        className="feature-card"
                        key={index}
                    >

                        <div className="feature-icon">

                            {item.icon}

                        </div>

                        <div>

                            <h4>{item.title}</h4>

                            <p>{item.text}</p>

                        </div>

                    </div>

                ))}

            </Marquee>

        </section>

    );

}

export default FeatureStrip;