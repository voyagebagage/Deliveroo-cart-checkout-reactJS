import "./index.css";
import React from "react";
import Meals from "../Meals";
export default function ItemByCategory({ categories }) {
  console.log(categories, "cat");
  return (
    <>
      <div
        className="itemByCategories"
        style={{
          borderWidth: 10,
          borderStyle: "solid",
          borderColor: "orange",
        }}
      >
        <div className="cartWrapper">
          <p
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "cyan",
            }}
            className="cart"
          >
            <input type="submit" disabled value="Valider mon panier" />
            <span className="cartSpan">TON PANIER EST VIDE</span>
          </p>
        </div>
        {categories.map((catName) => {
          return (
            <>
              {catName.meals.length ? (
                <>
                  <h2
                    className="catName wrapper"
                    key={catName}
                    // style={{
                    //   borderWidth: 2,
                    //   borderStyle: "solid",
                    //   borderColor: "cyan",
                    // }}
                  >
                    {catName.name}
                  </h2>
                  <Meals meals={catName.meals} />
                </>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
}
