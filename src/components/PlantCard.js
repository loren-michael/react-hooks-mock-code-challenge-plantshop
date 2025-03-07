import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stock, setStock] = useState(true)

  return (
    <li className="card" key={plant.id} >
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {stock ? (
        <button onClick={() => setStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setStock(true)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
