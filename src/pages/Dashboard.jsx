import { useEffect, useState } from "react";

function Dashboard({ language }) {
  const [stats, setStats] = useState({
    uploads: 0,
    favorites: 0,
    total: 0
  });

  const text = {
    english: {
      title: "Dashboard",
      subtitle: "Quick overview of your Kitchen Buddy app.",
      uploads: "Uploaded Recipes",
      favorites: "Favorite Recipes",
      total: "Total Saved Items"
    },
    telugu: {
      title: "డాష్‌బోర్డ్",
      subtitle: "మీ Kitchen Buddy యాప్ యొక్క త్వరిత సమాచారం.",
      uploads: "అప్లోడ్ చేసిన వంటకాలు",
      favorites: "ఇష్టమైన వంటకాలు",
      total: "మొత్తం సేవ్ చేసినవి"
    },
    hindi: {
      title: "डैशबोर्ड",
      subtitle: "आपके Kitchen Buddy app की quick overview.",
      uploads: "अपलोड की गई रेसिपी",
      favorites: "पसंदीदा रेसिपी",
      total: "कुल सेव आइटम"
    }
  };

  const t = text[language] || text.english;

  useEffect(() => {
    const uploaded = JSON.parse(localStorage.getItem("kitchenRecipes")) || [];
    const favorites = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

    setStats({
      uploads: uploaded.length,
      favorites: favorites.length,
      total: uploaded.length + favorites.length
    });
  }, []);

  return (
    <main className="dashboard-page">
      <section className="dashboard-hero">
        <h1>📊 {t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <span>📤</span>
          <h2>{stats.uploads}</h2>
          <p>{t.uploads}</p>
        </div>

        <div className="dashboard-card">
          <span>❤️</span>
          <h2>{stats.favorites}</h2>
          <p>{t.favorites}</p>
        </div>

        <div className="dashboard-card">
          <span>🍳</span>
          <h2>{stats.total}</h2>
          <p>{t.total}</p>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;