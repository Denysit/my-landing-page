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

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseFloat(age);
    const activityNum = parseFloat(activity);

    const bmr =
      gender === "male"
        ? 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
        : 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;

    const maintenance = Math.round(bmr * activityNum);
    const deficit = Math.round(maintenance * 0.85);
    const surplus = Math.round(maintenance * 1.15);

    // Макроси (білки — 2г/кг, жири — 1г/кг, вуглеводи — решта)
    const calculateMacros = (calories) => {
      const protein = Math.round(weightNum * 2); // 2 г білка на кг
      const fat = Math.round(weightNum * 1); // 1 г жиру на кг
      const proteinCalories = protein * 4;
      const fatCalories = fat * 9;
      const remainingCalories = calories - (proteinCalories + fatCalories);
      const carbs = Math.round(remainingCalories / 4); // 4 ккал на 1 г вуглеводів

      return { protein, fat, carbs };
    };

    setResult({
      maintenance,
      deficit,
      surplus,
      macros: {
        maintenance: calculateMacros(maintenance),
        deficit: calculateMacros(deficit),
        surplus: calculateMacros(surplus),
      },
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
              {t("protein")}: {result.macros.maintenance.protein}г, {t("fat")}:{" "}
              {result.macros.maintenance.fat}г, {t("carbs")}:{" "}
              {result.macros.maintenance.carbs}г
            </p>

            <p>
              {t("deficit")}: {result.deficit} {t("kcal")}
            </p>
            <p>
              {t("protein")}: {result.macros.deficit.protein}г, {t("fat")}:{" "}
              {result.macros.deficit.fat}г, {t("carbs")}:{" "}
              {result.macros.deficit.carbs}г
            </p>

            <p>
              {t("surplus")}: {result.surplus} {t("kcal")}
            </p>
            <p>
              {t("protein")}: {result.macros.surplus.protein}г, {t("fat")}:{" "}
              {result.macros.surplus.fat}г, {t("carbs")}:{" "}
              {result.macros.surplus.carbs}г
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
