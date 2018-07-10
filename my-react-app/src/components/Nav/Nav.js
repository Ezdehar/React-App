import React from "react";
import NavMessage from "/Users/ezdeharjaber/Documents/cwru/React-App/my-react-app/src/components/NavMessage/NavMessage.js";


// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <NavMessage score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
