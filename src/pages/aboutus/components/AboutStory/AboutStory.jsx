import React from "react";

import "./AboutStory.css";

import aboutImage from "../../assets/logo-blue.jpeg";


function AboutStory(){


    return(


        <section className="about-story">



            <div className="about-story-image">
<img

    src={aboutImage}

    alt="Blue Paradise Fashion"

/>


            </div>





            <div className="about-story-content">



                <span>
                    OUR STORY
                </span>




                <h2>

                    Crafting Confidence
                    Through Fashion

                </h2>




                <p>

                    Blue Paradise was created with a vision
                    to redefine men's fashion by combining
                    premium quality, modern designs and
                    timeless elegance.

                </p>




                <p>

                    Every outfit we create reflects
                    confidence, individuality and the
                    lifestyle of today's modern man.
                    From classic essentials to contemporary
                    styles, we bring fashion that feels
                    effortless and unique.

                </p>





                <div className="story-stats">



                    <div>

                        <h3>
                            10+
                        </h3>

                        <span>
                            Years Experience
                        </span>

                    </div>





                    <div>

                        <h3>
                            5000+
                        </h3>

                        <span>
                            Happy Customers
                        </span>

                    </div>





                    <div>

                        <h3>
                            100%
                        </h3>

                        <span>
                            Quality Focus
                        </span>

                    </div>



                </div>



            </div>




        </section>


    );


}


export default AboutStory;