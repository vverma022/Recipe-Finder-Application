const RecipeList = ({ recipe }) => {
  if (!recipe) {
    return null; // Or some kind of placeholder/loading indicator
  }

  return (
    <div className="flex justify-center pt-2 p-2 ">
      <div className="border border-gray-300 rounded-lg p-4 max-w-xs bg-white shadow-lg">
        <img
          src={recipe.image || 'https://via.placeholder.com/150'}
          alt={recipe.label || 'Recipe Image'}
          className="mx-auto mb-4 rounded-lg"
        />
        <h1 className="text-center font-bold mb-2 text-xl">{recipe.label || 'Recipe Name'}</h1>
        <div className="text-center space-y-2">
          <button className="btn btn-primary block w-full mb-2 rounded-md bg-green-500 p-2 text-white">INGREDIENTS</button>
          <button className="btn btn-secondary block w-full rounded-md bg-black p-2 text-white">VIEW RECIPE </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
