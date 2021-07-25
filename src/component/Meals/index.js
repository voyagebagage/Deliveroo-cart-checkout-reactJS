import React from "react";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStar);

export default function Meals({ meals }) {
  console.log(meals);

  return (
    <div
      className="mealContainer wrapper"
      style={{
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "green",
      }}
    >
      {meals.map((meal, index) => (
        <div
          className="meal"
          key={meal.id}
          // style={{
          //   borderWidth: 3,
          //   borderStyle: "solid",
          //   borderColor: "crimson",
          // }}
        >
          <div className={meal.picture ? "leftColumnMeals" : null}>
            <h3 className="mealTitle">{meal.title}</h3>
            <p className="mealDescription">{meal.description}</p>
            <div className="priceAndPopular">
              <div>{meal.price} €</div>
              {meal.popular && (
                <div>
                  <FontAwesomeIcon
                    icon="star"
                    style={{ marginLeft: 16, color: "orange", height: "75%" }}
                  />
                  <span>Populaire</span>
                </div>
              )}
            </div>
          </div>
          {meal.picture && (
            <div className="photoWrapper">
              <img id="photoMeal" src={meal.picture} alt={"meal"} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
