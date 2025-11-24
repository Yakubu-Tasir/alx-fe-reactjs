import { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Run filtering whenever searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes]);

  const listToDisplay =
    searchTerm.trim() !== "" ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>

      {listToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        listToDisplay.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
