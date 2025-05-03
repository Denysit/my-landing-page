import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const menuToggleRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container">
      <div className="top-bar">
        <div className="language-switcher" ref={dropdownRef}>
          <div
            className="language-current"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {i18n.language === "uk" ? "UA" : "UK"}
          </div>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className="language-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  onClick={() => changeLanguage("uk")}
                  className={`language-option ${
                    i18n.language === "uk" ? "active" : ""
                  }`}
                >
                  UA
                </div>
                <div
                  onClick={() => changeLanguage("en")}
                  className={`language-option ${
                    i18n.language === "en" ? "active" : ""
                  }`}
                >
                  UK
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Меню справа */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          ref={menuToggleRef}
        >
          <img
            src="/public/menu-three-outlined-rounded-lines-symbol_icon-icons.com_73215.svg"
            alt="Menu"
          />
        </div>
      </div>

      {/* Sidebar menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={sidebarRef}
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="sidebar-list">
              <li>{t("aboutMe")}</li>
              <li>{t("pricing")}</li>
              <li>{t("courses")}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`content ${menuOpen ? "blurred" : ""}`}>
        <div className="top_content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="name"
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
        </div>

        <motion.a
          href="https://www.instagram.com/direct/new/?to=den.fizika"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {t("order")}
        </motion.a>

        <div className="social-links">
          <motion.a
            href="https://www.instagram.com/den.fizika/?igsh=eGxlaGVlZTltbTI1#"
            whileHover={{ scale: 1.1, color: "#cc0000" }}
            transition={{ duration: 0.3 }}
            className="social-link"
          >
            {t("instagram")}
            <img
              src="/public/Instagram_icon-icons.com_66804.svg"
              alt="Instagram"
              className="icon"
            />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@den.fizika"
            whileHover={{ scale: 1.1, color: "#cc0000" }}
            transition={{ duration: 0.3 }}
            className="social-link"
          >
            {t("tiktok")}
            <img
              src="/public/tiktok_logo_icon_188431.svg"
              alt="TikTok"
              className="icon"
            />
          </motion.a>

          <motion.a
            href="https://t.me/c/2100399484/134"
            whileHover={{ scale: 1.1, color: "#cc0000" }}
            transition={{ duration: 0.3 }}
            className="social-link"
          >
            {t("telegram")}
            <img
              src="/public/telegram_logo_icon_147228.svg"
              alt="Telegram"
              className="icon"
            />
          </motion.a>
        </div>

        <motion.a
          href="/guide.pdf"
          download
          whileHover={{ scale: 1.1, color: "#cc0000" }}
          transition={{ duration: 0.3 }}
          className="download-button"
        >
          {t("download")}
        </motion.a>
      </div>
    </div>
  );
}

export default App;
