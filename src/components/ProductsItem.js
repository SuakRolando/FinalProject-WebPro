import React from "react";
import { Link } from "react-router-dom";

const ProductsItems = (props) => {
  return (
    <div className="col mt-4 mb-5">
      <div className="card h-100 shadow">
        <h5 className="fw-bolder text-center fs-4 pt-4 pb-3 px-3">
          {props.product.phone_name}
        </h5>
        <img
          className="card-img-top px-4"
          src={props.product.image}
          alt={props.product.phone_name}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-normal">{props.product.brand} Products</h5>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link
              className="btn btn-outline-dark shadow"
              to={`/details/${props.product.slug}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
