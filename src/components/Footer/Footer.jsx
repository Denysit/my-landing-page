import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <p>{t("footer")}</p>
      <p>
        © 2025 {t("name")}. {t("rights")}
      </p>
    </footer>
  );
}
