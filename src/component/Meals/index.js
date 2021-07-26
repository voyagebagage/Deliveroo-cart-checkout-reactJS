import React from "react";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStar);

export default function Meals({
  meals,
  sumPrice,
  setSumPrice,
  orderList,
  setOrderList,
}) {
  return (
    <>
      <div className="mealContainer wrapper">
        {meals.map((meal, index) => (
          <div
            className="meal"
            key={meal.id}
            onClick={() => {
              const newMenu = [...orderList];
              newMenu.push({
                id: meal.id,
                count: 1,
                title: meal.title,
                price: Number(meal.price),
              });
              setSumPrice(Number(meal.price) + sumPrice);
              setOrderList(newMenu);
            }}
          >
            <div className={meal.picture ? "leftColumnMeals" : null}>
              <h3 className="mealTitle">{meal.title}</h3>
              <p className="mealDescription">{meal.description}</p>
              <div className="priceAndPopular">
                <div>{meal.price} €</div>
                {meal.popular && (
                  <div>
                    <FontAwesomeIcon icon="star" className="starIcon" />
                    <span className="popular">Populaire</span>
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
    </>
  );
}
