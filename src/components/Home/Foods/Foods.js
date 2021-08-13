import React from "react";
import styles from "./Foods.module.css";
import lunch1 from "../../../imgs/lunch/lunch1.png";
import lunch2 from "../../../imgs/lunch/lunch2.png";
import lunch3 from "../../../imgs/lunch/lunch3.png";
import lunch4 from "../../../imgs/lunch/lunch4.png";
import lunch5 from "../../../imgs/lunch/lunch5.png";
import lunch6 from "../../../imgs/lunch/lunch6.png";

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
          <img src={lunch2} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch3} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch4} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch5} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
        <div className={styles.foodItem}>
          <img src={lunch6} alt="" />
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          <h2>$23.99</h2>
        </div>
      </div>
      <div className={styles.checkoutFood}>
        <button>Checkout Your Food</button>
      </div>
    </section>
  );
};

export default Foods;
