import React from "react";
import "./SecFour.css";
import first from "./images/Group 2.png";
import second from "./images/Group 1.png";
import under from "./images/underline.png";
import three from "./images/MaskGroup.png";
import art from "./images/art3.png";
function SecFour() {
  return (
    <div className="container pt-5">
      <div className="how-works">
        <p>How it works?</p>
        <img src={under} alt="underline" />
      </div>
      <div className="row mt-4 justify-content-evenly">
        <div className="col-sm-5 position-relative">
          <img className="position-relative img1" src={first} alt="" />
          <p className="img1-num">1</p>
        </div>
        <div className="col-sm-5">
          <div className="sec4-cont">
            <h1>Setup your profile & preferences</h1>
            <p>
              Once you create an account, you can start to tell us your likes
              and dislikes so we can tailor the experience just for you.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="col-sm-5 position-relative ">
          <img className="position-relative img2" src={second} alt="" />
          <p className="img2-num">2</p>
        </div>
        <div className="img2-cont col-sm-5">
          <h1>
            Review your
            <br /> custom box
          </h1>
          <p>
            Once we get to know you, we will show you the box we’ve crafted.
            This is your chance to approve it before we ship it to your house.
          </p>
        </div>
      </div>
      <div className="row mt-4 justify-content-end">
        <div className="col-sm-5 position-relative mt-5">
          <img className="position-relative img3" src={three} alt="" />
          <img className="art" alt="" src={art} />
          <p className="img3-num">3</p>
        </div>
        <div className="col-sm-5">
          <div className="img3-cont">
            <h1>Try it on at home</h1>
            <p>
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.{" "}
            </p>
          </div>
        </div>
      </div>
      <button className="sec4-btn">TRY IT FOR YOURSELF &gt;</button>
    </div>
  );
}

export default SecFour;
