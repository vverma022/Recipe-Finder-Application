import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './recipeList';  // Adjust the path as necessary

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipe = async (query) => {
    if (query) {
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=9aaaf56f&app_key=b62aab3e440ee952b03bf137ff0d40d8`
        );
        setRecipes(response.data.hits); // Ensure hits contains the recipe data
        console.log(response.data.hits);
      } catch (error) {
        console.error('Error fetching the recipes:', error);
      }
    }
  };

  useEffect(() => {
    if (searchTerm) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        fetchRecipe(searchTerm);
      }, 500);
      setTimeoutId(newTimeoutId);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <header className="bg-black text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Recipe App</h1>
        <input
          className="text-center text-black p-1 rounded-lg"
          placeholder="Enter the Recipe"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </header>
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipeData, index) => (
          <RecipeList key={index} recipe={recipeData.recipe} />
        ))}
      </div>
    </div>
  );
};

export default Header;
