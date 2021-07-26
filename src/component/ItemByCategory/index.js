import "./index.css";
import React from "react";
import Meals from "../Meals";
import Counter from "../Counter";
import { useState, useEffect } from "react";

export default function ItemByCategory({ categories }) {
  const [orderList, setOrderList] = useState([]);
  const [addCart, setAddCart] = useState("");
  const [sumPrice, setSumPrice] = useState(0);
  const [delivery] = useState(2.5);
  const [count, setCount] = useState(1);
  const [masterCounter, setMasterCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleClickPlus = (index) => {
    const newCounter = [...orderList];
    newCounter[index].count += 1;
    console.log(typeof newCounter[index].price, "hanKLIKPLUS");
    setSumPrice(sumPrice + newCounter[index].price);
    console.log(sumPrice, "sum ++++++++++++++++++++");
    setOrderList(newCounter);
  };
  const handleClickMinus = (index, price) => {
    const newCounter = [...orderList];
    newCounter[index].count -= 1;
    setSumPrice(sumPrice - newCounter[index].price);
    if (newCounter[index].count === 0) newCounter.splice(index, 1);

    console.log(sumPrice, "sum----------------------");
    setOrderList(newCounter);
  };

  return (
    <>
      <div className="itemByCategories">
        <div className="cartWrapper">
          <div className="cart">
            {orderList.length ? (
              <>
                <input type="submit" value="Valider mon panier" />
                {orderList.map((item, index) => {
                  return (
                    <div key={item.id} className="cartAtributes">
                      <p>
                        <Counter
                          count={item.count}
                          index={index}
                          price={item.price}
                          handleClickPlus={handleClickPlus}
                          handleClickMinus={handleClickMinus}
                        />
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                      </p>
                    </div>
                  );
                })}
                <p>
                  <span>---------------------------------</span>
                </p>
                <p>
                  <span> Sous-Total {sumPrice} E</span>
                </p>

                <p>
                  <span>Frais de livraison {delivery} E</span>
                </p>
                <p>
                  <span>---------------------------------</span>
                </p>
                <p>
                  <span>Total {sumPrice + delivery} E</span>
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
                    setAddCart={setAddCart}
                    sumPrice={sumPrice}
                    setSumPrice={setSumPrice}
                    setCount={setCount}
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
