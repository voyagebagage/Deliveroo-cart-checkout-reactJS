import React from "react";
import "./index.css";

export default function HeaderRestaurant({ restaurant }) {
  return (
    <div className="headerRestaurant wrapper">
      <div className="leftColumn">
        <h1 className="nameRestaurant">{restaurant.name}</h1>
        <div className="descriptionRestaurant">{restaurant.description}</div>
      </div>
      <div>
        <img id="photoHeader" src={restaurant.picture} alt={"res-header"} />
      </div>
    </div>
  );
}
