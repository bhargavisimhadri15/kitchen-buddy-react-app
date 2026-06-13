import RecipeForm from "../components/RecipeForm";

function UploadDish({ language }) {
  const text = {
    english: {
      badge: "Upload Recipe",
      title: "Upload Your Own Dish",
      subtitle:
        "Add dish name, category, cooking time, servings, difficulty, image URL, YouTube link, ingredients, and instructions."
    },
    telugu: {
      badge: "వంటకం అప్లోడ్",
      title: "మీ వంటకాన్ని అప్లోడ్ చేయండి",
      subtitle:
        "వంటకం పేరు, వర్గం, వంట సమయం, సర్వింగ్స్, కష్టం స్థాయి, చిత్రం URL, YouTube లింక్, పదార్థాలు మరియు సూచనలు జోడించండి."
    },
    hindi: {
      badge: "रेसिपी अपलोड",
      title: "अपनी डिश अपलोड करें",
      subtitle:
        "डिश नाम, कैटेगरी, कुकिंग टाइम, सर्विंग्स, कठिनाई, इमेज URL, YouTube लिंक, सामग्री और निर्देश जोड़ें।"
    }
  };

  const t = text[language] || text.english;

  return (
    <main className="upload-page">
      <section className="upload-hero">
        <span className="upload-badge">📤 {t.badge}</span>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <section className="upload-form-section">
        <RecipeForm language={language} />
      </section>
    </main>
  );
}

export default UploadDish;