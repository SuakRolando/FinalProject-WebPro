import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../assets/style.css";

const About = () => {
  return (
    <div className="bg-fullScreen fixed-bottom">
      <Navigation />

      <div className="container my-5 text-darkBlue">
        <h1>About this Application</h1>
        <h5 className="fw-light mb-5">
          This application is made to figure out for products from Apple that
          are sold on the market
        </h5>
        <h1>About me</h1>
        <h5 className="fw-normal">
          Full Name :<span className="fw-light"> Suak, Rolando Hance</span>
        </h5>
        <h5 className="fw-normal">
          NIM :<span className="fw-light"> 105011910053</span>
        </h5>
        <h5 className="fw-normal">
          Program Study :<span className="fw-light"> Information System</span>
        </h5>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default About;
