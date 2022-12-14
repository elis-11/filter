import { useState } from "react";
import carsData from "./cars.json"
import "./App.css";

function App() {
  const [cars, setCars] = useState(carsData);
  const [productName, setProductName] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [checkedUsing, setCheckingUsing] = useState(false);
  console.log(productName);
  console.log(priceMin);
  console.log(priceMax);

  const handleChangeUsing = () => {
    setCheckingUsing(!checkedUsing);
  };

  let filteredCars = cars;
  if (productName) {
    filteredCars = filteredCars.filter((car) => {
      return car.name.toLowerCase().includes(productName.toLowerCase());
    });
  }

  if (priceMin) {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= priceMin;
    });
  }

  if (priceMax) {
    filteredCars = filteredCars.filter((car) => {
      return car.price <= priceMax;
    });
  }

  return (
    <div className="App">
      <div className="search">
        <div className="input">
          <div className="productName">
            Car name:{" "}
            <input
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          <div className="priceMin">
            Price Min:{" "}
            <input
              type="number"
              value={priceMin}
              onChange={(e) => {
                setPriceMin(e.target.value);
              }}
            />
            {priceMin >= 10 && <button>button</button>}
          </div>
          <div className="priceMax">
            Price Max:{" "}
            <input
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
        </div>
        <div className="checkbox">
          new
          <input 
          type="checkbox"
          label="new"
          value={checkedUsing}
          onChange={handleChangeUsing}
          />
        </div>
      </div>

      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car._id} className="car">
            <img src={car.image} alt={car.name} />
            <div className="name">{car.name}</div>
            <div className="price">price: {car.price} €</div>
            <div className="year">{car.year} year</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
