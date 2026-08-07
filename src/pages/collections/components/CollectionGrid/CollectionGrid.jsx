import React from "react";

import { Link } from "react-router-dom";

import newArrival from "../../assets/coll1.jpeg";
import formalColl from "../../assets/coll2.jpeg";
import CasualWear from "../../assets/coll3.jpeg";
import WeddingWear from "../../assets/coll4.jpeg";
import HoodyWear from "../../assets/coll5.jpeg";
import AccesWear from "../../assets/coll6.jpeg";

import "./CollectionGrid.css";



function CollectionGrid(){


    const collections=[


        {

            title:"New Arrivals",

            image:newArrival,

            description:
            "Latest styles crafted with modern elegance."

        },


        {

            title:"Formal Collection",

            image:formalColl,

            description:
            "Classic outfits designed for professional confidence."

        },


        {

            title:"Casual Wear",

            image:CasualWear,

            description:
            "Comfortable everyday fashion with premium quality."

        },


        {

            title:"Wedding Collection",

            image:WeddingWear,

            description:
            "Exclusive styles for your special moments."

        },


        {

            title:"Premium Shirts",

            image:HoodyWear,

            description:
            "Elegant shirts for every occasion."

        },


        {

            title:"Luxury Accessories",

            image:AccesWear,

            description:
            "Complete your look with premium accessories."

        }


    ];





    return(



        <section className="collection-grid-section">





            <div className="collection-heading">



                <span>
                    OUR COLLECTIONS
                </span>



                <h2>
                    Choose Your Style
                </h2>



                <p>

                    Discover carefully curated fashion
                    collections designed for the modern man.

                </p>



            </div>









            <div className="collection-grid">



                {

                    collections.map((item,index)=>(



                        <div

                            className="collection-card"

                            key={index}

                        >



                            <img

                                src={item.image}

                                alt={item.title}

                            />




                            <div className="collection-card-overlay">




                                <h3>

                                    {item.title}

                                </h3>




                                <p>

                                    {item.description}

                                </p>




                                <Link

                                    to="/shop"

                                >

                                    Explore

                                </Link>




                            </div>



                        </div>



                    ))

                }




            </div>




        </section>



    );


}



export default CollectionGrid;