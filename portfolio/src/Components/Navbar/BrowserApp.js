import React from "react";
import logo from "C:/Users/utkar/Desktop/dont touch/pendrive/js/projects/portfolio/portfolio/src/Components/Image/logo.png";
export default function BrowserApp() {
  return (
    <div className="navbar">
      <div className="leftArea">
        <div className="logo">
          <img src={logo} alt="" className="logoImage" />
        </div>
      </div>
      <div className="rightArea">
        <ul>
          <a href="/">Home</a>
        </ul>
        <ul>
          <a href="/About">About us</a>
        </ul>
        <ul>
          <a href="/Projects">Projects</a>
        </ul>
        <ul>
          <a href="/Contact">Contact us</a>
        </ul>
      </div>
    </div>
  );
}
