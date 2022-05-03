import React from "react";
import "./Footer.css";
import logo from "./images/Logo.png";
import ig from "./images/ig.png";
import fb from "./images/fb.png";
import tw from "./images/tw.png";
import sc from "./images/sc.png";
const footer = () => {
  return (
    <div className="container-fluid">
      <div className="foot">
        <div className="foot-media">
          <div className="foot-logo">
            <img src={logo} alt="" />
            <span>UPBOX</span>
          </div>
          <div className="social-media">
            <img src={ig} alt="" />
            <img src={fb} alt="" />
            <img src={tw} alt="" />
            <img src={sc} alt="" />
          </div>
        </div>
        <div className="footer-menu">
          <ul>
            <li className="li-head">UPBOX</li>
            <li>Upbox Bag Platinium</li>
            <li>Upbox Bag VIP</li>
            <li>Deals</li>
            <li>Seasonal Items</li>
            <li>Upbox Promise</li>
          </ul>
          <ul>
            <li className="li-head">Find Us On</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>
            <li>SnapChat</li>
            <li>Twitter</li>
          </ul>
          <ul>
            <li className="li-head">Product</li>
            <li>Get the App</li>
            <li>Loyalty Program</li>
            <li>Affiliates</li>
            <li>Press</li>
          </ul>
          <ul>
            <li className="li-head">Help</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Community</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className="footer-foot">
          <p>
            © 2020 Quest AI. Upbox is a Sample Project and open source design
            project free for personal and commercial use.
          </p>
          <div className="foot-plex">
            <p>Terms</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
