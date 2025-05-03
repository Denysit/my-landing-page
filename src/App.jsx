import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.style.setProperty(
      "--primary-bg",
      theme === "dark" ? "#fff" : "#000"
    );
    document.documentElement.style.setProperty(
      "--primary-text",
      theme === "dark" ? "#000" : "#fff"
    );
    document.documentElement.style.setProperty(
      "--button-bg",
      theme === "dark" ? "#f9f9f9" : "#1a1a1a"
    );
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="switchers">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
          >
            {theme === "dark" ? t("lightTheme") : t("darkTheme")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => changeLanguage("uk")}
          >
            Українська
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => changeLanguage("en")}
          >
            English
          </motion.button>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("name")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t("info")}
        </motion.p>
        <motion.a
          href="https://www.tiktok.com/@den.fizika"
          whileHover={{ scale: 1.1, color: "#cc0000" }}
          transition={{ duration: 0.3 }}
        >
          {t("tiktok")}
        </motion.a>
        <motion.a
          href="https://t.me/c/2100399484/134"
          whileHover={{ scale: 1.1, color: "#cc0000" }}
          transition={{ duration: 0.3 }}
        >
          {t("telegram")}
        </motion.a>
        <motion.a
          href="/guide.pdf"
          download
          whileHover={{ scale: 1.1, color: "#cc0000" }}
          transition={{ duration: 0.3 }}
        >
          {t("download")}
        </motion.a>
      </div>
    </div>
  );
}

export default App;
