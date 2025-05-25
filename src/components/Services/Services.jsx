import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useTranslation();
  return (
    <section id="services" className={styles.section}>
      <h2>{t("Services")}</h2>
      <div className={styles.servicesList}>
        <div className={styles.serviceCard}>
          <h3>{t("personalTraining")}</h3>
          <p>{t("personalTrainingDesc")}</p>
          <p>
            <strong>{t("price")}</strong> 350 грн/заняття
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("onlineTraining")}</h3>
          <p>{t("onlineTrainingDesc")}</p>
          <p>
            <strong>{t("price")}</strong> 200 грн/заняття
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("onlineConsultation")}</h3>
          <p>{t("onlineConsultationDesc")}</p>
          <p>
            <strong>{t("price")}</strong> 800 грн
          </p>
        </div>
      </div>
    </section>
  );
}
