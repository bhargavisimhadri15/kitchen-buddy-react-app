import React from "react";

function About({ language }) {
  const content = {
    english: {
      title: "About Kitchen Buddy",
      subtitle:
        "A smart multilingual cooking assistant built with React.js.",
      creator: "Created By",
      creatorName: "Bhargavi Simhadri",
      purpose: "Project Purpose",
      purposeText:
        "Kitchen Buddy helps users discover recipes, upload dishes, manage favorites, learn kitchen basics, watch recipe videos, and cook with voice-guided instructions.",
      tech: "Technology Stack",
      features: "Main Features"
    },

    telugu: {
      title: "కిచెన్ బడ్డీ గురించి",
      subtitle:
        "React.js తో రూపొందించిన బహుభాషా వంట సహాయక యాప్.",
      creator: "రూపొందించినవారు",
      creatorName: "Bhargavi Simhadri",
      purpose: "ప్రాజెక్ట్ ఉద్దేశ్యం",
      purposeText:
        "Kitchen Buddy వినియోగదారులకు వంటకాలు నేర్చుకోవడం, డిష్‌లు అప్లోడ్ చేయడం, ఇష్టమైన వంటకాలు సేవ్ చేయడం మరియు వాయిస్ సూచనలతో వంట చేయడంలో సహాయపడుతుంది.",
      tech: "టెక్నాలజీ స్టాక్",
      features: "ప్రధాన ఫీచర్లు"
    },

    hindi: {
      title: "किचन बडी के बारे में",
      subtitle:
        "React.js से बनाया गया एक स्मार्ट मल्टी-लैंग्वेज कुकिंग ऐप।",
      creator: "निर्माता",
      creatorName: "Bhargavi Simhadri",
      purpose: "प्रोजेक्ट उद्देश्य",
      purposeText:
        "Kitchen Buddy उपयोगकर्ताओं को रेसिपी सीखने, डिश अपलोड करने, पसंदीदा रेसिपी सेव करने और वॉइस निर्देशों के साथ खाना बनाने में मदद करता है।",
      tech: "टेक्नोलॉजी स्टैक",
      features: "मुख्य फीचर्स"
    }
  };

  const t = content[language] || content.english;

  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-badge">🍳 Kitchen Buddy</span>

        <h1>{t.title}</h1>

        <p>{t.subtitle}</p>
      </section>

      <section className="about-container">
        <div className="about-card">
          <h2>👩‍💻 {t.creator}</h2>
          <p>{t.creatorName}</p>
        </div>

        <div className="about-card">
          <h2>🎯 {t.purpose}</h2>
          <p>{t.purposeText}</p>
        </div>

        <div className="about-card">
          <h2>🛠️ {t.tech}</h2>

          <ul>
            <li>React.js</li>
            <li>React Router DOM</li>
            <li>JavaScript (ES6)</li>
            <li>HTML5 & CSS3</li>
            <li>Local JSON Database</li>
            <li>localStorage CRUD</li>
            <li>PWA Support</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>✨ {t.features}</h2>

          <ul>
            <li>🍳 Recipe Management</li>
            <li>📤 Upload Dish</li>
            <li>✏️ Edit Recipes</li>
            <li>🗑️ Delete Recipes</li>
            <li>❤️ Favorites</li>
            <li>🔍 Recipe Search</li>
            <li>🌍 English / Telugu / Hindi</li>
            <li>🎥 YouTube Videos</li>
            <li>🔊 Voice Instructions</li>
            <li>⏲️ Cooking Timer</li>
            <li>📲 Install App (PWA)</li>
            <li>💾 Offline Support</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🚀 Project Vision</h2>

          <p>
            Kitchen Buddy aims to provide an easy-to-use cooking
            platform for everyone. Users can learn recipes,
            organize their favorite dishes, and access cooking
            guidance anytime, even without an internet connection.
          </p>
        </div>

        <div className="about-card">
          <h2>📌 Version</h2>

          <p>Kitchen Buddy v1.0.0</p>

          <p>
            Created with React.js by Bhargavi Simhadri © 2026
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;