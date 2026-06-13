import { useState } from "react";

function RecipeDetails({ recipe, language, onClose }) {
  const [seconds, setSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);

  if (!recipe) return null;

  const text = {
    english: {
      ingredients: "Ingredients",
      instructions: "Instructions",
      video: "Watch Recipe Video",
      read: "Read Instructions",
      timer: "Start 1 Min Timer",
      timerText: "Timer",
      finished: "Timer completed!"
    },
    telugu: {
      ingredients: "పదార్థాలు",
      instructions: "సూచనలు",
      video: "వంట వీడియో చూడండి",
      read: "సూచనలు వినండి",
      timer: "1 నిమిషం టైమర్ ప్రారంభించండి",
      timerText: "టైమర్",
      finished: "టైమర్ పూర్తయింది!"
    },
    hindi: {
      ingredients: "सामग्री",
      instructions: "निर्देश",
      video: "रेसिपी वीडियो देखें",
      read: "निर्देश सुनें",
      timer: "1 मिनट टाइमर शुरू करें",
      timerText: "टाइमर",
      finished: "टाइमर पूरा हुआ!"
    }
  };

  const t = text[language] || text.english;

  const name = recipe.name?.[language] || recipe.name?.english || "Recipe";
  const category =
    recipe.category?.[language] || recipe.category?.english || "Food";
  const description =
    recipe.description?.[language] || recipe.description?.english || "";
  const difficulty =
    recipe.difficulty?.[language] || recipe.difficulty?.english || "Easy";

  const ingredients =
    recipe.ingredients?.[language] || recipe.ingredients?.english || [];

  const instructions =
    recipe.instructions?.[language] || recipe.instructions?.english || [];

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";

    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/
    );

    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  const youtubeEmbedUrl = getYoutubeEmbedUrl(recipe.youtube);

  const speakInstructions = () => {
    const textToRead = instructions.join(". ");

    if (!textToRead) {
      alert("No instructions available.");
      return;
    }

    const speech = new SpeechSynthesisUtterance(textToRead);

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
    if (timerRunning) return;

    setTimerRunning(true);
    setSeconds(60);

    let timeLeft = 60;

    const interval = setInterval(() => {
      timeLeft -= 1;
      setSeconds(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimerRunning(false);
        setSeconds(60);
        alert(t.finished);
      }
    }, 1000);
  };

  const stopVoice = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div className="recipe-overlay">
      <div className="recipe-details">
        <button
          className="close-btn"
          onClick={() => {
            stopVoice();
            onClose();
          }}
        >
          ✕
        </button>

        {recipe.image ? (
          <img src={recipe.image} alt={name} />
        ) : (
          <div className="recipe-details-icon">🍽️</div>
        )}

        <h1 className="recipe-title">{name}</h1>

        {description && (
          <p className="recipe-details-description">{description}</p>
        )}

        <div className="recipe-meta">
          <span>📂 {category}</span>
          <span>⏱ {recipe.time || "20 min"}</span>
          <span>👥 {recipe.servings || 2}</span>
          <span>⭐ {difficulty}</span>
        </div>

        {youtubeEmbedUrl && (
          <div className="recipe-section">
            <h3>▶️ {t.video}</h3>

            <iframe
              className="youtube-frame"
              src={youtubeEmbedUrl}
              title={name}
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="recipe-section">
          <h3>🥬 {t.ingredients}</h3>

          {ingredients.length > 0 ? (
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients added.</p>
          )}
        </div>

        <div className="recipe-section">
          <h3>👨‍🍳 {t.instructions}</h3>

          {instructions.length > 0 ? (
            <ol>
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>No instructions added.</p>
          )}
        </div>

        <div className="details-actions">
          <button onClick={speakInstructions}>🔊 {t.read}</button>

          <button onClick={startTimer} disabled={timerRunning}>
            ⏲️ {t.timer}
          </button>

          <button onClick={stopVoice}>🔇 Stop Voice</button>

          <p>
            {t.timerText}: {seconds}s
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;