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
        <p
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "cyan",
          }}
          className="cart"
        >
          TON PANIER EST VIDES
        </p>
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
        {/* <p
          style={{
            borderWidth: 10,
            borderStyle: "solid",
            borderColor: "cyan",
          }}
          className="cart"
        >
          TON PANIER EST VIDES
        </p> */}
      </div>
    </>
  );
}
