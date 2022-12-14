import { useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([
    {
      _id: "f1",
      name: "Ford F-150",
      price: 18000,
      image: "https://source.unsplash.com/120x120/?car,Ford_F-150",
    },
    {
      _id: "f2",
      name: "Toyota Prius",
      price: 36000,
      image: "https://source.unsplash.com/120x120/?car,Toyota_Prius",
    },
    {
      _id: "f3",
      name: "BMW",
      price: 40000,
      image: "https://source.unsplash.com/120x120/?car,bmw",
    },
    {
      _id: "f4",
      name: "BMW",
      price: 19000,
      image: "https://source.unsplash.com/120x120/?car,bmw",
    },
    {
      _id: "f5",
      name: "Toyota Camry",
      price: 4000,
      image: "https://source.unsplash.com/120x120/?car,Toyota_Camry",
    },
    {
      _id: "f6",
      name: "Toyota Land Cruiser",
      price: 70000,
      image: "https://source.unsplash.com/120x120/?car,toyota_Land_Cruiser",
    },
    {
      _id: "f7",
      name: "Lexus GS 350",
      price: 5000,
      image: "https://source.unsplash.com/120x120/?car,Lexus_GS_350",
    },
    {
      _id: "f8",
      name: "Toyota Corolla",
      price: 15000,
      image: "https://source.unsplash.com/120x120/?car,Toyota_Corolla",
    },
  ]);

  const [productName, setProductName] = useState("");
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  console.log(productName);
  console.log(priceMin);
  console.log(priceMax);

  let filteredProducts = cars;
  if (productName) {
    filteredProducts = filteredProducts.filter((car) => {
      return car.name.toLowerCase().includes(productName.toLowerCase());
    });
  }

  if (priceMin) {
    filteredProducts = filteredProducts.filter(car =>{
      return car.price >= priceMin  
    })
  }

  if (priceMax) {
    filteredProducts = filteredProducts.filter(car =>{
      return car.price <= priceMax
    })
  }

  return (
    <div className="App">
      <div className="filter">
        <div className="productName">
          Car name:
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className="productMin">
          Price Min:
          <input
            type="number"
            value={priceMin}
            onChange={(e) => {
              setPriceMin(e.target.value);
            }}
          />
        </div>
        <div className="productMax">
          Price Max:
          <input
            type="number"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
        </div>
      </div>

      <div className="cars">
        {filteredProducts.map((car) => (
          <div key={car._id} className="car">
              <img src={car.image} alt={car.name} />
            <div className="item">{car.name}</div>
            <div className="item">{car.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
