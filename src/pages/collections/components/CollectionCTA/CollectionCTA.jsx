import React from "react";

import { Link } from "react-router-dom";

import "./CollectionCTA.css";


function CollectionCTA(){


    return(


        <section className="collection-cta">


            <div className="collection-cta-overlay"></div>



            <div className="collection-cta-content">



                <span>
                    BLUE PARADISE
                </span>



                <h2>
                    Find Your Signature Style
                </h2>



                <p>

                    Explore exclusive men's fashion
                    collections designed to match
                    your personality and lifestyle.

                </p>



                <Link

                    to="/shop"

                    className="collection-cta-btn"

                >

                    Shop Now

                </Link>



            </div>



        </section>


    );


}


export default CollectionCTA;