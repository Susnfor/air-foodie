import './App.css';
import Recipe from './Recipe';
import Data from './data/recipes.json';
import React, {useEffect, useState} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const recipes = Data.recipes


  return (
    <div className="App">
      <header className='logo-name'>
        <h1>Air Foodie 🍱</h1>
        <form className='search-form'>
        <input className='search-bar' type='text' placeholder='Type in recipe name' onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className='search-button' type='button'>Search</button>
        </form>
      </header>
      <div className='recipe-list'>
        {recipes
  .filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .map(recipe=>(
        <Recipe 
        key={recipe.name} 
        name= {recipe.name} 
        servingTime={recipe.serving_size} 
        cookTime={recipe.cook_time}  
        prepTime={recipe.prep_time}  
        ingredients={recipe.ingredients}  
        instructions={recipe.instructions} 
        />
        ))}

      </div>
    </div>
  );
}

export default App;
