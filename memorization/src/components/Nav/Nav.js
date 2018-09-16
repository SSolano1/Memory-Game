import React from "react";
import "./Nav.css";

const Nav = props => (
<nav className="navbar sticky-top navbar-light">
  <a className="navbar-brand" href="/">Clicky</a>
  <p id="currentScore">Current Score: {props.score} </p>
  <p id="topScore">Top Score: {props.topScore} </p>
  <p id="rw">{props.rightWrong}</p>
</nav>
);

export default Nav;
// const Nav = props => <h1 className="nav" >{props.children}</h1>;
