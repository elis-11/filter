import { useState } from "react";

export const InputFilter = (filteredCars) => {
  const [carName, setCarName] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  if (carName) {
    filteredCars = filteredCars.filter((car) => {
      return car.name.toLowerCase().includes(carName.toLowerCase());
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
    <div>
      <div className="input_filter">
        <div className="carName">
          Car name:{" "}
          <input
            type="text"
            value={carName}
            onChange={(e) => {
              setCarName(e.target.value);
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
    </div>
  );
};
