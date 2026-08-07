import React, { useState } from "react";
import {
    FaStar,
    FaUserCircle
} from "react-icons/fa";

import "./ProductTabs.css";

function ProductTabs({ product }) {

    const [activeTab, setActiveTab] = useState("description");

    return (

        <section className="product-tabs">

            <div className="tabs-header">

                <button
                    className={activeTab === "description" ? "active" : ""}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>

                <button
                    className={activeTab === "specification" ? "active" : ""}
                    onClick={() => setActiveTab("specification")}
                >
                    Specifications
                </button>

                <button
                    className={activeTab === "reviews" ? "active" : ""}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews
                </button>

            </div>

            <div className="tab-content">

                {activeTab === "description" && (

                    <div>

                        <h3>Product Description</h3>

                        <p>

                            Crafted with premium quality fabric, this {product.name}
                            offers superior comfort, elegant styling, and excellent
                            durability. Perfect for office wear, casual outings,
                            and special occasions.

                        </p>

                        <p>

                            Blue Paradise Men's Wear focuses on premium tailoring,
                            modern fashion, and long-lasting quality to deliver
                            timeless apparel.

                        </p>

                    </div>

                )}

                {activeTab === "specification" && (

                    <div>

                        <h3>Specifications</h3>

                        <table className="spec-table">

                            <tbody>

                                <tr>
                                    <td>Brand</td>
                                    <td>{product.brand}</td>
                                </tr>

                                <tr>
                                    <td>Category</td>
                                    <td>{product.category}</td>
                                </tr>

                                <tr>
                                    <td>Available Sizes</td>
                                    <td>{product.size.join(", ")}</td>
                                </tr>

                                <tr>
                                    <td>Color</td>
                                    <td>{product.color}</td>
                                </tr>

                                <tr>
                                    <td>Material</td>
                                    <td>100% Premium Cotton</td>
                                </tr>

                                <tr>
                                    <td>Fit</td>
                                    <td>Regular Fit</td>
                                </tr>

                                <tr>
                                    <td>Wash Care</td>
                                    <td>Machine Wash</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                )}

                {activeTab === "reviews" && (

                    <div>

                        <h3>Customer Reviews</h3>

                        <div className="review-card">

                            <FaUserCircle className="review-avatar" />

                            <div>

                                <h4>Rahul Kumar</h4>

                                <div className="review-stars">

                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                </div>

                                <p>

                                    Excellent quality and perfect fitting.
                                    Highly recommended!

                                </p>

                            </div>

                        </div>

                        <div className="review-card">

                            <FaUserCircle className="review-avatar" />

                            <div>

                                <h4>Arun Prakash</h4>

                                <div className="review-stars">

                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                </div>

                                <p>

                                    Premium fabric and fast delivery.
                                    Worth every rupee.

                                </p>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </section>

    );

}

export default ProductTabs;