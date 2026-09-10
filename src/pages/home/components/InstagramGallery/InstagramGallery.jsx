import "./InstagramGallery.css";

import galleryData from "./galleryData";

import {
    FaInstagram,
    FaArrowRight
} from "react-icons/fa";

function InstagramGallery() {

    return (

        <section className="instagram">

            <div className="container">

                <div className="section-header">

                    <span>FOLLOW US</span>

                    <h2>Fashion Lookbook</h2>

                    <p>
                        Discover the latest trends and styling inspiration
                        from Blue Paradise Men's Wear.
                    </p>

                </div>

                <div className="gallery-grid">

                    {

                        galleryData.map((item)=>(

                            <div
                                className="gallery-card"
                                key={item.id}
                            >

                                <img
                                    src={item.image}
                                    alt="Blue Paradise"
                                />

                                <div className="gallery-overlay">

                                    <FaInstagram/>

                                    <span>@blue_paradise_menswear___</span>

                                </div>

                            </div>

                        ))

                    }

                </div>

                <div className="gallery-btn">

                    <button>

                        Follow On Instagram

                        <FaArrowRight/>

                    </button>

                </div>

            </div>

        </section>

    );

}

export default InstagramGallery;