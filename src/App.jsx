import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Recipes from "./pages/Recipes";
import TopRated from "./pages/TopRated";
import UploadDish from "./pages/UploadDish";
import KitchenGuide from "./pages/KitchenGuide";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("english");
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallApp = async () => {
    if (!installPrompt) {
      alert("Install option is not available. Please open in Chrome browser.");
      return;
    }

    installPrompt.prompt();

    const result = await installPrompt.userChoice;

    if (result.outcome === "accepted") {
      setInstallPrompt(null);
      setShowInstall(false);
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
        <Route path="/dashboard" element={<Dashboard language={language} />} />
        <Route path="/search" element={<Search language={language} />} />
        <Route path="/recipes" element={<Recipes language={language} />} />
        <Route path="/top-rated" element={<TopRated language={language} />} />
        <Route path="/upload" element={<UploadDish language={language} />} />
        <Route path="/guide" element={<KitchenGuide language={language} />} />
        <Route path="/favorites" element={<Favorites language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/faq" element={<FAQ language={language} />} />
        <Route path="/privacy" element={<Privacy language={language} />} />
        <Route path="/terms" element={<Terms language={language} />} />
        <Route path="*" element={<NotFound language={language} />} />
      </Routes>

      <Footer language={language} />
    </div>
  );
}

export default App;