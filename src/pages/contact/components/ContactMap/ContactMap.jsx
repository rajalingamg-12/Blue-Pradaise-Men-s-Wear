import React from "react";

import "./ContactMap.css";


function ContactMap(){


    return(


        <section className="contact-map-section">



            <div className="map-header">


                <span>
                    FIND US
                </span>


                <h2>
                    Visit Our Store
                </h2>


                <p>

                    Experience premium men's fashion
                    collections at our store.

                </p>


            </div>






            <div className="map-container">


                <iframe

                    title="Blue Paradise Store Location"

                    src="https://www.google.com/maps/embed?pb=https://maps.app.goo.gl/TZRUjvtCbiBXgPRA9"

                    loading="lazy"

                    allowFullScreen

                    referrerPolicy="no-referrer-when-downgrade"

                ></iframe>



            </div>




        </section>


    );


}


export default ContactMap;