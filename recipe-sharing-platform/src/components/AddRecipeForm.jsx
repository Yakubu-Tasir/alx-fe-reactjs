import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError("All fields are required");
      return;
    }

    const ingredientsList = ingredients.split(",").filter(item => item.trim() !== "");

    if (ingredientsList.length < 2) {
      setError("Please enter at least two ingredients");
      return;
    }

    setError("");
    console.log({
      title,
      ingredients: ingredientsList,
      instructions,
    });

    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Recipe
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 mb-1">Ingredients</label>
          <textarea
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients separated by commas"
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 mb-1">Preparation Steps</label>
          <textarea
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter preparation instructions"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
