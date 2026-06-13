import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";

function Favorites({ language }) {
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((recipe) => recipe.id !== id);
    localStorage.setItem("favoriteRecipes", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <main className="page">
      <h1>❤️ Favorite Recipes</h1>

      <div className="recipe-grid">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              language={language}
              onView={setSelectedRecipe}
              onDelete={removeFavorite}
            />
          ))
        ) : (
          <p>No favorite recipes yet.</p>
        )}
      </div>

      <RecipeDetails
        recipe={selectedRecipe}
        language={language}
        onClose={() => setSelectedRecipe(null)}
      />
    </main>
  );
}

export default Favorites;