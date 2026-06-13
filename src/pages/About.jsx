function About({ language }) {
  const text = {
    english: {
      title: "About Kitchen Buddy",
      desc: "Kitchen Buddy is a React.js cooking guide app for beginners, students, bachelors, and people living away from home. It supports recipes, videos, image upload, ratings, favorites, voice reading, timer, and multiple languages."
    },
    telugu: {
      title: "కిచెన్ బడ్డీ గురించి",
      desc: "కిచెన్ బడ్డీ ఒక React.js వంట గైడ్ యాప్. ఇది ప్రారంభకులు, విద్యార్థులు మరియు ఇంటి నుండి దూరంగా ఉన్నవారికి వంట నేర్చుకోవడంలో సహాయపడుతుంది."
    },
    hindi: {
      title: "किचन बडी के बारे में",
      desc: "किचन बडी एक React.js कुकिंग गाइड ऐप है। यह शुरुआती लोगों, छात्रों और घर से दूर रहने वाले लोगों को खाना बनाना सीखने में मदद करता है।"
    }
  };

  const t = text[language] || text.english;

  return (
    <main className="page">
      <h1>{t.title}</h1>

      <div className="about-text">
        <p>{t.desc}</p>
      </div>
    </main>
  );
}

export default About;