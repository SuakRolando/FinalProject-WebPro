import React, { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48")
      .then((response) => response.json())
      .then((data) => setProducts(data.data.phones));

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //hit TMDB Rest API endpoint to search for a movie
    fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${text}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.data.phones));

    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5 text-darkBlue">
        <h2>Search Apple Products</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control btn-light shadow"
            onChange={handleChange}
            value={text}
            placeholder="eg. iPhone 13..."
          />
        </form>

        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
          {products.map((product) => (
            <ProductsItem key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
