import { useEffect, useState } from "react";

function RecipeForm({ language, editRecipe, onFinish }) {
  const [form, setForm] = useState({
    englishName: "",
    teluguName: "",
    hindiName: "",
    category: "Breakfast",
    time: "",
    servings: "",
    difficulty: "Easy",
    image: "",
    youtube: "",
    ingredientsEnglish: "",
    ingredientsTelugu: "",
    ingredientsHindi: "",
    instructionsEnglish: "",
    instructionsTelugu: "",
    instructionsHindi: ""
  });

  useEffect(() => {
    if (editRecipe) {
      setForm({
        englishName: editRecipe.name?.english || "",
        teluguName: editRecipe.name?.telugu || "",
        hindiName: editRecipe.name?.hindi || "",
        category: editRecipe.category?.english || "Breakfast",
        time: editRecipe.time || "",
        servings: editRecipe.servings || "",
        difficulty: editRecipe.difficulty?.english || "Easy",
        image: editRecipe.image || "",
        youtube: editRecipe.youtube || "",
        ingredientsEnglish: editRecipe.ingredients?.english?.join("\n") || "",
        ingredientsTelugu: editRecipe.ingredients?.telugu?.join("\n") || "",
        ingredientsHindi: editRecipe.ingredients?.hindi?.join("\n") || "",
        instructionsEnglish:
          editRecipe.instructions?.english?.join("\n") || "",
        instructionsTelugu:
          editRecipe.instructions?.telugu?.join("\n") || "",
        instructionsHindi: editRecipe.instructions?.hindi?.join("\n") || ""
      });
    }
  }, [editRecipe]);

  const categoryTranslations = {
    Breakfast: { english: "Breakfast", telugu: "అల్పాహారం", hindi: "नाश्ता" },
    Lunch: { english: "Lunch", telugu: "మధ్యాహ్న భోజనం", hindi: "दोपहर का भोजन" },
    Dinner: { english: "Dinner", telugu: "రాత్రి భోజనం", hindi: "रात का खाना" },
    Snacks: { english: "Snacks", telugu: "స్నాక్స్", hindi: "स्नैक्स" },
    Drinks: { english: "Drinks", telugu: "పానీయాలు", hindi: "पेय" },
    Desserts: { english: "Desserts", telugu: "డెజర్ట్స్", hindi: "मिठाई" },
    Healthy: { english: "Healthy", telugu: "ఆరోగ్యకరమైనది", hindi: "हेल्दी" }
  };

  const difficultyTranslations = {
    Easy: { english: "Easy", telugu: "సులువు", hindi: "आसान" },
    Medium: { english: "Medium", telugu: "మధ్యస్థం", hindi: "मध्यम" },
    Hard: { english: "Hard", telugu: "కష్టం", hindi: "कठिन" }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipeData = {
      id: editRecipe ? editRecipe.id : Date.now(),

      name: {
        english: form.englishName,
        telugu: form.teluguName || form.englishName,
        hindi: form.hindiName || form.englishName
      },

      category: categoryTranslations[form.category],

      description: {
        english: `${form.englishName} recipe.`,
        telugu: `${form.teluguName || form.englishName} వంటకం.`,
        hindi: `${form.hindiName || form.englishName} रेसिपी।`
      },

      time: form.time,
      servings: Number(form.servings) || 2,
      difficulty: difficultyTranslations[form.difficulty],
      image: form.image,
      youtube: form.youtube,

      ingredients: {
        english: form.ingredientsEnglish.split("\n").filter(Boolean),
        telugu: form.ingredientsTelugu.split("\n").filter(Boolean),
        hindi: form.ingredientsHindi.split("\n").filter(Boolean)
      },

      instructions: {
        english: form.instructionsEnglish.split("\n").filter(Boolean),
        telugu: form.instructionsTelugu.split("\n").filter(Boolean),
        hindi: form.instructionsHindi.split("\n").filter(Boolean)
      },

      tags: ["user-uploaded", form.category.toLowerCase()]
    };

    const oldRecipes = JSON.parse(localStorage.getItem("kitchenRecipes")) || [];

    let updatedRecipes;

    if (editRecipe) {
      updatedRecipes = oldRecipes.map((recipe) =>
        recipe.id === editRecipe.id ? recipeData : recipe
      );
    } else {
      updatedRecipes = [recipeData, ...oldRecipes];
    }

    localStorage.setItem("kitchenRecipes", JSON.stringify(updatedRecipes));

    alert(editRecipe ? "Recipe updated!" : "Recipe saved!");

    setForm({
      englishName: "",
      teluguName: "",
      hindiName: "",
      category: "Breakfast",
      time: "",
      servings: "",
      difficulty: "Easy",
      image: "",
      youtube: "",
      ingredientsEnglish: "",
      ingredientsTelugu: "",
      ingredientsHindi: "",
      instructionsEnglish: "",
      instructionsTelugu: "",
      instructionsHindi: ""
    });

    if (onFinish) onFinish();
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <input required placeholder="Dish Name English" value={form.englishName} onChange={(e) => setForm({ ...form, englishName: e.target.value })} />
      <input placeholder="Dish Name Telugu" value={form.teluguName} onChange={(e) => setForm({ ...form, teluguName: e.target.value })} />
      <input placeholder="Dish Name Hindi" value={form.hindiName} onChange={(e) => setForm({ ...form, hindiName: e.target.value })} />

      <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
        {Object.keys(categoryTranslations).map((cat) => (
          <option key={cat} value={cat}>
            {categoryTranslations[cat][language] || cat}
          </option>
        ))}
      </select>

      <input required placeholder="Cooking Time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
      <input type="number" placeholder="Servings" value={form.servings} onChange={(e) => setForm({ ...form, servings: e.target.value })} />

      <select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <input placeholder="YouTube Link" value={form.youtube} onChange={(e) => setForm({ ...form, youtube: e.target.value })} />

      <textarea required placeholder="Ingredients English" value={form.ingredientsEnglish} onChange={(e) => setForm({ ...form, ingredientsEnglish: e.target.value })} />
      <textarea placeholder="Ingredients Telugu" value={form.ingredientsTelugu} onChange={(e) => setForm({ ...form, ingredientsTelugu: e.target.value })} />
      <textarea placeholder="Ingredients Hindi" value={form.ingredientsHindi} onChange={(e) => setForm({ ...form, ingredientsHindi: e.target.value })} />

      <textarea required placeholder="Instructions English" value={form.instructionsEnglish} onChange={(e) => setForm({ ...form, instructionsEnglish: e.target.value })} />
      <textarea placeholder="Instructions Telugu" value={form.instructionsTelugu} onChange={(e) => setForm({ ...form, instructionsTelugu: e.target.value })} />
      <textarea placeholder="Instructions Hindi" value={form.instructionsHindi} onChange={(e) => setForm({ ...form, instructionsHindi: e.target.value })} />

      <button type="submit">
        {editRecipe ? "Update Recipe" : "Save Recipe"}
      </button>
    </form>
  );
}

export default RecipeForm;