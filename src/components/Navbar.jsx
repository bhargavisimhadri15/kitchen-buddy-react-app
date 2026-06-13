import { Link } from "react-router-dom";

function Navbar({ language, setLanguage, darkMode, setDarkMode }) {
  const text = {
    english: {
      appName: "Kitchen Buddy",
      home: "Home",
      recipes: "Recipes",
      upload: "Upload Dish",
      guide: "Kitchen Guide",
      about: "About",
      dark: "Dark",
      light: "Light"
    },
    telugu: {
      appName: "కిచెన్ బడ్డీ",
      home: "హోమ్",
      recipes: "వంటకాలు",
      upload: "వంటకం అప్లోడ్",
      guide: "వంటగది గైడ్",
      about: "గురించి",
      dark: "డార్క్",
      light: "లైట్"
    },
    hindi: {
      appName: "किचन बडी",
      home: "होम",
      recipes: "रेसिपी",
      upload: "डिश अपलोड",
      guide: "किचन गाइड",
      about: "जानकारी",
      dark: "डार्क",
      light: "लाइट"
    }
  };

  const t = text[language] || text.english;

  return (
    <nav className="navbar">
      <h2>🍳 {t.appName}</h2>

      <div className="nav-links">
        <Link to="/">{t.home}</Link>
        <Link to="/recipes">{t.recipes}</Link>
        <Link to="/upload">{t.upload}</Link>
        <Link to="/guide">{t.guide}</Link>
        <Link to="/about">{t.about}</Link>
      </div>

      <div className="nav-actions">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="english">English</option>
          <option value="telugu">తెలుగు</option>
          <option value="hindi">हिन्दी</option>
        </select>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? `☀️ ${t.light}` : `🌙 ${t.dark}`}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;