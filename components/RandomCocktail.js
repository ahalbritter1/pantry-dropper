import React from "react";
import { useState } from "react";
import DrinkRecipe from "./DrinkRecipe";
import drinkStyles from "../styles/RandomDrink.module.css";

const RandomCocktail = () => {
  const [randomDrink, setRandomDrink] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`
    );
    const random = await res.json();
    setRandomDrink(random.drinks);
    console.log(random);
  };

  return (
    <div className={drinkStyles.container}>
      <div className={drinkStyles.displayedDrink}>
        <h3>Lets make a random drink</h3>
        <button onClick={(event) => handleSubmit(event)}>Randomizer</button>
      </div>
      <div className={drinkStyles.drink} >
      {randomDrink.map((recipe) => (
        
          <DrinkRecipe key={recipe.idDrink} recipe={recipe} />
      ))}
      </div>
    </div>
  );
};

export default RandomCocktail;
