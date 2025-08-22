import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  const { t } = useTranslation();
  return (
    <section id="social" className={styles.section}>
      <h2>{t("social")}</h2>
      <div className={styles.socialLinks}>
        <motion.a
          href="https://www.instagram.com/den.fizika"
          whileHover={{ scale: 1.1, color: "#cc0000" }}
          transition={{ duration: 0.3 }}
          className={styles.socialLink}
        >
          {t("instagram")}
          <img
            src="Instagram_icon-icons.com_66804.svg"
            alt="Instagram"
            className={styles.icon}
          />
        </motion.a>
        <motion.a
          href="https://www.tiktok.com/@den.fizika"
          whileHover={{ scale: 1.1, color: "#cc0000" }}
          transition={{ duration: 0.3 }}
          className={styles.socialLink}
        >
          {t("tiktok")}
          <img
            src="tiktok_logo_icon_188431.svg"
            alt="TikTok"
            className={styles.icon}
          />
        </motion.a>
        <motion.a
          href="https://t.me/c/2100399484/134"
          whileHover={{ scale: 1.1, color: "#cc0000" }}
          transition={{ duration: 0.3 }}
          className={styles.socialLink}
        >
          {t("telegram")}
          <img
            src="telegram_logo_icon_147228.svg"
            alt="Telegram"
            className={styles.icon}
          />
        </motion.a>
      </div>
    </section>
  );
}
