import React from "react";
import "./index.css";

export default function HeaderRestaurant({ restaurant }) {
  return (
    <div className="headerRestaurant">
      <div className="leftColumn">
        <div>{restaurant.name}</div>
        <div>{restaurant.description}</div>
      </div>
      <img id="photoHeader" src={restaurant.picture} alt={"res-header"} />
    </div>
  );
}
