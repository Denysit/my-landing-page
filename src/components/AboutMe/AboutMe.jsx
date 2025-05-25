import { useTranslation } from "react-i18next";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="about" className={styles.section}>
      <h2>{t("aboutMe")}</h2>
      <p>{t("infoDesc")}</p>
    </section>
  );
}
