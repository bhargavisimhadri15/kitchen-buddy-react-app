import { Link } from "react-router-dom";

function Home({ language }) {
  const text = {
    english: {
      badge: "Offline Cooking Helper",
      title: "Kitchen Buddy",
      subtitle:
        "Learn recipes, kitchen tools, ingredients, cooking steps, videos, voice instructions, and tips easily.",
      explore: "Explore Recipes",
      upload: "Upload Dish",
      featuresTitle: "Kitchen Buddy Features",
      recipes: "Recipes",
      recipesDesc: "Explore delicious recipes with simple instructions.",
      multi: "Multi Language",
      multiDesc: "Use the app in English, Telugu, and Hindi.",
      uploadTitle: "Upload Dish",
      uploadDesc: "Create, edit, and manage your own recipes.",
      favorites: "Favorites",
      favoritesDesc: "Save your favorite recipes for quick access.",
      voice: "Voice Guide",
      voiceDesc: "Listen to cooking instructions step by step.",
      install: "Install App",
      installDesc: "Use Kitchen Buddy like a mobile app."
    },

    telugu: {
      badge: "ఆఫ్‌లైన్ వంట సహాయకుడు",
      title: "కిచెన్ బడ్డీ",
      subtitle:
        "వంటకాలు, వంటగది వస్తువులు, పదార్థాలు, వంట దశలు, వీడియోలు, వాయిస్ సూచనలు మరియు చిట్కాలను సులభంగా నేర్చుకోండి.",
      explore: "వంటకాలు చూడండి",
      upload: "వంటకం అప్లోడ్ చేయండి",
      featuresTitle: "కిచెన్ బడ్డీ ఫీచర్లు",
      recipes: "వంటకాలు",
      recipesDesc: "సులభమైన సూచనలతో రుచికరమైన వంటకాలను చూడండి.",
      multi: "బహుభాషా",
      multiDesc: "English, Telugu, Hindi భాషల్లో యాప్ ఉపయోగించండి.",
      uploadTitle: "డిష్ అప్లోడ్",
      uploadDesc: "మీ వంటకాలను సృష్టించండి, ఎడిట్ చేయండి మరియు నిర్వహించండి.",
      favorites: "ఇష్టమైనవి",
      favoritesDesc: "మీకు నచ్చిన వంటకాలను సేవ్ చేసుకోండి.",
      voice: "వాయిస్ గైడ్",
      voiceDesc: "వంట సూచనలను దశలవారీగా వినండి.",
      install: "యాప్ ఇన్‌స్టాల్",
      installDesc: "Kitchen Buddy ని మొబైల్ యాప్‌లా ఉపయోగించండి."
    },

    hindi: {
      badge: "ऑफलाइन कुकिंग हेल्पर",
      title: "किचन बडी",
      subtitle:
        "रेसिपी, किचन टूल्स, सामग्री, कुकिंग स्टेप्स, वीडियो, वॉइस निर्देश और टिप्स आसानी से सीखें।",
      explore: "रेसिपी देखें",
      upload: "डिश अपलोड करें",
      featuresTitle: "किचन बडी फीचर्स",
      recipes: "रेसिपी",
      recipesDesc: "आसान निर्देशों के साथ स्वादिष्ट रेसिपी देखें।",
      multi: "मल्टी लैंग्वेज",
      multiDesc: "ऐप को English, Telugu और Hindi में उपयोग करें।",
      uploadTitle: "डिश अपलोड",
      uploadDesc: "अपनी रेसिपी बनाएं, एडिट करें और मैनेज करें।",
      favorites: "पसंदीदा",
      favoritesDesc: "अपनी पसंदीदा रेसिपी सेव करें।",
      voice: "वॉइस गाइड",
      voiceDesc: "कुकिंग निर्देश स्टेप-बाय-स्टेप सुनें।",
      install: "ऐप इंस्टॉल",
      installDesc: "Kitchen Buddy को मोबाइल ऐप की तरह उपयोग करें।"
    }
  };

  const t = text[language] || text.english;

  const features = [
    {
      icon: "🍳",
      title: t.recipes,
      desc: t.recipesDesc
    },
    {
      icon: "🌍",
      title: t.multi,
      desc: t.multiDesc
    },
    {
      icon: "📤",
      title: t.uploadTitle,
      desc: t.uploadDesc
    },
    {
      icon: "❤️",
      title: t.favorites,
      desc: t.favoritesDesc
    },
    {
      icon: "🔊",
      title: t.voice,
      desc: t.voiceDesc
    },
    {
      icon: "📲",
      title: t.install,
      desc: t.installDesc
    }
  ];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-left">
          <span className="hero-badge">🍽️ {t.badge}</span>

          <h1>🍳 {t.title}</h1>

          <p>{t.subtitle}</p>

          <div className="hero-buttons">
            <Link to="/recipes" className="primary-btn">
              {t.explore}
            </Link>

            <Link to="/upload" className="secondary-btn">
              {t.upload}
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="food-card big-card">
            <span>🍛</span>
            <h3>{t.title}</h3>
            <p>Offline • Recipes • Voice • Videos</p>
          </div>

          <div className="floating-card card-one">⭐ Ratings</div>
          <div className="floating-card card-two">🔊 Voice Guide</div>
          <div className="floating-card card-three">🌍 Languages</div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Recipes</p>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <p>Languages</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>React.js</p>
        </div>

        <div className="stat-card">
          <h2>Offline</h2>
          <p>localStorage</p>
        </div>
      </section>

      <section className="features-section">
        <h2>✨ {t.featuresTitle}</h2>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>

        <Link to="/recipes" className="cta-btn">
          {t.explore}
        </Link>
      </section>
    </main>
  );
}

export default Home;