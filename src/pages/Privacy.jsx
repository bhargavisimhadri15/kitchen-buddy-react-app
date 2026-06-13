function Privacy({ language }) {
  const text = {
    english: {
      title: "Privacy Policy",
      intro:
        "Kitchen Buddy respects your privacy. This app does not collect personal data.",
      points: [
        "No login or account required.",
        "Recipes uploaded by users are saved only in browser localStorage.",
        "We do not collect passwords, payment details, or personal information.",
        "YouTube links may open external websites.",
        "Clearing browser data may remove saved recipes and favorites."
      ]
    },
    telugu: {
      title: "గోప్యతా విధానం",
      intro:
        "Kitchen Buddy మీ గోప్యతను గౌరవిస్తుంది. ఈ యాప్ వ్యక్తిగత డేటాను సేకరించదు.",
      points: [
        "లాగిన్ లేదా ఖాతా అవసరం లేదు.",
        "మీరు అప్లోడ్ చేసిన వంటకాలు browser localStorage లో మాత్రమే సేవ్ అవుతాయి.",
        "మేము పాస్‌వర్డ్‌లు, పేమెంట్ వివరాలు లేదా వ్యక్తిగత సమాచారం సేకరించము.",
        "YouTube లింకులు బాహ్య వెబ్‌సైట్లకు తీసుకెళ్లవచ్చు.",
        "Browser data క్లియర్ చేస్తే saved recipes మరియు favorites తొలగిపోవచ్చు."
      ]
    },
    hindi: {
      title: "प्राइवेसी पॉलिसी",
      intro:
        "Kitchen Buddy आपकी privacy का सम्मान करता है। यह app personal data collect नहीं करता।",
      points: [
        "Login या account की जरूरत नहीं है।",
        "User uploaded recipes केवल browser localStorage में save होती हैं।",
        "हम passwords, payment details या personal information collect नहीं करते।",
        "YouTube links external websites खोल सकते हैं।",
        "Browser data clear करने से saved recipes और favorites delete हो सकते हैं।"
      ]
    }
  };

  const t = text[language] || text.english;

  return (
    <main className="policy-page">
      <section className="policy-hero">
        <h1>🔒 {t.title}</h1>
        <p>{t.intro}</p>
      </section>

      <section className="policy-card">
        <ul>
          {t.points.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Privacy;