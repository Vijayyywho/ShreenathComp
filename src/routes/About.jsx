import React from "react";

import Navbar from "../Components/Navbar";

import Aboutcontent from "../Components/Aboutcontent";

const About = () => {
  return (
    <div id="about">
      <h1 className="service-head"> About Me </h1>
      <Navbar />

      <Aboutcontent />
    </div>
  );
};

export default About;
