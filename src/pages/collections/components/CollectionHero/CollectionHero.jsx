import React from "react";

import { Link } from "react-router-dom";

import "./CollectionHero.css";


function CollectionHero(){


    return(


        <section className="collection-hero">


            <div className="collection-hero-overlay"></div>



            <div className="collection-hero-content">



                <span>
                    BLUE PARADISE COLLECTIONS
                </span>



                <h1>

                    Discover Premium
                    <br />
                    Men's Fashion

                </h1>



                <p>

                    Explore our exclusive collections
                    crafted for every occasion with
                    timeless elegance and modern style.

                </p>




                <Link

                    to="/shop"

                    className="collection-btn"

                >

                    Explore Collection

                </Link>



            </div>



        </section>


    );


}


export default CollectionHero;