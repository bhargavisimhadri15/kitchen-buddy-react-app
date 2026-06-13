import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";
import RecipeForm from "../components/RecipeForm";

import breakfast from "../data/breakfast.json";
import lunch from "../data/lunch.json";
import dinner from "../data/dinner.json";
import snacks from "../data/snacks.json";
import drinks from "../data/drinks.json";
import desserts from "../data/desserts.json";
import healthy from "../data/healthy.json";

function Recipes({ language }) {
  const text = {
    english: {
      title: "Kitchen Recipes",
      appName: "Kitchen Buddy",
      subtitle: "Search, filter, view, edit, and delete your recipes.",
      search: "Search recipe...",
      category: "Category",
      found: "Recipes Found",
      noRecipes: "No recipes found",
      editTitle: "Edit Recipe",
      cancelEdit: "Cancel Edit",
      deleteConfirm: "Are you sure you want to delete this recipe?",
      deleteSuccess: "Recipe deleted successfully!"
    },
    telugu: {
      title: "కిచెన్ వంటకాలు",
      appName: "కిచెన్ బడీ",
      subtitle: "వంటకాలను వెతకండి, ఫిల్టర్ చేయండి, చూడండి, ఎడిట్ చేయండి మరియు డిలీట్ చేయండి.",
      search: "వంటకం వెతకండి...",
      category: "వర్గం",
      found: "వంటకాలు దొరికాయి",
      noRecipes: "వంటకాలు దొరకలేదు",
      editTitle: "వంటకం ఎడిట్ చేయండి",
      cancelEdit: "ఎడిట్ రద్దు చేయండి",
      deleteConfirm: "ఈ వంటకాన్ని డిలీట్ చేయాలనుకుంటున్నారా?",
      deleteSuccess: "వంటకం విజయవంతంగా డిలీట్ అయింది!"
    },
    hindi: {
      title: "किचन रेसिपी",
      appName: "किचन बडी",
      subtitle: "रेसिपी खोजें, फ़िल्टर करें, देखें, एडिट करें और डिलीट करें।",
      search: "रेसिपी खोजें...",
      category: "कैटेगरी",
      found: "रेसिपी मिलीं",
      noRecipes: "कोई रेसिपी नहीं मिली",
      editTitle: "रेसिपी एडिट करें",
      cancelEdit: "एडिट कैंसल करें",
      deleteConfirm: "क्या आप इस रेसिपी को डिलीट करना चाहते हैं?",
      deleteSuccess: "रेसिपी सफलतापूर्वक डिलीट हुई!"
    }
  };

  const categoryText = {
    english: {
      all: "All Categories",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
      snacks: "Snacks",
      drinks: "Drinks",
      desserts: "Desserts",
      healthy: "Healthy"
    },
    telugu: {
      all: "అన్ని వర్గాలు",
      breakfast: "అల్పాహారం",
      lunch: "మధ్యాహ్న భోజనం",
      dinner: "రాత్రి భోజనం",
      snacks: "స్నాక్స్",
      drinks: "పానీయాలు",
      desserts: "డెజర్ట్స్",
      healthy: "ఆరోగ్యకరమైనవి"
    },
    hindi: {
      all: "सभी कैटेगरी",
      breakfast: "नाश्ता",
      lunch: "दोपहर का भोजन",
      dinner: "रात का खाना",
      snacks: "स्नैक्स",
      drinks: "पेय",
      desserts: "मिठाई",
      healthy: "हेल्दी"
    }
  };

  const t = text[language] || text.english;
  const ct = categoryText[language] || categoryText.english;

  const categories = [
    { value: "All", label: `🍽️ ${ct.all}` },
    { value: "Breakfast", label: `🍳 ${ct.breakfast}` },
    { value: "Lunch", label: `🍛 ${ct.lunch}` },
    { value: "Dinner", label: `🍚 ${ct.dinner}` },
    { value: "Snacks", label: `🥟 ${ct.snacks}` },
    { value: "Drinks", label: `☕ ${ct.drinks}` },
    { value: "Desserts", label: `🍰 ${ct.desserts}` },
    { value: "Healthy", label: `🥗 ${ct.healthy}` }
  ];

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editRecipe, setEditRecipe] = useState(null);

  const loadRecipes = () => {
    const uploadedRecipes =
      JSON.parse(localStorage.getItem("kitchenRecipes")) || [];

    const allRecipes = [
      ...uploadedRecipes,
      ...breakfast,
      ...lunch,
      ...dinner,
      ...snacks,
      ...drinks,
      ...desserts,
      ...healthy
    ];

    setRecipes(allRecipes);
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  const deleteRecipe = (id) => {
    const confirmDelete = window.confirm(t.deleteConfirm);

    if (!confirmDelete) return;

    const uploadedRecipes =
      JSON.parse(localStorage.getItem("kitchenRecipes")) || [];

    const updatedRecipes = uploadedRecipes.filter(
      (recipe) => recipe.id !== id
    );

    localStorage.setItem(
      "kitchenRecipes",
      JSON.stringify(updatedRecipes)
    );

    loadRecipes();
    alert(t.deleteSuccess);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeName =
      recipe.name?.[language] ||
      recipe.name?.english ||
      "";

    const recipeCategory =
      recipe.category?.english ||
      recipe.category ||
      "";

    const matchesSearch = recipeName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipeCategory === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="recipes-page">
      <section className="recipes-hero">
        <span className="recipes-badge">🍽️ {t.appName}</span>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      {editRecipe && (
        <section className="edit-section">
          <h2>✏️ {t.editTitle}</h2>

          <RecipeForm
            language={language}
            editRecipe={editRecipe}
            onFinish={() => {
              setEditRecipe(null);
              loadRecipes();
            }}
          />

          <button
            className="cancel-btn"
            onClick={() => setEditRecipe(null)}
          >
            {t.cancelEdit}
          </button>
        </section>
      )}

      <section className="recipes-filter-card">
        <div className="search-wrapper">
          <span>🔍</span>
          <input
            type="text"
            placeholder={t.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-wrapper">
          <label>{t.category}</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="recipes-count">
        <p>
          🍳 {filteredRecipes.length} {t.found}
        </p>
      </section>

      {filteredRecipes.length === 0 ? (
        <section className="empty-recipes">
          <h2>😕</h2>
          <p>{t.noRecipes}</p>
        </section>
      ) : (
        <section className="recipe-grid beautiful-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              language={language}
              onView={setSelectedRecipe}
              onEdit={setEditRecipe}
              onDelete={deleteRecipe}
            />
          ))}
        </section>
      )}

      <RecipeDetails
        recipe={selectedRecipe}
        language={language}
        onClose={() => setSelectedRecipe(null)}
      />
    </main>
  );
}

export default Recipes;