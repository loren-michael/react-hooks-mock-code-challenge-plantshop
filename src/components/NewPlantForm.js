import React, { useState } from "react";

function NewPlantForm({ plants, setPlants, onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    inStock: true
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price,
      inStock: formData.inStock
    };
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    // .then(setPlants([...plants, newPlant]))  don't do this, you'll get key errors
    .then((newPlant) => onAddPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image} 
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price} 
          onChange={handleChange} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
