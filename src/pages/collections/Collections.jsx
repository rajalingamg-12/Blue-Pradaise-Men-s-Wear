import React from "react";

import CollectionHero from "../collections/components/CollectionHero/CollectionHero";
import CollectionGrid from "../collections/components/CollectionGrid/CollectionGrid";
import CollectionCTA from "../collections/components/CollectionCTA/CollectionCTA";

import "./Collections.css";


function Collections(){


    return(

        <main className="collections-page">


            <CollectionHero />


            <CollectionGrid />


            <CollectionCTA />


        </main>

    );


}


export default Collections;