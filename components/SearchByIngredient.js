import React from "react";
import { useState } from "react";
import DrinkRecipe from "./DrinkRecipe";
import drinkStyles from "../styles/Drinks.module.css";
import Pagination from './Pagination'

const SearchByIngredient = () => {
  const [formInput, setFormInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(2);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = recipes ? recipes.slice(indexOfFirstProduct, indexOfLastProduct): '';

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const fetchDrinksById = async (id) => {
    console.log(id);
    const test = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
    const drinks = await test.json();
    return drinks.drinks;
  }


  const fetchDrinks = async (joinedInput) => {

    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${joinedInput}`
    );

    const cocktails = await res.json();
    const test = cocktails.drinks;
    const drinkArray = await Promise.all(test.map(i => fetchDrinksById(i.idDrink)));

    return drinkArray;
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    setIngredients([...ingredients, formInput]);
    setFormInput("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const joinedString = ingredients.join(',')
    const res = await fetchDrinks(joinedString);
    setRecipies(res);
    console.log(res);
  };


  return (
    <div className={drinkStyles.content}>
      <div>
        <h2>What ingredients do you have?</h2>
        <button className={drinkStyles.submitBtn} onClick={handleSubmit}>Submit</button>

        <form action="" className={drinkStyles.searchBar} onSubmit={handleAdd}>
          <input
            type="search"
            name="search"
            pattern=".*\S.*"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
            required
          />
          <button className={drinkStyles.searchBtn} type="submit">
            <span>Search</span>
          </button>
        </form>
        <div className={drinkStyles.searchContent}>
        {recipes[0] ?
        currentProducts.map((recipe) => (
          <DrinkRecipe key={recipe.idDrink} recipe={recipe[0]} />
        ))
        : ''}
        {recipes[0] ? <Pagination productsPerPage={productsPerPage} totalNumberOfProducts={recipes.length} paginate={paginate}/> : ''}
        </div>
        
      </div>
        <div className={drinkStyles.allIngredients}>
      {ingredients.map((i) => (
        <div className={drinkStyles.ingredients}>
          <h4>{i}</h4>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default SearchByIngredient;
