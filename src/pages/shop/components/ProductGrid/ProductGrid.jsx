import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <div className="no-products">
          No products found.
        </div>
      )}
    </div>
  );
}

export default ProductGrid;