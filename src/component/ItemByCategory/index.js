import "./index.css";
import React from "react";
import Meals from "../Meals";
import Counter from "../Counter";
import { useState, useEffect } from "react";

export default function ItemByCategory({ categories }) {
  const [orderList, setOrderList] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [delivery] = useState(2.5);
  const [count, setCount] = useState(1);

  const handleClickPlus = (index) => {
    const newCounter = [...orderList];
    newCounter[index].count += 1;
    setSumPrice(sumPrice + newCounter[index].price);
    setOrderList(newCounter);
  };
  const handleClickMinus = (index, price) => {
    const newCounter = [...orderList];
    newCounter[index].count -= 1;
    setSumPrice(sumPrice - newCounter[index].price);
    if (newCounter[index].count === 0) newCounter.splice(index, 1);
    setOrderList(newCounter);
  };

  return (
    <>
      <div className="itemByCategories">
        <div className="cartWrapper">
          <div
            className="cart"
            style={orderList.length ? null : { height: 190 }}
          >
            {orderList.length ? (
              <>
                <input id="active" type="submit" value="Valider mon panier" />
                {orderList.map((item, index) => {
                  return (
                    <p key={item.id} className="cartAtributes">
                      <span>
                        <Counter
                          count={item.count}
                          index={index}
                          price={item.price}
                          handleClickPlus={handleClickPlus}
                          handleClickMinus={handleClickMinus}
                        />
                      </span>
                      <span>{item.title}</span>
                      <span> {item.price} €</span>
                    </p>
                  );
                })}
                <p>
                  <span>_________________________________________________</span>
                </p>
                <p>
                  <span>
                    Sous-Total
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {sumPrice.toFixed(2)} €
                  </span>
                </p>

                <p>
                  <span>
                    Frais de livraison
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {delivery} €
                  </span>
                </p>
                <p>
                  <span>_________________________________________________</span>
                </p>
                <p>
                  <span className="total">
                    Total
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {(sumPrice + delivery).toFixed(2)} €
                  </span>
                </p>
              </>
            ) : (
              <>
                <input type="submit" disabled value="Valider mon panier" />
                <span className="cartSpan">votre panier est vide</span>
              </>
            )}
          </div>
        </div>
        {categories.map((catName) => {
          return (
            <>
              {catName.meals.length ? (
                <>
                  <h2 className="catName wrapper" key={catName}>
                    {catName.name}
                  </h2>
                  <Meals
                    meals={catName.meals}
                    sumPrice={sumPrice}
                    setSumPrice={setSumPrice}
                    orderList={orderList}
                    setOrderList={setOrderList}
                  />
                </>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
}
