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

function TopRated({ language }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const text = {
    english: {
      title: "Top Rated Recipes",
      subtitle: "Explore popular and recommended recipes."
    },
    telugu: {
      title: "టాప్ రేటెడ్ వంటకాలు",
      subtitle: "ప్రసిద్ధ మరియు సిఫార్సు చేసిన వంటకాలను చూడండి."
    },
    hindi: {
      title: "टॉप रेटेड रेसिपी",
      subtitle: "लोकप्रिय और recommended recipes देखें।"
    }
  };

  const t = text[language] || text.english;

  useEffect(() => {
    const uploaded =
      JSON.parse(localStorage.getItem("kitchenRecipes")) || [];

    const allRecipes = [
      ...uploaded,
      ...breakfast,
      ...lunch,
      ...dinner,
      ...snacks,
      ...drinks,
      ...desserts,
      ...healthy
    ];

    setRecipes(allRecipes.slice(0, 12));
  }, []);

  return (
    <main className="top-rated-page">
      <section className="top-rated-hero">
        <h1>⭐ {t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <section className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            language={language}
            onView={setSelectedRecipe}
          />
        ))}
      </section>

      <RecipeDetails
        recipe={selectedRecipe}
        language={language}
        onClose={() => setSelectedRecipe(null)}
      />
    </main>
  );
}

export default TopRated;