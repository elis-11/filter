import { useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([
    {
      _id: "f1",
      name: "BMW 6 Series",
      price: 18000,
      year: 2012,
      image: "https://source.unsplash.com/120x120/?car,BMW_6_Series",
    },
    {
      _id: "f2",
      name: "Toyota Prius",
      price: 36000,
      year: 2018,
      image: "https://source.unsplash.com/120x120/?car,Toyota_Prius",
    },
    {
      _id: "f3",
      name: "BMW 7 Series",
      price: 40000,
      year: 2015,
      image: "https://source.unsplash.com/120x120/?car,BMW_7_Series",
    },
    {
      _id: "f4",
      name: "BMW 8 Series",
      price: 19000,
      year: 2014,
      image: "https://source.unsplash.com/120x120/?car,BMW_8_Series",
    },
    {
      _id: "f5",
      name: "Toyota Camry",
      price: 4000,
      year: 2000,
      image: "https://source.unsplash.com/120x120/?car,Toyota_Camry",
    },
    {
      _id: "f6",
      name: "Toyota Land Cruiser",
      price: 70000,
      year: 2020,
      image: "https://source.unsplash.com/120x120/?car,toyota_Land_Cruiser",
    },
    {
      _id: "f7",
      name: "Lexus GS 350",
      price: 5000,
      year: 2011,
      image: "https://source.unsplash.com/120x120/?car,Lexus_GS_350",
    },
    {
      _id: "f8",
      name: "Toyota Corolla",
      price: 15000,
      year: 2019,
      image: "https://source.unsplash.com/120x120/?car,Toyota_Corolla",
    },
  ]);

  const [productName, setProductName] = useState("");
  const [partOfName, setPartOfName] = useState("");
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [visible, setVisible] = useState(false)
  console.log(productName);
  console.log(priceMin);
  console.log(priceMax);

  let filteredProducts = cars;
  if (productName) {
    filteredProducts = filteredProducts.filter((car) => {
      return car.name.toLowerCase().includes(productName.toLowerCase());
    });
  }
if (partOfName){
  
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
      <div className="search">
      <div className="input">
        <div className="productName">
          Car name: {' '}
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className="priceMin">
          Price Min: {' '}
          <input
            type="number"
            value={priceMin}
            onChange={(e) => {
              setPriceMin(e.target.value);
            }}
          />
          {priceMin >= 10  && 
          <button
          >button</button>
        }
        </div>
        <div className="priceMax">
          Price Max: {' '}
          <input
            type="number"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
        </div>
      </div>
      <div className="checkbox">

      </div>
      </div>

      <div className="cars">
        {filteredProducts.map((car) => (
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
