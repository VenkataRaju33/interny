import React from "react";
import "./NavBar.css";
import logo from "./images/Logo.png";
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light nav-bg">
        <div class="container">
          <a href="#" class="navbar-brand ">
            <img
              src={logo}
              width="45"
              alt=""
              class="logo d-inline-block align-middle pr-2 mr-2"
            />
            <span class="logo_text ">UPBOX</span>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
              <a href="#" class="nav-text nav-link">
                Skin
              </a>
              <a href="#" class="nav-text nav-link">
                Hair
              </a>
              <a href="#" class="nav-text nav-link">
                Bath
              </a>
              <a href="#" class="nav-text nav-link">
                Sale
              </a>
              <a href="#" class="nav-btn nav-link">
                Log in &gt;
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav class="navbar navbar-expand-sm py-3 ">
        <div class="container">
          <a href="#" class="navbar-brand ">
            <img
              src={logo}
              width="45"
              alt=""
              class="d-inline-block align-middle pr-2 mr-2"
            />
            <span class="logo_text ">UPBOX</span>
          </a>

          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav justify-content-end">
              <li class="nav-item">
                <a href="#" class="nav-link nav-text">
                  This month
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-text">
                  skin
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-text">
                  hair
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-text">
                  bath
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-text">
                  sale
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link nav-btn">Log in</button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default NavBar;
