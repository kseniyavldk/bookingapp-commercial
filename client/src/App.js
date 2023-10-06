import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get("api/House")
      .then((response) => {
        const data = response.data;
        setHouses(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  // return (
  //   <div>
  //     <h2>Список домов</h2>
  //     <ul>
  //       {houses.map((house) => (
  //         <li key={house.Id}>
  //           <h3>{house.Name}</h3>
  //           <p>Количество человек: {house.CountPeople}</p>
  //           <p>
  //             Стоимость за места на одного человека за сутки: {house.CostDayOne}
  //             , руб
  //           </p>
  //           <p>Стоимость дома за сутки: {house.CostDayAll}, руб</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/house" element={<List />} />
        <Route path="/api/house/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
