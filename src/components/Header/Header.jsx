import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

export default function Header({
  setDropdownOpen,
  dropdownOpen,
  setMenuOpen,
  menuOpen,
  dropdownRef,
  menuToggleRef,
}) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.languageSwitcher} ref={dropdownRef}>
        <div
          className={styles.languageCurrent}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {i18n.language === "uk" ? "UA" : "UK"}
        </div>
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              className={styles.languageDropdown}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => changeLanguage("uk")}
                className={`${styles.languageOption} ${
                  i18n.language === "uk" ? styles.active : ""
                }`}
              >
                UA
              </div>
              <div
                onClick={() => changeLanguage("en")}
                className={`${styles.languageOption} ${
                  i18n.language === "en" ? styles.active : ""
                }`}
              >
                UK
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={menuToggleRef}
      >
        <img src="/public/icons8-menu.svg" alt="Menu" />
      </div>
    </div>
  );
}
