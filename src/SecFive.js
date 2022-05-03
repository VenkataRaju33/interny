import React from "react";
import "./SecFive.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
const SecFive = () => {
  return (
    <div>
      <div className="sec5">
        <div className="container-fluid">
          <p className="social">Social Posts</p>
          <div className="plex">
            <div className="one">
              <img src={img1} alt="" />
              <p>How to rock the lip look that turns heads</p>
            </div>
            <div className="two">
              <img src={img2} alt="" />
              <p>Find the perfect shade for the season</p>
            </div>
            <div className="three">
              <img src={img3} alt="" />
              <p>The 5 eye shadow secrets you never knew</p>
            </div>
            <div className="four">
              <img src={img4} alt="" />
              <p>The pro-tips for at home hair dying</p>
            </div>
          </div>
        </div>
        <button className="sec5-btn">FOLLOW US ON INSTAGRAM</button>
      </div>
    </div>
  );
};

export default SecFive;
