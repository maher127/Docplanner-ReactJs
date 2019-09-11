import React from "react";
import star from "./star.png";
function Slogan() {
  return (
    <div className="slogan d-flex justify-content-center flex-column">
      <img src={star} alt="star" className="star align-self-center" />
      <h1 className="slogan-text text-center mb-0">
        Making the healthcare experience more human
      </h1>
    </div>
  );
}
export default Slogan;
