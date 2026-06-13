import { Link } from "react-router-dom";

function Home({ language }) {
  const content = {
    english: {
      badge: "Beginner Friendly Cooking App",
      title: "Cook Smarter with Kitchen Buddy",
      subtitle:
        "Learn recipes, kitchen tools, ingredients, cooking videos, voice steps, and useful cooking tips in a simple way.",
      explore: "Explore Recipes",
      upload: "Upload Dish",
      recipes: "Recipes",
      tips: "Cooking Tips",
      languages: "Languages",
      offline: "Offline Help",
      categories: "Popular Categories",
      features: "Smart Features",
      cookingTips: "Daily Cooking Tips",
      reviews: "User Reviews",
      ratingsCard: "⭐ Ratings",
      voiceGuideCard: "🔊 Voice Guide",
      appName: "Kitchen Buddy",
      ctaTitle: "Ready to start cooking?",
      ctaText: "Explore simple recipes and learn cooking step by step today.",
      start: "Start Cooking Now"
    },

    telugu: {
      badge: "ప్రారంభకుల కోసం వంట యాప్",
      title: "కిచెన్ బడ్డీతో స్మార్ట్‌గా వంట చేయండి",
      subtitle:
        "వంటకాలు, వంటగది వస్తువులు, పదార్థాలు, వీడియోలు, వాయిస్ సూచనలు మరియు వంట చిట్కాలను సులబంగా నేర్చుకోండి.",
      explore: "వంటకాలను పరిశీలించండి",
      upload: "వంటకం అప్లోడ్ చేయండి",
      recipes: "వంటకాలు",
      tips: "వంట చిట్కాలు",
      languages: "భాషలు",
      offline: "ఆఫ్‌లైన్ సహాయం",
      categories: "ప్రసిద్ధ వర్గాలు",
      features: "స్మార్ట్ ఫీచర్లు",
      cookingTips: "రోజువారీ వంట చిట్కாలు",
      reviews: "యూజర్ రివ్ยూడబన்நு",
      ratingsCard: "⭐ రేటింగ్స్",
      voiceGuideCard: "🔊వాయిస్ దశలు",
      appName: "కిచెన్ బడ్డీ",
      ctaTitle: "వంట ప్రారంభించడానికి సిద్ధమా?",
      ctaText: "సులభమైన వంటకాలను దశలవారీగా నేర్చుకోండి.",
      start: "ఇప్పుడే వంట ప్రారంభించండి"
    },

    hindi: {
      badge: "शुरुआती लोगों के लिए कुकिंग ऐप",
      title: "किचन बडी के साथ स्मार्ट कुकिंग करें",
      subtitle:
        "रेसिपी, किचन टूल्स, सामग्री, वीडियो, वॉइस स्टेप्स और कुकिंग टिप्स आसानी से सीखें।",
      explore: "रेसिपी देखें",
      upload: "डिश अपलोड करें",
      recipes: "रेसिपी",
      tips: "कुकिंग टिप्स",
      languages: "भाषाएँ",
      offline: "ऑफ़लाइन मदद",
      categories: "लोकप्रिय कैटेगरी",
      features: "स्मार्ट फीचर्स",
      cookingTips: "डेली कुकिंग टिप्स",
      reviews: "यूज़र रिव्यू",
      ratingsCard: "⭐ रेटिंग्स",
      voiceGuideCard: "🔊 वॉइस गाइड",
      appName: "किचन बड्डी",
      ctaTitle: "कुकिंग शुरू करने के लिए तैयार हैं?",
      ctaText: "आसान रेसिपी सीखें और स्टेप-बाय-स्टेप कुक करें।",
      start: "अभी कुकिंग शुरू करें"
    }
  };

  const t = content[language] || content.english;

  const getLocalizedTitle = (title, appName) => title.replace("{appName}", appName);

  const categories = {
    english: ["🍳 Breakfast", "🍛 Lunch", "🍚 Dinner", "☕ Drinks", "🥗 Healthy", "🍰 Desserts"],
    telugu: ["🍳 అల్పాహారం", "🍛 మధ్యాహ్న భోజనం", "🍚 రాత్రి భోజనం", "☕ పానీయాలు", "🥗 ఆరోగ్యకరమైన ఆహారం", "🍰 డెజర్ట్స్"],
    hindi: ["🍳 नाश्ता", "🍛 दोपहर का खाना", "🍚 रात का खाना", "☕ पेय", "🥗 हेल्दी फूड", "🍰 मिठाई"]
  };

  const features = {
    english: [
      ["📹", "Video Recipes", "Upload or watch dish preparation videos."],
      ["🔊", "Voice Steps", "Listen to cooking instructions while cooking."],
      ["❤️", "Favorites", "Save your favorite dishes for later."],
      ["⭐", "Ratings", "Rate recipes and improve your cooking list."],
      ["⏲️", "Cooking Timer", "Use timer for better preparation."],
      ["🌙", "Dark Mode", "Comfortable cooking guide at night."]
    ],
    telugu: [
      ["📹", "వీడియో వంటకాలు", "వంట వీడియోలు అప్లోడ్ చేయండి లేదా చూడండి."],
      ["🔊", "వాయిస్ దశలు", "వంట చేస్తూ సూచనలు వినండి."],
      ["❤️", "ఇష్టమైనవి", "మీకు నచ్చిన వంటకాలను సేవ్ చేయండి."],
      ["⭐", "రేటింగ్స్", "వంటకాలకు రేటింగ్ ఇవ్వండి."],
      ["⏲️", "వంట టైమర్", "మంచి వంట కోసం టైమర్ ఉపయోగించండి."],
      ["🌙", "డార్క్ మోడ్", "రాత్రి సౌకర్యంగా ఉపయోగించండి."]
    ],
    hindi: [
      ["📹", "वीडियो रेसिपी", "डिश बनाने के वीडियो अपलोड या देखें."],
      ["🔊", "वॉइस स्टेप्स", "कुकिंग करते समय निर्देश सुनें."],
      ["❤️", "फेवरेट्स", "अपनी पसंदीदा रेसिपी सेव करें."],
      ["⭐", "रेटिंग्स", "रेसिपी को रेट करें."],
      ["⏲️", "कुकिंग टाइमर", "बेहतर तैयारी के लिए टाइमर उपयोग करें."],
      ["🌙", "डार्क मोड", "रात में आराम से उपयोग करें."]
    ]
  };

  const tips = {
    english: [
      "💡 Add salt slowly. You can add more, but you cannot remove extra salt.",
      "💡 Wash vegetables before cutting to keep nutrients.",
      "💡 Keep all ingredients ready before starting cooking."
    ],
    telugu: [
      "💡 ఉప్పు కొంచెం కొంచెంగా వేయండి. ఎక్కువైతే తీసేయలేరు.",
      "💡 పోషకాలు ఉండేందుకు కూరగాయలను కోయే ముందు కడగండి.",
      "💡 వంట మొదలుపెట్టే ముందు అన్ని పదార్థాలు సిద్ధం చేసుకోండి."
    ],
    hindi: [
      "💡 नमक धीरे-धीरे डालें। ज्यादा नमक निकालना मुश्किल होता है.",
      "💡 पोषक तत्वों के लिए सब्जियों को काटने से पहले धोएं.",
      "💡 खाना शुरू करने से पहले सभी सामग्री तैयार रखें."
    ]
  };

  const reviews = {
    english: [
      ["Very useful for beginners!", "- Student"],
      ["Simple steps and easy to understand.", "- Bachelor"],
      ["Voice guide is very helpful while cooking.", "- New Cook"]
    ],
    telugu: [
      ["ప్రారంభకులకు చాలా ఉపయోగకరం!", "- విద్యార్థి"],
      ["సులభమైన దశలు, అర్థం చేసుకోవడం సులభం.", "- బ్యాచిలర్"],
      ["వంట చేస్తూ వాయిస్ గైడ్ చాలా ఉపయోగపడుతుంది.", "- కొత్త కుక్"]
    ],
    hindi: [
      ["शुरुआती लोगों के लिए बहुत उपयोगी!", "- छात्र"],
      ["सरल स्टेप्स और समझने में आसान.", "- बैचलर"],
      ["कुकिंग के समय वॉइस गाइड बहुत मददगार है.", "- नया कुक"]
    ]
  };

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-left">
          <span className="hero-badge">🍳 {t.badge}</span>

          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>

          <div className="hero-buttons">
            <Link to="/recipes" className="primary-btn">
              🔍 {t.explore}
            </Link>

            <Link to="/upload" className="secondary-btn">
              📹 {t.upload}
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="food-card big-card">
            <span>🍛</span>
            
            <p>{t.subtitle}</p>
          </div>

          <div className="floating-card card-one">{t.ratingsCard}</div>
          <div className="floating-card card-two">{t.voiceGuideCard}</div>
          <div className="floating-card card-three">🌍 {t.languages}</div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>100+</h2>
          <p>{t.recipes}</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>{t.tips}</p>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <p>{t.languages}</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>{t.offline}</p>
        </div>
      </section>

      <section className="home-section">
        <h2>{t.categories}</h2>

        <div className="category-grid">
          {(categories[language] || categories.english).map((item, index) => (
            <div className="category-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2>{t.features}</h2>

        <div className="feature-grid">
          {(features[language] || features.english).map((item, index) => (
            <div className="feature-card" key={index}>
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tips-section">
        <h2>{t.cookingTips}</h2>

        <div className="tips-grid">
          {(tips[language] || tips.english).map((tip, index) => (
            <div className="tip-card" key={index}>
              {tip}
            </div>
          ))}
        </div>
      </section>

      <section className="review-section">
        <h2>{t.reviews}</h2>

        <div className="review-grid">
          {(reviews[language] || reviews.english).map((review, index) => (
            <div className="review-card" key={index}>
              <p>⭐⭐⭐⭐⭐</p>
              <h3>{review[0]}</h3>
              <span>{review[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>

        <Link to="/recipes" className="cta-btn">
          {t.start} 🚀
        </Link>
      </section>
    </main>
  );
}

export default Home;