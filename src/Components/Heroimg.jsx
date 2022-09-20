import "./HeroimgStyles.css";

import React from "react";
import intro from "../assets/earthbg.mp4";
import { HashLink as Link } from "react-router-hash-link";

// import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <video className="into-video" src={intro} autoPlay loop muted></video>
      </div>
      <div className="content">
        <p>Heyy!! Champp Welcome to Shreenath-Computers</p>
        <h1> E-mitra Service provider Contact us Now.</h1>
        <div>
          <Link smooth to="#service" className="btn">
            Services
          </Link>
          <Link smooth to="#contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
