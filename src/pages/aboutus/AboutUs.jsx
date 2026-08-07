import React from "react";


import AboutHero from "../aboutus/components/AboutHero/AboutHero";
import AboutStory from "../aboutus/components/AboutStory/AboutStory";
import AboutValues from "../aboutus/components/AboutValues/AboutValues";
import AboutCTA from "../aboutus/components/AboutCTA/AboutCTA";


import "./AboutUs.css";



function About(){


    return(


        <main className="about-page">


            <AboutHero />


            <AboutStory />


            <AboutValues />


            <AboutCTA />


        </main>


    );


}


export default About;