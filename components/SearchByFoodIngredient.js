import React from "react";
import { useState } from "react";
import FoodRecipe from "./FoodRecipe";
import foodStyles from "../styles/Food.module.css";

const SearchByFoodIngredient = () => {
  const [formInput, setFormInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipies] = useState([]);

  console.log(recipes);

  const fetchFoodById = async (id) => {
    const test = await fetch(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${id}`)
    const foods = await test.json();
    console.log(foods);
    return foods.meals;
  }


  const fetchFood = async (joinedInput) => {

    const res = await fetch(
      `https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${joinedInput}`
    );

    const food = await res.json();
    const test = food.meals;
    const recipeArray = await Promise.all(test.map(i => fetchFoodById(i.idMeal)));
        console.log("Recipe Array", recipeArray);
    return recipeArray;
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    setIngredients([...ingredients, formInput]);
    setFormInput("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const joinedString = ingredients.join(',')
    const res = await fetchFood(joinedString);
    console.log("im res", res);
    setRecipies(res);
  };


  return (
    <div className={foodStyles.content}>
      <div>
        <h2>What ingredients do you have?</h2>

        <form action="" className={foodStyles.searchBar} onSubmit={handleAdd}>
          <input
            type="search"
            name="search"
            pattern=".*\S.*"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
            required
          />
          <button className={foodStyles.searchBtn} type="submit">
            <span>Search</span>
          </button>
        </form>
        {recipes.map((recipe) => (
          <FoodRecipe key={recipe.idMeal} recipe={recipe[0]} />
        ))}
      </div>
        <div className={foodStyles.allIngredients}>
      {ingredients.map((i) => (
        <div className={foodStyles.ingredients}>
          <h4>{i}</h4>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SearchByFoodIngredient;
