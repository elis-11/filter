import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      _id: "f1",
      name: "Toaster",
      price: 40,
      image: "https://source.unsplash.com/100x100/?sandwich,toaster",
    },
    {
      _id: "f2",
      name: "Fridge",
      price: 470,
      image: "https://source.unsplash.com/100x100/?fridge",
    },
    {
      _id: "f3",
      name: "Toaster",
      price: 55,
      image: "https://source.unsplash.com/100x100/?sandwich,toaster",
    },
  ]);

  const [productName, setProductName] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  console.log(productName);
  console.log(priceMin);
  console.log(priceMax);

  let filteredProducts = products;
  if (productName) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(productName.toLowerCase());
      console.log(product);
    });
  }

  return (
    <div className="App">
      <div className="filter">
        <div className="productName">
          Product:
          <input
            value={productName}
            placeholder="Product name..."
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            type="text"
          />
        </div>
        <div className="productMin">
          Price Min:
          <input
            type="number"
            // onChange={}
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

      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product">
            <div className="item">{product.name}</div>
            <div className="item">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
