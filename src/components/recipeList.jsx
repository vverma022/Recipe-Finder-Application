import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IngredientsDialog from './IngredientsDialog';

const RecipeList = ({ recipe }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleIngredientsClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleViewRecipeClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  if (!recipe) {
    return (
      <div className="flex justify-center pt-2 p-2">
        <div className="border border-gray-300 rounded-lg p-4 max-w-xs bg-white shadow-lg text-center">
          <h1 className="text-xl font-bold mb-4">No Recipe Selected</h1>
          <p className="mb-4">Please search for a recipe to view details.</p>
          <button className="btn btn-primary block w-full rounded-md bg-green-500 p-2 text-white">
            SEARCH RECIPES
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-2 p-2">
      <div className="border border-gray-300 rounded-lg p-4 max-w-xs bg-white shadow-lg">
        <img
          src={recipe.image || 'https://via.placeholder.com/150'}
          alt={recipe.label || 'Recipe Image'}
          className="mx-auto mb-4 rounded-lg"
        />
        <h1 className="text-center font-bold mb-2 text-xl">
          {recipe.label || 'Recipe Name'}
        </h1>
        <div className="text-center space-y-2">
          <button
            className="btn btn-primary block w-full mb-2 rounded-md bg-green-500 p-2 text-white"
            onClick={handleIngredientsClick}
          >
            INGREDIENTS
          </button>
          <button
            className="btn btn-secondary block w-full rounded-md bg-black p-2 text-white"
            onClick={handleViewRecipeClick}
          >
            VIEW RECIPE
          </button>
        </div>
      </div>

      <IngredientsDialog
        ingredients={recipe.ingredients}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default RecipeList;
