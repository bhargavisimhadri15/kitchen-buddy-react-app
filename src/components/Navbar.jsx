import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const text = {
    english: {
      home: "Home",
      recipes: "Recipes",
      upload: "Upload Dish",
      guide: "Kitchen Guide",
      favorites: "Favorites",
      about: "About",
      contact: "Contact"
    },
    telugu: {
      home: "హోమ్",
      recipes: "వంటకాలు",
      upload: "డిష్ అప్లోడ్",
      guide: "వంటగది గైడ్",
      favorites: "ఇష్టమైనవి",
      about: "గురించి",
      contact: "సంప్రదించండి"
    },
    hindi: {
      home: "होम",
      recipes: "रेसिपी",
      upload: "डिश अपलोड",
      guide: "किचन गाइड",
      favorites: "पसंदीदा",
      about: "जानकारी",
      contact: "संपर्क"
    }
  };

  const t = text[language] || text.english;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">🍳 Kitchen Buddy</div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>🏠 {t.home}</Link>
        <Link to="/recipes" onClick={closeMenu}>🍳 {t.recipes}</Link>
        <Link to="/upload" onClick={closeMenu}>📤 {t.upload}</Link>
        <Link to="/favorites" onClick={closeMenu}>❤️ {t.favorites}</Link>
        <Link to="/guide" onClick={closeMenu}>📚 {t.guide}</Link>
        <Link to="/about" onClick={closeMenu}>ℹ️ {t.about}</Link>
        <Link to="/contact" onClick={closeMenu}>📧 {t.contact}</Link>

        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="telugu">తెలుగు</option>
          <option value="hindi">हिन्दी</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;