import React, { useState } from "react";

import "./BillingForm.css";

function BillingForm() {

    const [formData, setFormData] = useState({

        firstName: "",

        lastName: "",

        email: "",

        phone: "",

        country: "India",

        state: "",

        city: "",

        zip: "",

        address: ""

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value

        }));

    };

    return (

        <div className="billing-form">

            <h2>

                Billing Details

            </h2>

            <div className="billing-grid">

                <div className="form-group">

                    <label>First Name</label>

                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                    />

                </div>

                <div className="form-group">

                    <label>Last Name</label>

                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                    />

                </div>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@gmail.com"
                    />

                </div>

                <div className="form-group">

                    <label>Phone</label>

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                    />

                </div>

                <div className="form-group">

                    <label>Country</label>

                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>State</label>

                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>City</label>

                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>ZIP Code</label>

                    <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <div className="form-group">

                <label>Address</label>

                <textarea
                    rows="4"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your full address..."
                />

            </div>

        </div>

    );

}

export default BillingForm;