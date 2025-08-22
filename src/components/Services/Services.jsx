import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useTranslation();

  const serviceMapping = {
    personal: "Персональне тренування",
    online: "Онлайн тренування",
    onlineConsultation: "Онлайн-консультація",
  };

  // функція для відкриття Telegram з готовим повідомленням
  const handleBooking = (service) => {
    const message = encodeURIComponent(
      `Вітаю! Хочу записатись на: ${serviceMapping[service]}`
    );
    const telegramUsername = "den_fizika"; // твій username без @
    window.open(`https://t.me/${telegramUsername}?text=${message}`, "_blank");
  };

  return (
    <section id="services" className={styles.section}>
      <h2>{t("Services")}</h2>
      <div className={styles.servicesList}>
        {/* Персональне тренування */}
        <div className={styles.serviceCard}>
          <h3>{t("personalTraining")}</h3>
          <p>{t("personalTrainingDesc")}</p>
          <p>
            <strong>{t("pricePersonalTraining")}</strong>
          </p>
          <motion.button
            className={styles.selectButton}
            onClick={() => handleBooking("personal")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t("selectTraining")}
          </motion.button>
        </div>

        {/* Онлайн тренування */}
        <div className={styles.serviceCard}>
          <h3>{t("onlineTraining")}</h3>
          <p>{t("onlineTrainingDesc")}</p>
          <p>
            <strong>{t("priceOnlineTraining")}</strong>
          </p>
          <motion.button
            className={styles.selectButton}
            onClick={() => handleBooking("online")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t("selectTraining")}
          </motion.button>
        </div>

        {/* Онлайн консультація */}
        <div className={styles.serviceCard}>
          <h3>{t("onlineConsultation")}</h3>
          <p>{t("onlineConsultationDesc")}</p>
          <p>
            <strong>{t("priceOnlineConsultation")}</strong>
          </p>
          <motion.button
            className={styles.selectButton}
            onClick={() => handleBooking("onlineConsultation")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t("selectTraining")}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
