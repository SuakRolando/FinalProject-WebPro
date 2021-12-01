import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const ProductsDetails = (props) => {
  return (
    <section className="pt-2 pb-5 mb-5">
      <div className="container px-4 px-lg-5 my-5 shadow rounded">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-5">
            <img
              className="card-img-top my-4"
              src={props.product.thumbnail}
              alt={props.product.phone_name}
            />
          </div>
          <div className="col-md-6 text-darkBlue">
            <h1 className="display-5 fw-bolder">{props.product.phone_name}</h1>
            <div className="fs-5 mb-5">
              <span>Os: {props.product.os}</span>
            </div>
            <p className="lead">Storage: {props.product.storage}</p>
            <p className="lead">Dimension: {props.product.dimension}</p>
            <p className="lead">{props.product.release_date}</p>

            <div className="d-flex">
              <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
