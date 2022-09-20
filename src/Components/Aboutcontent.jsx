import "./About.css";
import me1 from "../assets/raj.png";
import { HashLink as Link } from "react-router-hash-link";
import React from "react";
// cd

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>Who Am I?</h2>
        <p>
          Myself Rajendra Singh Rajput founder and proprietor of{" "}
          <i>SHREENATH-COMPUTERS</i>, Here we do all types of online work
          releated to E-governence, College Admission forms, Govt Exam forms,and
          banking.
        </p>
        <Link smooth to="#contact">
          <button className="btnN"> Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack-top"></div>
          <img src={me1} className="img" alt="true" width="600" height="400" />
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
