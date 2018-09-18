import React from "react";
import "./Header.css";
// import images from "../images";

const Header = props => (
  <header className="jumbotron">
  <div className="header-div-wrapper">
    <h1>Memory Game!</h1>
    <h4>Click on an image to earn points, but don't click on any more than once!</h4>
  </div>
  </header>
);

export default Header;