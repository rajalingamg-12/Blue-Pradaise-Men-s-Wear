import React from "react";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
} from "react-icons/fa";

import "./ContactInfo.css";


function ContactInfo() {


    const contactDetails = [

        {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            text: "+91 79474 12725"
        },


        {
            icon: <FaEnvelope />,
            title: "Email Us",
            text: "support@ blueparadise@gmail.com"
        },


        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Store",
            text: "Blue Paradise Fashion Store,Under the Bridege,TVM road,Parvathipuram,Nagercoil,Tamil Nadu."
        },


        {
            icon: <FaClock />,
            title: "Working Hours",
            text: "Mon - Sun : 09:30 AM - 10:00 PM"
        }

    ];



    const socialLinks = [

        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/blue_paradise_menswear___?igsh=MWQzcmZlaXI1emYwdQ==",
            label: "Instagram"
        },


        {
            icon: <FaFacebookF />,
            link: "https://facebook.com",
            label: "Facebook"
        },


        {
            icon: <FaWhatsapp />,
            link: "https://l.instagram.com/?u=https%3A%2F%2Fwhatsapp.com%2Fchannel%2F0029VbCA9GC3rZZTingLRi42&e=AUB4R7VQi_OF_XFvgvnt9i4G38Ih7ZU8EEpycxEAtZ2v5OdUsVTaNzPjLv9yCzGu7vJqqekWezxhB1gBQ0x5OUAY7chw1iNG7IKFGvziCsRVDIsjsHmmx4CkCQvnz3JlnEDYfzzOdVCWoWlWS5L_B-8DvOOBz1NtzrsGs6F3oCM",
            label: "WhatsApp"
        },

    ];




    return (


        <section className="contact-info">



            <div className="contact-info-header">


                <span>
                    GET IN TOUCH
                </span>


                <h2>
                    We Would Love
                    <br />
                    To Hear From You
                </h2>


                <p>
                    Whether you need product details,
                    order support or styling advice,
                    our team is always ready to assist.
                </p>


            </div>





            <div className="contact-cards">


                {
                    contactDetails.map((item, index) => (


                        <div

                            className="contact-card"

                            key={index}

                        >


                            <div className="contact-icon">

                                {item.icon}

                            </div>



                            <div>

                                <h3>
                                    {item.title}
                                </h3>


                                <p>
                                    {item.text}
                                </p>

                            </div>



                        </div>


                    ))
                }


            </div>







            <div className="contact-social">


                {
                    socialLinks.map((item, index) => (


                        <a

                            key={index}

                            href={item.link}

                            target="_blank"

                            rel="noopener noreferrer"

                            aria-label={item.label}

                        >

                            {item.icon}


                        </a>


                    ))
                }


            </div>





        </section>


    );


}


export default ContactInfo;