// src/components/IngredientsDialog.jsx
import React from 'react';

const IngredientsDialog = ({ ingredients, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Ingredients</h2>
        <ul className="mb-4">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2 border-2 bg-gray-200 rounded-md text-center p-1">
              {ingredient.text} - {ingredient.quantity}
            </li>
          ))}
        </ul>
        <button
          className="btn btn-secondary block w-full rounded-md bg-black p-2 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default IngredientsDialog;
