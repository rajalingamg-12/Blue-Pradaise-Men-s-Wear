import React, { useState } from "react";

import {
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaFacebookF
} from "react-icons/fa";

import "./LoginForm.css";


function LoginForm(){


    const [showPassword, setShowPassword] = useState(false);


    const [rememberMe, setRememberMe] = useState(false);


    const [formData, setFormData] = useState({

        email:"",
        password:""

    });



    const [errors, setErrors] = useState({});



    const handleChange = (e)=>{

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };




    const validate = ()=>{


        let newErrors = {};



        if(!formData.email.trim()){

            newErrors.email = "Email is required";

        }

        else if(
            !/\S+@\S+\.\S+/.test(formData.email)
        ){

            newErrors.email = "Enter valid email";

        }



        if(!formData.password){

            newErrors.password = "Password is required";

        }

        else if(formData.password.length < 6){

            newErrors.password =
            "Password must contain minimum 6 characters";

        }



        setErrors(newErrors);


        return Object.keys(newErrors).length === 0;


    };





    const handleSubmit = (e)=>{


        e.preventDefault();



        if(validate()){


            const loginData = {

                ...formData,

                rememberMe

            };


            console.log("Login Data",loginData);


            // API LOGIN HERE


        }


    };




    return(


        <section className="login-form-section">


            <div className="login-form-box">


                <h1>
                    Welcome Back!
                </h1>



                <p>
                    Login to continue shopping
                </p>





                <form onSubmit={handleSubmit}>



                    <div className="input-group">


                        <label>
                            Email Address
                        </label>



                        <input

                            type="email"

                            name="email"

                            placeholder="Enter your email"

                            value={formData.email}

                            onChange={handleChange}

                            required

                        />



                        {
                            errors.email &&
                            <small>
                                {errors.email}
                            </small>
                        }



                    </div>







                    <div className="input-group">


                        <label>
                            Password
                        </label>




                        <div className="password-box">


                            <input

                                type={
                                    showPassword
                                    ?
                                    "text"
                                    :
                                    "password"
                                }

                                name="password"

                                placeholder="Enter password"

                                value={formData.password}

                                onChange={handleChange}

                                required

                            />



                            <button

                                type="button"

                                className="password-toggle"

                                onClick={()=>
                                setShowPassword(!showPassword)}

                            >


                                {
                                    showPassword
                                    ?
                                    <FaEyeSlash/>
                                    :
                                    <FaEye/>
                                }


                            </button>



                        </div>





                        {
                            errors.password &&
                            <small>
                                {errors.password}
                            </small>
                        }



                    </div>







                    <div className="login-options">



                        <label>


                            <input

                                type="checkbox"

                                checked={rememberMe}

                                onChange={(e)=>
                                setRememberMe(e.target.checked)}

                            />


                            Remember Me


                        </label>





                        <a href="/forgot-password">

                            Forgot Password?

                        </a>




                    </div>







                    <button

                        className="login-btn"

                        type="submit"

                    >

                        Login

                    </button>



                </form>









                <div className="divider">

                    <span>
                        OR
                    </span>

                </div>









                <div className="social-login">



                    <button

                        type="button"

                        className="google-btn"

                    >

                        <FaGoogle/>

                        Google


                    </button>







                    <button

                        type="button"

                        className="facebook-btn"

                    >

                        <FaFacebookF/>

                        Facebook


                    </button>




                </div>








                <div className="register-text">


                    Don't have an account?



                    <a href="/register">

                        Register

                    </a>



                </div>





            </div>



        </section>


    );


}


export default LoginForm;