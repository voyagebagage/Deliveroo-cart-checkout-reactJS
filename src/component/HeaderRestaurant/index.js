import React from "react";
import "./index.css";

export default function HeaderRestaurant({ restaurant }) {
  return (
    <div
      className="headerRestaurant wrapper"
      style={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "pink",
      }}
    >
      <div className="leftColumn">
        <h1 className="nameRestaurant">{restaurant.name}</h1>
        <div
          className="descriptionRestaurant"
          style={{
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "cyan",
          }}
        >
          {restaurant.description}
        </div>
      </div>
      <div
        style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "purple",
        }}
      >
        <img id="photoHeader" src={restaurant.picture} alt={"res-header"} />
      </div>
    </div>
  );
}
