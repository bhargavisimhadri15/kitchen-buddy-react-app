function Terms({ language }) {
  const text = {
    english: {
      title: "Terms & Conditions",
      intro:
        "By using Kitchen Buddy, you agree to the following terms and conditions.",
      points: [
        "Kitchen Buddy is for educational and personal use.",
        "Users are responsible for recipes they upload.",
        "Recipe information should be verified before cooking.",
        "We are not responsible for food allergies or health issues.",
        "YouTube videos belong to their respective creators.",
        "Users must not upload harmful or inappropriate content."
      ]
    },

    telugu: {
      title: "నిబంధనలు & షరతులు",
      intro:
        "Kitchen Buddy ఉపయోగించడం ద్వారా మీరు ఈ నిబంధనలను అంగీకరిస్తారు.",
      points: [
        "Kitchen Buddy విద్యా మరియు వ్యక్తిగత ఉపయోగం కోసం రూపొందించబడింది.",
        "అప్లోడ్ చేసిన వంటకాల బాధ్యత వినియోగదారులదే.",
        "వంటకు ముందు వంటక వివరాలను ధృవీకరించండి.",
        "ఆహార అలర్జీలు లేదా ఆరోగ్య సమస్యలకు మేము బాధ్యత వహించము.",
        "YouTube వీడియోలు వాటి యజమానుల సొత్తు.",
        "హానికరమైన లేదా అనుచిత కంటెంట్ అప్లోడ్ చేయరాదు."
      ]
    },

    hindi: {
      title: "नियम और शर्तें",
      intro:
        "Kitchen Buddy का उपयोग करके आप इन नियमों और शर्तों से सहमत होते हैं।",
      points: [
        "Kitchen Buddy केवल शिक्षा और व्यक्तिगत उपयोग के लिए है।",
        "अपलोड की गई recipes की जिम्मेदारी उपयोगकर्ता की होगी।",
        "खाना बनाने से पहले recipe जानकारी की पुष्टि करें।",
        "Food allergies या health issues के लिए हम जिम्मेदार नहीं हैं।",
        "YouTube वीडियो उनके मालिकों की संपत्ति हैं।",
        "हानिकारक या अनुचित सामग्री अपलोड नहीं करनी चाहिए।"
      ]
    }
  };

  const t = text[language] || text.english;

  return (
    <main className="terms-page">
      <section className="terms-hero">
        <h1>📜 {t.title}</h1>
        <p>{t.intro}</p>
      </section>

      <section className="terms-card">
        <ul>
          {t.points.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Terms;