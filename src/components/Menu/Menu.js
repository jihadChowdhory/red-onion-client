import React, { useEffect } from "react";
import styles from "./Menu.module.css";
import Navbar from "../Shared/Navbar/Navbar";
import breakfast1 from "../../imgs/Breakfast/breakfast1.png";

const Menu = () => {
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.foodsContainer}>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
          <div className={styles.foodItem}>
            <img src={breakfast1} alt="" />
            <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
            <p>How we dream about our future</p>
            <h2>$6.67</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
