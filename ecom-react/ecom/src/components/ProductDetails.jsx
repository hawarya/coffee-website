import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [veiw, setVeiw] = useState(null);

  const handleAddtoCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find(
      item => item._id === veiw._id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...veiw, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:5000/${id}`);
      const data = await response.json();
      setVeiw(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!veiw) return <h2>Loading...</h2>;

  return (
    <div className="product-details">
      <img src={veiw.image} alt={veiw.name} width={300} />

      <div className="product-info">
        <h2>{veiw.name}</h2>
        <p>₹{veiw.price}</p>
        <p>{veiw.description}</p>

        <button onClick={handleAddtoCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
