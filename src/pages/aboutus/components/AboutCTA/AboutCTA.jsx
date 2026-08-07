import React from "react";

import { Link } from "react-router-dom";

import "./AboutCTA.css";


function AboutCTA(){


    return(


        <section className="about-cta">



            <div className="about-cta-overlay"></div>





            <div className="about-cta-content">



                <span>
                    BLUE PARADISE
                </span>



                <h2>
                    Discover Your Perfect Style
                </h2>




                <p>

                    Explore our premium men's collections
                    designed to bring confidence,
                    comfort and timeless elegance.

                </p>




                <Link

                    to="/shop"

                    className="cta-btn"

                >

                    Shop Collection

                </Link>



            </div>



        </section>


    );


}


export default AboutCTA;