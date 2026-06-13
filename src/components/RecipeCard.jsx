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
            {description.length > 80
              ? `${description.substring(0, 80)}...`
              : description}
          </p>
        )}

        <div className="recipe-meta">
          <span>⏱ {recipe?.time}</span>
          <span>
            👥 {recipe?.servings || 2}
          </span>
          <span>⭐ {difficulty}</span>
        </div>

        <div className="recipe-buttons">
          <button
            className="view-btn"
            onClick={() => onView(recipe)}
          >
            👀 View Recipe
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
                onClick={() => onEdit(recipe)}
              >
                ✏️ Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
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