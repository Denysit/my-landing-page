import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CaloriesCalculator.module.css";

export default function CalorieCalculator() {
  const { t } = useTranslation();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    if (!weight || !height || !age) return;
    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    const totalCalories = bmr * parseFloat(activity);
    setResult({
      maintenance: Math.round(totalCalories),
      deficit: Math.round(totalCalories * 0.85),
      surplus: Math.round(totalCalories * 1.15),
    });
  };

  return (
    <section id="calculator" className={styles.section}>
      <h2>{t("calculator")}</h2>
      <div className={styles.calculatorForm}>
        <input
          type="number"
          placeholder={t("weight")}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder={t("height")}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder={t("age")}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">{t("male")}</option>
          <option value="female">{t("female")}</option>
        </select>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="1.2">{t("sedentary")}</option>
          <option value="1.375">{t("light")}</option>
          <option value="1.55">{t("moderate")}</option>
          <option value="1.725">{t("active")}</option>
          <option value="1.9">{t("veryActive")}</option>
        </select>
        <button onClick={calculateCalories}>{t("calculate")}</button>
        {result && (
          <div className={styles.result}>
            <p>
              {t("maintenance")}: {result.maintenance} {t("kcal")}
            </p>
            <p>
              {t("deficit")}: {result.deficit} {t("kcal")}
            </p>
            <p>
              {t("surplus")}: {result.surplus} {t("kcal")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
