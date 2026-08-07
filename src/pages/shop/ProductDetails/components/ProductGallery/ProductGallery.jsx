import React, { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ product }) {

    const images = [
        product.image,
        product.hoverImage,
        product.image,
        product.hoverImage
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (

        <div className="product-gallery">

            <div className="thumbnail-list">

                {images.map((img, index) => (

                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={
                            selectedImage === img
                                ? "active-thumbnail"
                                : ""
                        }
                        onClick={() => setSelectedImage(img)}
                    />

                ))}

            </div>

            <div className="main-image-container">

                <img
                    src={selectedImage}
                    alt={product.name}
                    className="main-product-image"
                />

            </div>

        </div>

    );

}

export default ProductGallery;