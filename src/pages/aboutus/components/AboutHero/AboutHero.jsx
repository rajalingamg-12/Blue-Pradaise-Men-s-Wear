import React from "react";

import { Link } from "react-router-dom";

import "./AboutHero.css";


function AboutHero(){


    return(


        <section className="about-hero">


            <div className="about-hero-overlay"></div>




            <div className="about-hero-content">



                <span>
                    ABOUT BLUE PARADISE
                </span>



                <h1>

                    Redefining Men's Fashion
                    <br />
                    With Timeless Elegance

                </h1>




                <p>

                    Premium clothing crafted for
                    confidence, comfort and style.
                    Discover fashion that defines
                    your personality.

                </p>




                <Link

                    to="/shop"

                    className="about-hero-btn"

                >

                    Explore Collection

                </Link>



            </div>



        </section>


    );


}


export default AboutHero;