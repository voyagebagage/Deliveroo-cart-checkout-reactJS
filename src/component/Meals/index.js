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
  const handleClickMeal = (meal) => {
    const newMenu = [...orderList];
    const alreadyInCart = newMenu.find((elem) => elem.id === meal.id);
    setSumPrice(Number(meal.price) + sumPrice);

    if (alreadyInCart) {
      alreadyInCart.count++;
      setOrderList(newMenu);
    }
    if (!alreadyInCart) {
      newMenu.push({
        id: meal.id,
        count: 1,
        title: meal.title,
        price: Number(meal.price),
      });
      setOrderList(newMenu);
    }
  };

  return (
    <>
      <div className="mealContainer wrapper">
        {meals.map((meal) => (
          <div
            className="meal"
            key={meal.id}
            onClick={() => handleClickMeal(meal)}
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
