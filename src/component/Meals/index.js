import React from "react";
import "./index.css";

export default function Meals({ meals }) {
  console.log(meals);

  return (
    <div
      className="mealContainer"
      style={{
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: "green",
      }}
    >
      {meals.map((meal, index) => (
        <div
          className="meal"
          key={meal.id}
          style={{
            borderWidth: 3,
            borderStyle: "solid",
            borderColor: "crimson",
          }}
        >
          <div>
            <div>{meal.title}</div>
            <div>{meal.description}</div>
            <div className="priceAndPopular">
              <div>{meal.price}</div>
              {meal.popular && <div>TRUE</div>}
            </div>
          </div>
          <div>
            <img id="photoMeal" src={meal.picture} alt={"meal"} />
          </div>
        </div>
      ))}
    </div>
  );
}
