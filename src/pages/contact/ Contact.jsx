import React from "react";


import ContactHero from "../contact/components/ContactHero/ContactHero";
import ContactInfo from "../contact/components/ContactInfo/ContactInfo";
import ContactForm from "../contact/components/ContactForm/ContactForm";
import ContactMap from "../contact/components/ContactMap/ContactMap";


import "./Contact.css";



function Contact(){


    return(


        <main className="contact-page">


            <ContactHero />


            <section className="contact-wrapper">


                <ContactInfo />


                <ContactForm />


            </section>



            <ContactMap />



        </main>


    );


}


export default Contact;