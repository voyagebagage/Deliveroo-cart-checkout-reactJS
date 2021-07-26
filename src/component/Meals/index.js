import React from "react";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStar);

export default function Meals({
  meals,
  setAddCart,
  count,
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
              // if (meal.id !== meal.id[index]) {
              newMenu.push({
                id: meal.id,
                count: 1,
                title: meal.title,
                price: Number(meal.price),
              });
              setSumPrice(Number(meal.price) + sumPrice);
              setOrderList(newMenu);
              // }
              console.log(typeof meal.price);
              console.log(sumPrice, "sum MEAL------");
            }}
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
