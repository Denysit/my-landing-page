import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CaloriesCalculator.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CalorieCalculator() {
  const { t } = useTranslation();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);

  const calculateMacros = (calories) => {
    const protein = Math.round(weight * 2); // грамів
    const fats = Math.round(weight * 1); // грамів
    const proteinCalories = protein * 4;
    const fatCalories = fats * 9;
    const remainingCalories = calories - proteinCalories - fatCalories;
    const carbs = Math.round(remainingCalories / 4); // грамів
    return { protein, fats, carbs };
  };

  const calculateCalories = () => {
    if (!weight || !height || !age) return;
    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    const totalCalories = bmr * parseFloat(activity);

    const maintenance = Math.round(totalCalories);
    const deficit = Math.round(totalCalories * 0.85);
    const surplus = Math.round(totalCalories * 1.15);

    setResult({
      maintenance: {
        kcal: maintenance,
        macros: calculateMacros(maintenance),
      },
      deficit: {
        kcal: deficit,
        macros: calculateMacros(deficit),
      },
      surplus: {
        kcal: surplus,
        macros: calculateMacros(surplus),
      },
    });
  };

  const renderPieChart = (label, macros) => {
    const labels = [t("protein"), t("fats"), t("carbs")];

    const data = {
      labels,
      datasets: [
        {
          label: `${label} ${t("macros")}`,
          data: [macros.protein * 4, macros.fats * 9, macros.carbs * 4],
          backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56"],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className={styles.macrosChartWrapper}>
        <ul className={styles.macrosList}>
          <li>
            🍗 {t("protein")}: {macros.protein}g
          </li>
          <li>
            🥑 {t("fats")}: {macros.fats}g
          </li>
          <li>
            🍞 {t("carbs")}: {macros.carbs}g
          </li>
        </ul>
        <div className={styles.chartContainer}>
          <Pie data={data} />
        </div>
      </div>
    );
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
          <div className={styles.cardsWrapper}>
            {["maintenance", "deficit", "surplus"].map((key) => (
              <div key={key} className={styles.card}>
                <h3>{t(key)}</h3>
                <p>
                  {t("kcal")}: {result[key].kcal}
                </p>
                {renderPieChart(t(key), result[key].macros)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
