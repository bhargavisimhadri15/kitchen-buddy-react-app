import React from "react";

function RecipeCard({
  recipe,
  language,
  onView,
  onEdit,
  onDelete,
}) {
  const name =
    recipe?.name?.[language] ||
    recipe?.name?.english ||
    "Recipe";

  const category =
    recipe?.category?.[language] ||
    recipe?.category?.english ||
    "Food";

  const difficulty =
    recipe?.difficulty?.[language] ||
    recipe?.difficulty?.english ||
    "Easy";

  const description =
    recipe?.description?.[language] ||
    recipe?.description?.english ||
    "";

  const isUploaded =
    recipe?.tags?.includes("user-uploaded");

  const addToFavorites = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

    const exists = favorites.find(
      (item) => item.id === recipe.id
    );

    if (exists) {
      alert("❤️ Already in Favorites");
      return;
    }

    localStorage.setItem(
      "favoriteRecipes",
      JSON.stringify([recipe, ...favorites])
    );

    alert("✅ Added to Favorites");
  };

  return (
    <div className="recipe-card">
      {recipe?.image ? (
        <img
          src={recipe.image}
          alt={name}
          className="recipe-image"
        />
      ) : (
        <div className="recipe-icon">
          🍽️
        </div>
      )}

      <div className="recipe-content">
        <span className="recipe-category">
          {category}
        </span>

        <h3>{name}</h3>

        {description && (
          <p className="recipe-description">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>
        )}

        <div className="recipe-meta">
          <span>⏱ {recipe?.time || "20 min"}</span>

          <span>
            👥 {recipe?.servings || 2}
          </span>

          <span>
            ⭐ {difficulty}
          </span>
        </div>

        <div className="recipe-buttons">
          <button
            className="view-btn"
            onClick={() => onView(recipe)}
          >
            👀 View
          </button>

          <button
            className="fav-btn"
            onClick={addToFavorites}
          >
            ❤️ Favorite
          </button>

          {recipe?.youtube && (
            <a
              href={recipe.youtube}
              target="_blank"
              rel="noreferrer"
              className="youtube-btn"
            >
              ▶️ Video
            </a>
          )}

          {isUploaded && (
            <>
              <button
                className="edit-btn"
                onClick={() =>
                  onEdit && onEdit(recipe)
                }
              >
                ✏️ Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  onDelete &&
                  onDelete(recipe.id)
                }
              >
                🗑 Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;