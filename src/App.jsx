import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import UploadDish from "./pages/UploadDish";
import KitchenGuide from "./pages/KitchenGuide";
import About from "./pages/About";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("english");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/recipes" element={<Recipes language={language} />} />
        <Route path="/upload" element={<UploadDish language={language} />} />
        <Route path="/guide" element={<KitchenGuide language={language} />} />
        <Route path="/about" element={<About language={language} />} />
      </Routes>
    </div>
  );
}

export default App;