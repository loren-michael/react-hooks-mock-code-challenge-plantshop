import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then(r => r.json())
      .then(plants => setPlants(plants))
  }, [])

  function handleAddPlant(plantObj) {
    setPlants([...plants, plantObj])
  }

  return (
    <main>
      <NewPlantForm 
        plants={plants}
        setPlants={setPlants}
        onAddPlant={handleAddPlant}
      />
      <Search 
        plants={plants}
        setPlants={setPlants}
        search={search}
        setSearch={setSearch}
      />
      <PlantList 
        plants={plants}
        search={search}
      />
    </main>
  );
}

export default PlantPage;
