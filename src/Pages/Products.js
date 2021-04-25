import React from "react";
import "../Components/Products/Products.css";
import ProductBanner from "../Components/Products/ProductBanners";
import ProductsList from "../Components/Products/Products";

function Products() {
  return (
    <div id="products">
      <ProductBanner />
      <ProductsList />
    </div>
  );
}

export default Products;
