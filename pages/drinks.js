import React from "react";
import drinkStyles from '../styles/MainDrinkPage.module.css';
import {useState} from 'react'
import RandomCocktail from "../components/RandomCocktail";
import SearchByIngredient from "../components/SearchByIngredient";


const drinks = () => {

  const [currentPage, setCurrentPage] = useState('');


  
  return (
    <div className={drinkStyles.container}>
      <div className={drinkStyles.tabs}>
        <p onClick={() => setCurrentPage(1)}>tab One</p>
        <p onClick={() => setCurrentPage(2)}>Tab Two</p>
      </div>
      {currentPage === 1 ? <RandomCocktail /> : ''}
      {currentPage === 2 ? <SearchByIngredient /> : ''}
    </div>
  );
};




export default drinks;
