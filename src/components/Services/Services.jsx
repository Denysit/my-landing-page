import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // Мапінг значень selectedService до значень Google Forms
  const serviceMapping = {
    personal: "Персональне+тренування",
    online: "Онлайн+тренування",
    onlineConsultation: "Онлайн-консультація",
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService("");
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
          <motion.button
            className={styles.selectButton}
            onClick={() => openModal("personal")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t("selectTraining")}
          </motion.button>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("onlineTraining")}</h3>
          <p>{t("onlineTrainingDesc")}</p>
          <p>
            <strong>{t("priceOnlineTraining")}</strong>
          </p>
          <motion.button
            className={styles.selectButton}
            onClick={() => openModal("online")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t("selectTraining")}
          </motion.button>
        </div>
        <div className={styles.serviceCard}>
          <h3>{t("onlineConsultation")}</h3>
          <p>{t("onlineConsultationDesc")}</p>
          <p>
            <strong>{t("priceOnlineConsultation")}</strong>
          </p>
          <motion.button
            className={styles.selectButton}
            onClick={() => openModal("onlineConsultation")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t("selectTraining")}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                ✕
              </button>
              <h3>{t("contactFormTitle")}</h3>
              <iframe
                src={`https://docs.google.com/forms/d/e/1FAIpQLSe-vUO-H3hPiBAI6s7unqltsqfet9PhdVObNMWqGTY4zvNq0A/viewform?embedded=true&entry.56520049=${serviceMapping[selectedService]}`}
                className={styles.formIframe}
                title={t("contactFormTitle")}
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
