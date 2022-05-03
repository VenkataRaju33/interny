import React from "react";
import "./SecThree.css";
import under from "./images/underline.png";
import box1 from "./images/box1.png";
import box2 from "./images/box2.png";
function SecThree() {
  return (
    <div>
      <div className="pick-plan">
        <p>Pick your plan</p>
        <img src={under} alt="underline" className="under-img" />
      </div>

      <div className="container mt-5 ">
        <div className="row justify-content-evenly">
          <div className="col-sm-5 ">
            <div className="sec3-left">
              <img src={box1} alt="box1" />
              <div className="sec3-left-matt">
                <p>Monthly</p>
                <span>$18/mo</span>
                <br />
                <button>FIND YOUR BOX</button>
              </div>
            </div>
          </div>
          <div className="col-sm-5 ">
            <div className="sec3-right">
              <img src={box2} alt="box2" />
              <div className="sec3-right-matt">
                <p>Monthly</p>
                <span>$15/mo</span>
                <br />
                <button>FIND YOUR BOX</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="sec3-foot">
        Your plan auto-renews at the end of 30 days from the 1st day you
        signed-up.
      </p>
    </div>
  );
}

export default SecThree;
