import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
  
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li id="rw">{props.rightWrong}</li>
        <li id="cur-sco">Current Score: {props.score}</li>
        <li id="top-sco">Top Score: {props.topScore}</li>
  
      </ul>
    </nav >
  );
  
  export default Nav;
// const Nav = props => <h1 className="nav" >{props.children}</h1>;

