import React from "react";

import "./LoginBanner.css";

function LoginBanner(){

    return(

        <section className="login-banner">


            <div className="login-banner-overlay"></div>


            <div className="login-banner-content">


                <h1>
                    Welcome Back
                </h1>


                <h2>
                    Blue Paradise
                </h2>


                <p>
                    Step into a world of premium men's fashion.
                    Discover timeless styles crafted for confidence
                    and elegance.
                </p>


                <div className="login-line"></div>


                <span>
                    Luxury • Style • Confidence
                </span>


            </div>


        </section>

    );

}

export default LoginBanner;