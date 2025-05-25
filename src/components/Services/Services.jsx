import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

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
      <motion.button
        className={styles.selectButton}
        onClick={toggleForm}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {t("selectTraining")}
      </motion.button>
      {showForm && (
        <div className={styles.formContainer}>
          <h3>{t("contactFormTitle")}</h3>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe-vUO-H3hPiBAI6s7unqltsqfet9PhdVObNMWqGTY4zvNq0A/viewform?embedded=true"
            className={styles.formIframe}
            title={t("contactFormTitle")}
          ></iframe>
        </div>
      )}
    </section>
  );
}
