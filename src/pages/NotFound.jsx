function NotFound({ language }) {
  const text = {
    english: {
      title: "Page Not Found",
      subtitle: "Oops! The page you are looking for does not exist.",
      button: "Go Home"
    },
    telugu: {
      title: "పేజీ కనబడలేదు",
      subtitle: "క్షమించండి! మీరు వెతుకుతున్న పేజీ అందుబాటులో లేదు.",
      button: "హోమ్‌కు వెళ్లండి"
    },
    hindi: {
      title: "पेज नहीं मिला",
      subtitle: "क्षमा करें! आप जिस पेज को खोज रहे हैं वह उपलब्ध नहीं है।",
      button: "होम पर जाएं"
    }
  };

  const t = text[language] || text.english;

  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <h1>404</h1>

        <h2>{t.title}</h2>

        <p>{t.subtitle}</p>

        <a href="/" className="home-btn">
          🏠 {t.button}
        </a>
      </div>
    </div>
  );
}

export default NotFound;