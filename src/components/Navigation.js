import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
      <div className="container pe-4 ">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i
            className="bi bi-apple pe-3 text-darkBlue"
            style={{ fontSize: "2rem" }}
          ></i>
          <span className="text-darkBlue">Apple Products App</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-2 mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <span className="text-darkBlue">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <span className="text-darkBlue">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
