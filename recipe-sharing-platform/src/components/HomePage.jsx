import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          key={recipe.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
