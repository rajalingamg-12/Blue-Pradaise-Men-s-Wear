import React, { useState } from "react";

import {
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaFacebookF
} from "react-icons/fa";

import "./RegisterForm.css";


function RegisterForm(){


    const [showPassword,setShowPassword] = useState(false);

    const [showConfirm,setShowConfirm] = useState(false);


    const [formData,setFormData] = useState({

        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:""

    });



    const [terms,setTerms] = useState(false);


    const [errors,setErrors] = useState({});




    const handleChange=(e)=>{


        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });


    };





    const validate=()=>{


        let newErrors={};




        if(!formData.name.trim()){

            newErrors.name="Name is required";

        }



        if(!formData.email.trim()){

            newErrors.email="Email is required";

        }

        else if(
            !/\S+@\S+\.\S+/.test(formData.email)
        ){

            newErrors.email="Enter valid email";

        }




        if(!formData.phone){

            newErrors.phone="Phone number is required";

        }

        else if(formData.phone.length !== 10){

            newErrors.phone="Enter valid phone number";

        }





        if(!formData.password){

            newErrors.password="Password is required";

        }

        else if(formData.password.length < 6){

            newErrors.password=
            "Minimum 6 characters required";

        }




        if(
            formData.password !== 
            formData.confirmPassword
        ){

            newErrors.confirmPassword=
            "Passwords do not match";

        }




        if(!terms){

            newErrors.terms=
            "Accept terms and conditions";

        }





        setErrors(newErrors);


        return Object.keys(newErrors).length===0;


    };






    const handleSubmit=(e)=>{


        e.preventDefault();



        if(validate()){


            console.log(
                "Register Data",
                formData
            );


            // API REGISTER HERE


        }


    };






    return(


        <section className="register-form-section">


            <div className="register-form-box">


                <h1>
                    Create Account
                </h1>



                <p>
                    Register to start your shopping journey
                </p>






                <form onSubmit={handleSubmit}>


                    <div className="input-group">


                        <label>
                            Full Name
                        </label>


                        <input

                            type="text"

                            name="name"

                            placeholder="Enter your name"

                            value={formData.name}

                            onChange={handleChange}

                        />


                        {
                            errors.name &&
                            <small>
                                {errors.name}
                            </small>
                        }


                    </div>







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
                            Phone Number
                        </label>



                        <input

                            type="tel"

                            name="phone"

                            placeholder="Enter phone number"

                            value={formData.phone}

                            onChange={handleChange}

                        />



                        {
                            errors.phone &&
                            <small>
                                {errors.phone}
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

                                placeholder="Create password"

                                value={formData.password}

                                onChange={handleChange}

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









                    <div className="input-group">


                        <label>
                            Confirm Password
                        </label>



                        <div className="password-box">


                            <input

                                type={
                                    showConfirm
                                    ?
                                    "text"
                                    :
                                    "password"
                                }

                                name="confirmPassword"

                                placeholder="Confirm password"

                                value={formData.confirmPassword}

                                onChange={handleChange}

                            />



                            <button

                                type="button"

                                className="password-toggle"

                                onClick={()=>
                                setShowConfirm(!showConfirm)}

                            >

                                {
                                    showConfirm
                                    ?
                                    <FaEyeSlash/>
                                    :
                                    <FaEye/>
                                }


                            </button>



                        </div>




                        {
                            errors.confirmPassword &&
                            <small>
                                {errors.confirmPassword}
                            </small>
                        }




                    </div>








                    <div className="terms-box">


                        <label>


                            <input

                                type="checkbox"

                                checked={terms}

                                onChange={(e)=>
                                setTerms(e.target.checked)}

                            />


                            I agree to Terms & Conditions


                        </label>



                        {
                            errors.terms &&
                            <small>
                                {errors.terms}
                            </small>
                        }



                    </div>








                    <button

                        className="register-btn"

                        type="submit"

                    >

                        Create Account


                    </button>



                </form>









                <div className="divider">

                    <span>
                        OR
                    </span>

                </div>








                <div className="social-login">


                    <button type="button">

                        <FaGoogle/>

                        Google


                    </button>





                    <button type="button">

                        <FaFacebookF/>

                        Facebook


                    </button>



                </div>








                <div className="login-text">


                    Already have an account?


                    <a href="/login">

                        Login

                    </a>


                </div>






            </div>



        </section>


    );


}


export default RegisterForm;