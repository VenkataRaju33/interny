import React from "react";
import "./SecTwo.css";
import box from "./images/BOX.png";
const SecTwo = () => {
  return (
    <div className="sec2">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-sm-4 sec2-left">
            <h1 className="sec2-hed">Look good without leaving your house.</h1>
            <p className="sec2-para">
              Upbox is the easiest way to look your best without having to hunt
              for the perfect makeup combination. Our stylists curate the latest
              trends and send them directly to your door every month.
            </p>
            <button className="sec2-btn">SIGN UP &gt;</button>
          </div>
          <img src={box} alt="box" className="col-sm-8 sec2-img" />
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
