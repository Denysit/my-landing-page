import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className={styles.topContent}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.name}
      >
        {t("name")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.descInfo}
      >
        {t("descInfo")}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {t("info")}
      </motion.p>
      <motion.a
        href="https://t.me/den_fizika?text=Вітаю! Хочу записатись на тренування"
        target="_blank"
        className={styles.ctaButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {t("order")}
      </motion.a>
    </div>
  );
}
