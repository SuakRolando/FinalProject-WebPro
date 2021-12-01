import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import "../assets/style.css";

const Home = () => {
  return (
    <div className="bg-fullScreen">
      <Navigation />
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
