// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.label}</h1>
      <img src={recipe.image} alt={recipe.label} className="mb-4 rounded-lg" />
      <p>{recipe.description}</p>
      {/* Add more detailed information about the recipe here */}
    </div>
  );
};

export default RecipeDetails;
