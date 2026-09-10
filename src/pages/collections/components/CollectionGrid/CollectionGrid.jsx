import React from "react";

import { Link } from "react-router-dom";

import newArrival from "../../assets/bluesh1.jpeg";
import tshirtColl from "../../assets/bluesh2.jpeg";
import CasualshortsWear from "../../assets/bluesh3.jpeg";
import BottomWear from "../../assets/bluesh4.jpeg";
import FootWear from "../../assets/bluesh5.jpeg";
import AccesWear from "../../assets/bluesh6.jpeg";

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

            title:"T-Shirts Collection",

            image:tshirtColl,

            description:
            "Classic outfits designed for professional confidence."

        },


        {

            title:"Casual Shorts Wear",

            image:CasualshortsWear,

            description:
            "Comfortable everyday fashion with premium quality."

        },


        {

            title:"Pants Collection",

            image:BottomWear,

            description:
            "Exclusive styles for your special moments."

        },


        {

            title:"Premium Socks & Footwear",

            image:FootWear,

            description:
            "Elegant socks for every occasion."

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