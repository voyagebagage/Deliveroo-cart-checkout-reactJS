import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderLogo from "./component/HeaderLogo";
import HeaderRestaurant from "./component/HeaderRestaurant";
import ItemByCategory from "./component/ItemByCategory";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://delivroo-backend.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return isLoading ? null : (
    <div
      // className="container"
      style={{ borderWidth: 2, borderStyle: "solid", borderColor: "blue" }}
    >
      <HeaderLogo />
      <HeaderRestaurant restaurant={data.restaurant} />
      <ItemByCategory categories={data.categories} />
    </div>
  );
}

export default App;
