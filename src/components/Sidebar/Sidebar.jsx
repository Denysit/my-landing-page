import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Sidebar.module.css";

export default function Sidebar({ menuOpen, setMenuOpen, sidebarRef }) {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          ref={sidebarRef}
          className={styles.sidebar}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <ul className={styles.sidebarList}>
            <li onClick={() => scrollToSection("about")}>{t("aboutMe")}</li>
            <li onClick={() => scrollToSection("services")}>{t("Services")}</li>
            <li onClick={() => scrollToSection("calculator")}>
              {t("calculator")}
            </li>
            <li onClick={() => scrollToSection("social")}>{t("social")}</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
