import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";

import breakfast from "../data/breakfast.json";
import lunch from "../data/lunch.json";
import dinner from "../data/dinner.json";
import snacks from "../data/snacks.json";
import drinks from "../data/drinks.json";
import desserts from "../data/desserts.json";
import healthy from "../data/healthy.json";

function Search({ language }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const text = {
    english: {
      title: "Search Recipes",
      subtitle: "Find your favorite recipes quickly.",
      placeholder: "Search recipe name...",
      noResult: "No recipes found."
    },
    telugu: {
      title: "వంటకాలు వెతకండి",
      subtitle: "మీకు నచ్చిన వంటకాలను త్వరగా కనుగొనండి.",
      placeholder: "వంటకం పేరు వెతకండి...",
      noResult: "వంటకాలు దొరకలేదు."
    },
    hindi: {
      title: "रेसिपी खोजें",
      subtitle: "अपनी पसंदीदा रेसिपी जल्दी खोजें।",
      placeholder: "रेसिपी नाम खोजें...",
      noResult: "कोई रेसिपी नहीं मिली."
    }
  };

  const t = text[language] || text.english;

  useEffect(() => {
    const uploaded =
      JSON.parse(localStorage.getItem("kitchenRecipes")) || [];

    setRecipes([
      ...uploaded,
      ...breakfast,
      ...lunch,
      ...dinner,
      ...snacks,
      ...drinks,
      ...desserts,
      ...healthy
    ]);
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const name =
      recipe.name?.[language] ||
      recipe.name?.english ||
      "";

    return name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="search-page">
      <section className="search-hero">
        <h1>🔍 {t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <section className="search-box-section">
        <input
          type="text"
          placeholder={t.placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              language={language}
              onView={setSelectedRecipe}
            />
          ))
        ) : (
          <p className="empty-text">{t.noResult}</p>
        )}
      </section>

      <RecipeDetails
        recipe={selectedRecipe}
        language={language}
        onClose={() => setSelectedRecipe(null)}
      />
    </main>
  );
}

export default Search;