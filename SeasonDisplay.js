import './SeasonDisplay.css';
import React from "react";
const seasonconfig = {
  Winter: {
    text: "Its chilly",
    iconName: "snowflake"
  },
  Summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  }
};
const getSeason = (lat, month) => {
  if (lat > 0) {
    if (month > 2 && month < 9) return "Summer";
    else return "Winter";
  } else {
    if (month > 2 && month < 9) return "Winter";
    else return "Summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonconfig[season];
  return (
    <div className= {`season-display ${season}`}>
      <i className={` icon-left massive ${iconName} icon`}></i>
      <h1 className= "text">{text}</h1>
      <i className={` icon-right massive ${iconName} icon`}></i>
    </div>
  );
};
export default SeasonDisplay;
