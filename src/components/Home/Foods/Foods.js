import React from "react";
import styles from "./Foods.module.css";
import lunch1 from "../../../imgs/lunch/lunch1.png";

const Foods = () => {
  return (
    <section className={styles.foodsSection}>
      <div className={styles.menuButtons}>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>
      <div className={styles.foodContainer}>
        <div className={styles.foodItem}>
          <img src={lunch1} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch1} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch1} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch1} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch1} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch1} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
      </div>
    </section>
  );
};

export default Foods;
