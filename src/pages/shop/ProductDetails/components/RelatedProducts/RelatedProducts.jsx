import React from "react";

import ProductCard from "../../../components/ProductCard/ProductCard";
import productData from "../../../components/ProductGrid/productData";

import "./RelatedProducts.css";

function RelatedProducts({ currentId, category }) {

    const relatedProducts = productData

        .filter(

            (item) =>

                item.category === category &&

                item.id !== currentId

        )

        .slice(0, 4);

    if (relatedProducts.length === 0) {

        return null;

    }

    return (

        <section className="related-products">

            <div className="related-header">

                <h2>

                    Related Products

                </h2>

                <p>

                    You may also like these premium styles.

                </p>

            </div>

            <div className="related-grid">

                {relatedProducts.map((product) => (

                    <ProductCard

                        key={product.id}

                        product={product}

                    />

                ))}

            </div>

        </section>

    );

}

export default RelatedProducts;