import React from "react";

import LoginBanner from "./components/loginBanner/LoginBanner";
import LoginForm from "./components/loginForm/LoginForm";

import "./Login.css";


function Login(){


    return(

        <main className="login-page">


            <LoginBanner />


            <LoginForm />


        </main>

    );


}


export default Login;