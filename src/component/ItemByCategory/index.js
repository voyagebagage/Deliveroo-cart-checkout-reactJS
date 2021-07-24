import "./index.css";
import React from "react";
import Meals from "../Meals";
export default function ItemByCategory({ categories }) {
  console.log(categories);
  return (
    <>
      {categories.map((catName) => {
        return (
          <>
            <div
              className="catName"
              key={catName}
              style={{
                borderWidth: 10,
                borderStyle: "solid",
                borderColor: "cyan",
              }}
            >
              {catName.name}
            </div>
            <Meals meals={catName.meals} />
          </>
        );
      })}
      ;
    </>
  );
}
