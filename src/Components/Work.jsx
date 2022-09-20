import "./WorkcardStyles.css";
import Workcard from "./Workcard";
import workcardData from "./WorkcardData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="service-head"> Our Services </h1>
      <div className="service-container">
        {workcardData.map((val, ind) => {
          return (
            <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
