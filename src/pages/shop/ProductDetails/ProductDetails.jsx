import React from "react";
import { useParams } from "react-router-dom";

import productData from "../components/ProductGrid/productData";

import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductTabs from "./components/ProductTabs/ProductTabs";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const product = productData.find(
        (item) => String(item.id) === String(id)
    );

    if (!product) {
        return (
            <div
                style={{
                    padding: "100px 20px",
                    textAlign: "center"
                }}
            >
                <h2>Product Not Found</h2>
            </div>
        );
    }

    return (
        <div className="product-details-page">

            <section className="product-details-container">

                <div className="gallery-area">
                    <ProductGallery product={product} />
                </div>

                <div className="info-area">
                    <ProductInfo product={product} />
                </div>

            </section>

            <ProductTabs product={product} />

            <RelatedProducts
                currentId={product.id}
                category={product.category}
            />

        </div>
    );
}

export default ProductDetails;