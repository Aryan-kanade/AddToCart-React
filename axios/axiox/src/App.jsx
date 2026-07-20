import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://jsonfakery.com/products"
        );

        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3 className="">{product.title}</h3>
          <img src={product.image} alt={product.title} width="150" />
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;