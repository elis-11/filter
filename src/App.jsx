import { useState } from "react";
import carsData from "./cars.json";
import "./App.css";

function App() {
  const [cars, setCars] = useState(carsData);
  const [productName, setProductName] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [filteredCategory, setFilteredCategory] = useState([]);
  let filteredCars = cars;

  console.log(filteredCategory);

  const onFilteredCategoryChange = (e) => {
    // wenn checkbox gechecked, dann add e.target.value zu array
    if (e.target.checked) {
      setFilteredCategory([...filteredCategory, e.target.value]);
    }
    // wenn checkbox unchecked, dann remove e.target.value from array
    else {
      const newFilteredCategory = filteredCategory.filter((item) => {
      return item !== e.target.value;

      });
      setFilteredCategory(newFilteredCategory);
    }

  };

  if (filteredCategory.length) {
    filteredCars = filteredCars.filter((car) => {
      return filteredCategory.includes(car.category);
    });
  }

  // const checkedItems = filteredCategory.length
  //   ? filteredCategory.f((total, item) => total + ", " + item)
  //   : "";

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
        <div className="categories">
          <h4>Category:</h4>
          <div className="filterByCategory">
            <input
              type="checkbox"
              name="categories"
              value="Toyota"
              onChange={onFilteredCategoryChange}
            />
            <span>Toyota</span>
          </div>
          <div className="filterByCategory">
            <input
              type="checkbox"
              name="categories"
              value="BMW"
              onChange={onFilteredCategoryChange}
            />
            <span>BMW</span>
          </div>
          <div className="filterByCategory">
            <input
              type="checkbox"
              name="categories"
              value="Lexus"
              onChange={onFilteredCategoryChange}
            />
            <span>Lexus</span>
          </div>
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
