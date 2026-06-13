import { useState } from "react";

function RecipeDetails({ recipe, language, onClose }) {
  const text = {
    english: {
      ingredients: "Ingredients",
      instructions: "Cooking Instructions",
      nutrition: "Nutrition",
      recipeVideo: "Recipe Video",
      youtube: "Watch on YouTube",
      readSteps: "Read Instructions",
      timer: "Start 1 Min Timer",
      timerText: "Timer",
      finished: "Cooking timer finished!"
    },
    telugu: {
      ingredients: "పదార్థాలు",
      instructions: "వంట సూచనలు",
      nutrition: "పోషక విలువలు",
      recipeVideo: "వంట వీడియో",
      youtube: "YouTube లో చూడండి",
      readSteps: "సూచనలు వినండి",
      timer: "1 నిమిషం టైమర్ ప్రారంభించండి",
      timerText: "టైమర్",
      finished: "వంట టైమర్ పూర్తయింది!"
    },
    hindi: {
      ingredients: "सामग्री",
      instructions: "खाना बनाने के निर्देश",
      nutrition: "पोषण",
      recipeVideo: "रेसिपी वीडियो",
      youtube: "YouTube पर देखें",
      readSteps: "निर्देश सुनें",
      timer: "1 मिनट टाइमर शुरू करें",
      timerText: "टाइमर",
      finished: "कुकिंग टाइमर खत्म हुआ!"
    }
  };

  const t = text[language] || text.english;
  const [seconds, setSeconds] = useState(60);

  if (!recipe) return null;

  const name = recipe.name?.[language] || recipe.name?.english || recipe.name;

  const category =
    recipe.category?.[language] || recipe.category?.english || recipe.category;

  const difficulty =
    recipe.difficulty?.[language] ||
    recipe.difficulty?.english ||
    recipe.difficulty;

  const description =
    recipe.description?.[language] ||
    recipe.description?.english ||
    recipe.description ||
    "";

  const ingredients =
    recipe.ingredients?.[language] ||
    recipe.ingredients?.english ||
    recipe.ingredients ||
    [];

  const instructions =
    recipe.instructions?.[language] ||
    recipe.steps?.[language] ||
    recipe.instructions?.english ||
    recipe.steps?.english ||
    recipe.instructions ||
    recipe.steps ||
    [];

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";

    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/;

    const match = url.match(regExp);

    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  const youtubeEmbedUrl = getYoutubeEmbedUrl(recipe.youtube || recipe.video);

  const speakInstructions = () => {
    const speechText = instructions.join(". ");
    const speech = new SpeechSynthesisUtterance(speechText);

    speech.lang =
      language === "telugu"
        ? "te-IN"
        : language === "hindi"
        ? "hi-IN"
        : "en-US";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const startTimer = () => {
    let timeLeft = 60;
    setSeconds(timeLeft);

    const interval = setInterval(() => {
      timeLeft -= 1;
      setSeconds(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        alert(t.finished);
        setSeconds(60);
      }
    }, 1000);
  };

  return (
    <div className="details-overlay">
      <div className="details-box">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>{name}</h2>

        <div className="details-meta">
          <span>{category}</span>
          <span>⏱ {recipe.time}</span>
          <span>👥 {recipe.servings || 2}</span>
          <span>⭐ {difficulty}</span>
        </div>

        {description && <p className="recipe-description">{description}</p>}

        {recipe.image && (
          <img className="details-img" src={recipe.image} alt={name} />
        )}

        {youtubeEmbedUrl && (
          <div className="youtube-container">
            <h3>🎥 {t.recipeVideo}</h3>

            <iframe
              src={youtubeEmbedUrl}
              title={name}
              allowFullScreen
            ></iframe>

            <a
              className="youtube-link"
              href={recipe.youtube || recipe.video}
              target="_blank"
              rel="noreferrer"
            >
              ▶ {t.youtube}
            </a>
          </div>
        )}

        {recipe.videoLink && (
          <a
            className="video-link"
            href={recipe.videoLink}
            target="_blank"
            rel="noreferrer"
          >
            🎬 {t.recipeVideo}
          </a>
        )}

        {recipe.video && !youtubeEmbedUrl && (
          <video controls className="details-video">
            <source src={recipe.video} />
          </video>
        )}

        <h3>{t.ingredients}</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t.instructions}</h3>
        <ol>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        {recipe.nutrition && (
          <div className="nutrition-box">
            <h3>{t.nutrition}</h3>
            <p>Calories: {recipe.nutrition.calories}</p>
            <p>Protein: {recipe.nutrition.protein}</p>
            <p>Carbs: {recipe.nutrition.carbs}</p>
            <p>Fat: {recipe.nutrition.fat}</p>
          </div>
        )}

        <div className="details-actions">
          <button onClick={speakInstructions}>🔊 {t.readSteps}</button>
          <button onClick={startTimer}>⏲️ {t.timer}</button>
          <p>
            {t.timerText}: {seconds}s
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;