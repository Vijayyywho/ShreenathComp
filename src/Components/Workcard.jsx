import "./WorkcardStyles.css";

// import pro1 from "../assets/photo.svg";

import React from "react";

const Workcard = (props) => {
  return (
    <div className="service-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="ser-title"> {props.title}</h2>
      <div className="service-details">
        <p>{props.text}</p>
        {/* <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Workcard;
