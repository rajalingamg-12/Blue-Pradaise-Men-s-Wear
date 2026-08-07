import React, { useState } from "react";

import "./ContactForm.css";


function ContactForm(){


    const [formData,setFormData] = useState({

        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""

    });



    const [errors,setErrors] = useState({});

    const [success,setSuccess] = useState("");





    const handleChange=(e)=>{


        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });


    };







    const validate=()=>{


        let newErrors={};




        if(!formData.name){

            newErrors.name="Name is required";

        }



        if(!formData.email){

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





        if(!formData.message){

            newErrors.message="Message is required";

        }





        setErrors(newErrors);


        return Object.keys(newErrors).length===0;


    };








    const handleSubmit=(e)=>{


        e.preventDefault();




        if(validate()){


            console.log(
                "Contact Data",
                formData
            );



            setSuccess(
                "Thank you! We will contact you soon."
            );



            setFormData({

                name:"",
                email:"",
                phone:"",
                subject:"",
                message:""

            });


        }


    };







    return(


        <section className="contact-form-section">



            <div className="contact-form-box">


                <span>
                    SEND MESSAGE
                </span>


                <h2>
                    Get In Touch
                </h2>




                {
                    success &&

                    <div className="success-message">

                        {success}

                    </div>

                }






                <form onSubmit={handleSubmit}>




                    <div className="form-row">



                        <div className="form-group">


                            <label>
                                Name
                            </label>


                            <input

                                type="text"

                                name="name"

                                value={formData.name}

                                onChange={handleChange}

                                placeholder="Your name"

                            />



                            {
                                errors.name &&

                                <small>
                                    {errors.name}
                                </small>

                            }


                        </div>





                        <div className="form-group">


                            <label>
                                Email
                            </label>


                            <input

                                type="email"

                                name="email"

                                value={formData.email}

                                onChange={handleChange}

                                placeholder="Your email"

                            />


                            {
                                errors.email &&

                                <small>
                                    {errors.email}
                                </small>

                            }


                        </div>



                    </div>







                    <div className="form-row">



                        <div className="form-group">


                            <label>
                                Phone
                            </label>


                            <input

                                type="text"

                                name="phone"

                                value={formData.phone}

                                onChange={handleChange}

                                placeholder="Phone number"

                            />


                            {
                                errors.phone &&

                                <small>
                                    {errors.phone}
                                </small>

                            }


                        </div>






                        <div className="form-group">


                            <label>
                                Subject
                            </label>


                            <input

                                type="text"

                                name="subject"

                                value={formData.subject}

                                onChange={handleChange}

                                placeholder="Subject"

                            />


                        </div>



                    </div>







                    <div className="form-group">


                        <label>
                            Message
                        </label>


                        <textarea

                            name="message"

                            value={formData.message}

                            onChange={handleChange}

                            placeholder="Write your message"

                            rows="5"

                        />


                        {
                            errors.message &&

                            <small>
                                {errors.message}
                            </small>

                        }


                    </div>






                    <button

                        type="submit"

                        className="contact-submit-btn"

                    >

                        Send Message

                    </button>





                </form>




            </div>



        </section>


    );


}


export default ContactForm;