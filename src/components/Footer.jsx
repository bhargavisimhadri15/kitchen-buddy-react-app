import { Link } from "react-router-dom";

function Footer({ language }) {
  const text = {
    english: {
      desc: "Learn, create, and manage recipes offline.",
      dashboard: "Dashboard",
      search: "Search",
      topRated: "Top Rated",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms"
    },
    telugu: {
      desc: "ఆఫ్‌లైన్‌లో వంటకాలను నేర్చుకోండి, సృష్టించండి మరియు నిర్వహించండి.",
      dashboard: "డాష్‌బోర్డ్",
      search: "వెతకండి",
      topRated: "టాప్ రేటెడ్",
      faq: "ప్రశ్నలు",
      privacy: "గోప్యతా విధానం",
      terms: "నిబంధనలు"
    },
    hindi: {
      desc: "ऑफलाइन रेसिपी सीखें, बनाएं और मैनेज करें।",
      dashboard: "डैशबोर्ड",
      search: "खोजें",
      topRated: "टॉप रेटेड",
      faq: "FAQ",
      privacy: "प्राइवेसी पॉलिसी",
      terms: "नियम"
    }
  };

  const t = text[language] || text.english;

  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>🍳 Kitchen Buddy</h2>
        <p>{t.desc}</p>
      </div>

      <div className="footer-links">
        <Link to="/dashboard">📊 {t.dashboard}</Link>
        <Link to="/search">🔍 {t.search}</Link>
        <Link to="/top-rated">⭐ {t.topRated}</Link>
        <Link to="/faq">❓ {t.faq}</Link>
        <Link to="/privacy">🔒 {t.privacy}</Link>
        <Link to="/terms">📜 {t.terms}</Link>
      </div>

      <p className="footer-copy">
        🍳 Kitchen Buddy | Created with React.js by Bhargavi Simhadri © 2026
      </p>
    </footer>
  );
}

export default Footer;