import React from "react";
import { useState } from "react";
import FoodRecipe from "./FoodRecipe";
import foodStyles from "../styles/RandomFood.module.css";

const RandomFoodRecipe = () => {
  const [randomFood, setRandomFood] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `https://www.themealdb.com/api/json/v2/9973533/random.php`
    );
    const random = await res.json();
    console.log(random.meals);
    setRandomFood(random.meals);
  };

  return (
    <div className={foodStyles.container}>
      <div className={foodStyles.displayedDrink}>
        <h3>Lets make a random meal</h3>
        <button onClick={(event) => handleSubmit(event)}>Randomizer</button>
      </div>
      <div className={foodStyles.drink} >
      {randomFood.map((recipe) => (
        
          <FoodRecipe key={recipe.idMeal} recipe={recipe} />
      ))}
      </div>
    </div>
  );
};

export default  RandomFoodRecipe;
