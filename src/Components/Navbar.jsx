import "./NavbarStyle.css";
// import { Link } from "react-scroll";
import { HashLink as Link } from "react-router-hash-link";
import React from "react";

import favico from "../assets/favicon.ico";
import {
  FaBars,
  FaBriefcase,
  FaCog,
  FaHome,
  FaMailBulk,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [tap, SetTap] = useState(false);
  const handelClick = () => SetTap(!tap);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div id="navbar" className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>
          Shreenath<span>-Computers</span>
        </h1>
      </Link>

      <ul className={tap ? "nav-menu active" : "nav-menu"}>
        <li className="link">
          <Link to="#home">
            {" "}
            <FaHome size={28} style={{ marginRight: "0.5rem" }} />
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="#service">
            {""}
            <FaCog size={28} style={{ marginRight: "0.5rem" }} />
            Services
          </Link>
        </li>
        <li>
          <Link smooth to="#about">
            {" "}
            <FaBriefcase size={28} style={{ marginRight: "0.5rem" }} /> About Us
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            {" "}
            <FaMailBulk size={28} style={{ marginRight: "0.5rem" }} />
            Contact
          </Link>
        </li>
      </ul>
      <div className="Hambug" onClick={handelClick}>
        {tap ? (
          <FaTimes size={28} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={28} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
