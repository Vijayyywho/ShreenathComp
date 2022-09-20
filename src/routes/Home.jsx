import React from "react";

import Navbar from "../Components/Navbar";
import Heroimg from "../Components/Heroimg";
import Footer from "../Components/Footer";
import Service from "./Service";
import About from "./About";

import Contact from "./Contact";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Heroimg />
      <Service />

      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
