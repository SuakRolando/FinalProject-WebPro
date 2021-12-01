import React from "react";
import "../assets/style.css";

const Header = () => {
  return (
    <header className="bg-darkBlue py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-light">
          <h1 className="display-4 fw-bolder">Apple Products App</h1>
          <p className="lead fw-normal text-white-50 pt-1">
            Find your favorite Apple Products here...
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
