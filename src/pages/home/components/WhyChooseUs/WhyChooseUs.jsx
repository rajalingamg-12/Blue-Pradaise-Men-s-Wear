import "./WhyChooseUs.css";
import whyChooseData from "./whyChooseData";

function WhyChooseUs() {

    return (

        <section className="why-section">

            <div className="container">

                <div className="section-header">

                    <span>WHY CHOOSE US</span>

                    <h2>
                        Crafted For Quality.
                        <br />
                        Designed For You.
                    </h2>

                    <p>
                        Blue Paradise Men's Wear combines premium craftsmanship,
                        timeless elegance and exceptional customer service
                        to deliver the finest shopping experience.
                    </p>

                </div>

                <div className="why-grid">

                    {

                        whyChooseData.map((item)=>(

                            <div
                                className="why-card"
                                key={item.id}
                            >

                                <div className="why-icon">

                                    {item.icon}

                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default WhyChooseUs;