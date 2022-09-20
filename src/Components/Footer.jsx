import "./FooterStyles.css";
import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> Address:- Opp Sayra bus-Stand</p>
              <p>Teh(Gogunda), district(Udaipur), Rajasthan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Contact:- +91 96492 35005
            </h4>
          </div>
          <div className="E-mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              E-mail:-singhrajendra3103@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About our Shop</h4>
          <p className="para">
            SHREENATH-COMPUTERS is an E-mitra service provider at Sayra(Tehsil),
            Main bustand.You can visit us if you want any E-governence related
            work.Here we do all types of Online Form Filling Of governments
            exams and Admission Form etc. Also Aadhar-card Pan-Card update or
            New Can be done at Our shop.Give us a chance to serve you Pay us a
            visit.
            <br />
            <h2>Lets have a chat!!</h2>
          </p>
          <div className="social">
            <a href="https://www.facebook.com/raj.rajputana.1238">
              <FaFacebook
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://instagram.com/_nickk._1/">
              <FaInstagram
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="mailto:mailto:singhrajendra3103@gmail.com">
              <FaEnvelope
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://wa.me/918208785545?text=Hello%20MR.%20Rajendra%20Singh%20I%20need%20your%20help!!🙋‍♂️">
              {" "}
              <FaWhatsapp
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="tel:=919649235005">
              <FaPhone
                size={35}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <div className="wp-float">
              {/* <img src={pik} alt="wp" width={80} /> */}

              <a href="https://wa.me/918208785545?text=Hello%20MR.%20Rajendra%20Singh%20I%20need%20your%20help!!🙋‍♂️">
                {" "}
                {/* <FaWhatsapp
                  size={100}
                  style={{ color: "#fff", marginRight: "1rem" }}
                /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="foot">
        ©️ 2022 CopyRight Shreenath-Computers All Right Reserved | Terms and
        Conditions
      </p>
    </div>
  );
};

export default Footer;
