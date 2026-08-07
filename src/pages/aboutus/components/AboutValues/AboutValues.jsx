import React from "react";

import {
    FaGem,
    FaTshirt,
    FaHeart,
    FaShippingFast
} from "react-icons/fa";

import "./AboutValues.css";


function AboutValues(){


    const values=[


        {
            icon:<FaGem/>,
            title:"Premium Quality",
            text:
            "We focus on high-quality fabrics and excellent craftsmanship to deliver premium fashion."
        },


        {
            icon:<FaTshirt/>,
            title:"Modern Designs",
            text:
            "Our collections combine timeless styles with modern trends for today's lifestyle."
        },


        {
            icon:<FaHeart/>,
            title:"Customer First",
            text:
            "Every experience is designed around customer satisfaction and trust."
        },


        {
            icon:<FaShippingFast/>,
            title:"Fast Delivery",
            text:
            "Reliable delivery service ensures your favourite styles reach you safely."
        }


    ];




    return(


        <section className="about-values">



            <div className="values-header">


                <span>
                    WHY BLUE PARADISE
                </span>


                <h2>
                    Our Core Values
                </h2>


                <p>
                    More than fashion, we create confidence,
                    comfort and a premium shopping experience.
                </p>


            </div>





            <div className="values-grid">



                {
                    values.map((item,index)=>(



                        <div

                            className="value-card"

                            key={index}

                        >



                            <div className="value-icon">

                                {item.icon}

                            </div>



                            <h3>

                                {item.title}

                            </h3>




                            <p>

                                {item.text}

                            </p>



                        </div>



                    ))
                }



            </div>




        </section>


    );


}


export default AboutValues;