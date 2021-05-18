import React from 'react'
import foodStyles from '../styles/FoodRecipe.module.css'

const FoodRecipe = ({recipe}) => {

    const foodRecipe = recipe.strInstructions.split('. ');

    return (
        <div className={foodStyles.main}>
        <div className={foodStyles.container}>
            <h2>{recipe.strDrink}</h2>
            <img className={foodStyles.imageSize} src={recipe.strMealThumb}/>
        </div>
        <div className={foodStyles.secondaryContent}>
            <h3>Ingredients</h3>
            {recipe.strIngredient1 !== null ? <p>{recipe.strIngredient1}  {recipe.strMeasure1}</p>
            : ''}
            {recipe.strIngredient2 !== null ? <p>{recipe.strIngredient2}  {recipe.strMeasure2}</p>
            : ''}
            {recipe.strIngredient3 !== null ? <p>{recipe.strIngredient3}  {recipe.strMeasure3}</p>
            : ''}
            {recipe.strIngredient4 !== null ? <p>{recipe.strIngredient4}  {recipe.strMeasure4}</p>
            : ''}
            {recipe.strIngredient5 !== null ? <p>{recipe.strIngredient5}  {recipe.strMeasure5}</p>
            : ''}
            {recipe.strIngredient6 !== null ? <p>{recipe.strIngredient6}  {recipe.strMeasure6}</p>
            : ''}
            {recipe.strIngredient7 !== null ? <p>{recipe.strIngredient7}  {recipe.strMeasure7}</p>
            : ''}
            {recipe.strIngredient8 !== null ? <p>{recipe.strIngredient8}  {recipe.strMeasure8}</p>
            : ''}
            {recipe.strIngredient9 !== null ? <p>{recipe.strIngredient9}  {recipe.strMeasure9}</p>
            : ''}
            {recipe.strIngredient10 !== null ? <p>{recipe.strIngredient10}  {recipe.strMeasure10}</p>
            : ''}
            {recipe.strIngredient11 !== null ? <p>{recipe.strIngredient11}  {recipe.strMeasure11}</p>
            : ''}
            {recipe.strIngredient12 !== null ? <p>{recipe.strIngredient12}  {recipe.strMeasure12}</p>
            : ''}
            {recipe.strIngredient13 !== null ? <p>{recipe.strIngredient13}  {recipe.strMeasure13}</p>
            : ''}
            {recipe.strIngredient14 !== null ? <p>{recipe.strIngredient14}  {recipe.strMeasure14}</p>
            : ''}
            {recipe.strIngredient15 !== null ? <p>{recipe.strIngredient15}  {recipe.strMeasure15}</p>
            : ''}
            <div className={foodStyles.directions}>
            <h3>Directions</h3>
            {foodRecipe.map((i, idx) => 
            (<p>{idx + 1}: {i}</p>)
            )}
            </div>
        </div>
        </div>
    )
}

export default FoodRecipe;
