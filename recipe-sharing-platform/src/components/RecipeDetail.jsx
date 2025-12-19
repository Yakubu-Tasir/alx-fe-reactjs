import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-20">Recipe not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">
        ← Back
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        {/* ingredients */}
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* instructions */}
        <h3 className="text-xl font-semibold mb-2">Instructions</h3>
        <p className="text-gray-600">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
