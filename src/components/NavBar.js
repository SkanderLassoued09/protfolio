import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>SkanderLassoued</h1>
      </div>

      <div className="menu" id={toggle ? "toggle" : ""}>
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="aboutMe" spy={true} smooth={true} duration={1000}>
              AboutMe
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} duration={1000}>
              Project
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              SayHello
            </Link>
          </li>
        </ul>
      </div>
      <span className="toggleBtn">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          X
        </button>
      </span>
    </nav>
  );
}
