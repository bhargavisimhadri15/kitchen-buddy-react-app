import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import UploadDish from "./pages/UploadDish";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("english");
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handleInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
    };
  }, []);

  const handleInstallApp = async () => {
    if (!installPrompt) {
      alert("Install option is not ready. Open in Chrome and try again.");
      return;
    }

    installPrompt.prompt();

    const result = await installPrompt.userChoice;

    if (result.outcome === "accepted") {
      setShowInstall(false);
      setInstallPrompt(null);
    }
  };

  return (
    <div className="app">
      <Navbar language={language} setLanguage={setLanguage} />

      {showInstall && (
        <button className="install-app-btn" onClick={handleInstallApp}>
          📲 Install App
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/recipes" element={<Recipes language={language} />} />
        <Route path="/upload" element={<UploadDish language={language} />} />
      </Routes>
    </div>
  );
}

export default App;