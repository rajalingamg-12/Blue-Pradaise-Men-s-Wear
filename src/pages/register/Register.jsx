import React from "react";

import RegisterBanner from "../register/components/RegisterBanner/RegisterBanner";
import RegisterForm from "../register/components/RegisterForm/RegisterForm";

import "./Register.css";


function Register(){


    return(

        <main className="register-page">


            <RegisterBanner />


            <RegisterForm />


        </main>

    );


}


export default Register;