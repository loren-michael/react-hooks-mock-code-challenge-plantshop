import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <ul className="cards">
      {filteredPlants.map((plant) => {
        return (
          <PlantCard 
            key={plant.id}
            plant={plant}
          />)
      })}  
    </ul>
  );
}

export default PlantList;
