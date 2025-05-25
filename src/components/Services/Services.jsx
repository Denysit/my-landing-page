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
            <strong>{t("pricePersonalTraining")}</strong>
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("onlineTraining")}</h3>
          <p>{t("onlineTrainingDesc")}</p>
          <p>
            <strong>{t("priceOnlineTraining")}</strong>
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("onlineConsultation")}</h3>
          <p>{t("onlineConsultationDesc")}</p>
          <p>
            <strong>{t("priceOnlineConsultation")}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
