import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductsDetails from "../components/ProductsDetails";
import "../assets/style.css";

const Details = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(
    () => {
      fetch(`https://api-mobilespecs.azharimm.site/v2/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data.data));
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Navigation />
      <ProductsDetails product={product} />
      <Footer />
    </>
  );
};

export default Details;
