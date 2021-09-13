import React, { useState } from "react";
import styles from "./Foods.module.css";
import lunch1 from "../../../imgs/lunch/lunch1.png";
import lunch2 from "../../../imgs/lunch/lunch2.png";
import lunch3 from "../../../imgs/lunch/lunch3.png";
import lunch4 from "../../../imgs/lunch/lunch4.png";
import lunch5 from "../../../imgs/lunch/lunch5.png";
import lunch6 from "../../../imgs/lunch/lunch6.png";
import breakfast1 from "../../../imgs/Breakfast/breakfast1.png";
import breakfast2 from "../../../imgs/Breakfast/breakfast2.png";
import breakfast3 from "../../../imgs/Breakfast/breakfast3.png";
import breakfast4 from "../../../imgs/Breakfast/breakfast4.png";
import breakfast5 from "../../../imgs/Breakfast/breakfast5.png";
import breakfast6 from "../../../imgs/Breakfast/breakfast6.png";
import dinner1 from "../../../imgs/Dinner/dinner1.png";
import dinner2 from "../../../imgs/Dinner/dinner2.png";
import dinner3 from "../../../imgs/Dinner/dinner3.png";
import dinner4 from "../../../imgs/Dinner/dinner4.png";
import dinner5 from "../../../imgs/Dinner/dinner5.png";
import dinner6 from "../../../imgs/Dinner/dinner6.png";

const Foods = () => {
  const [activeMenu, setActiveMenu] = useState("Lunch");
  const handleMenuChange = (e) => {
    const newMenu = e.target.innerText;
    setActiveMenu(newMenu);
  };
  return (
    <section className={styles.foodsSection}>
      <div className={styles.menuButtons}>
        <button
          onClick={handleMenuChange}
          className={
            activeMenu === "Breakfast" ? styles.highLightMenu : undefined
          }
        >
          Breakfast
        </button>
        <button
          onClick={handleMenuChange}
          className={activeMenu === "Lunch" ? styles.highLightMenu : undefined}
        >
          Lunch
        </button>
        <button
          onClick={handleMenuChange}
          className={activeMenu === "Dinner" ? styles.highLightMenu : undefined}
        >
          Dinner
        </button>
      </div>
      <div className={styles.foodContainer}>
        <div className={styles.foodItem}>
          {activeMenu === "Breakfast" ? (
            <img src={breakfast1} alt="" />
          ) : activeMenu === "Lunch" ? (
            <img src={lunch1} alt="" />
          ) : (
            <img src={dinner1} alt="" />
          )}
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          {activeMenu === "Breakfast" ? (
            <h2>$6.67</h2>
          ) : activeMenu === "Lunch" ? (
            <h2>$23.99</h2>
          ) : (
            <h2>$10.30</h2>
          )}
        </div>
        <div className={styles.foodItem}>
          {activeMenu === "Breakfast" ? (
            <img src={breakfast2} alt="" />
          ) : activeMenu === "Lunch" ? (
            <img src={lunch2} alt="" />
          ) : (
            <img src={dinner2} alt="" />
          )}
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          {activeMenu === "Breakfast" ? (
            <h2>$6.67</h2>
          ) : activeMenu === "Lunch" ? (
            <h2>$23.99</h2>
          ) : (
            <h2>$10.30</h2>
          )}
        </div>
        <div className={styles.foodItem}>
          {activeMenu === "Breakfast" ? (
            <img src={breakfast3} alt="" />
          ) : activeMenu === "Lunch" ? (
            <img src={lunch3} alt="" />
          ) : (
            <img src={dinner3} alt="" />
          )}
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          {activeMenu === "Breakfast" ? (
            <h2>$6.67</h2>
          ) : activeMenu === "Lunch" ? (
            <h2>$23.99</h2>
          ) : (
            <h2>$10.30</h2>
          )}
        </div>
        <div className={styles.foodItem}>
          {activeMenu === "Breakfast" ? (
            <img src={breakfast4} alt="" />
          ) : activeMenu === "Lunch" ? (
            <img src={lunch4} alt="" />
          ) : (
            <img src={dinner4} alt="" />
          )}
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          {activeMenu === "Breakfast" ? (
            <h2>$6.67</h2>
          ) : activeMenu === "Lunch" ? (
            <h2>$23.99</h2>
          ) : (
            <h2>$10.30</h2>
          )}
        </div>
        <div className={styles.foodItem}>
          {activeMenu === "Breakfast" ? (
            <img src={breakfast5} alt="" />
          ) : activeMenu === "Lunch" ? (
            <img src={lunch5} alt="" />
          ) : (
            <img src={dinner5} alt="" />
          )}
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          {activeMenu === "Breakfast" ? (
            <h2>$6.67</h2>
          ) : activeMenu === "Lunch" ? (
            <h2>$23.99</h2>
          ) : (
            <h2>$10.30</h2>
          )}
        </div>
        <div className={styles.foodItem}>
          {activeMenu === "Breakfast" ? (
            <img src={breakfast6} alt="" />
          ) : activeMenu === "Lunch" ? (
            <img src={lunch6} alt="" />
          ) : (
            <img src={dinner6} alt="" />
          )}
          <h2 className={styles.foodTitle}>Healthy Meal Plan</h2>
          <p>How we dream about our future</p>
          {activeMenu === "Breakfast" ? (
            <h2>$6.67</h2>
          ) : activeMenu === "Lunch" ? (
            <h2>$23.99</h2>
          ) : (
            <h2>$10.30</h2>
          )}
        </div>
      </div>
      <div className={styles.checkoutFood}>
        <button>Checkout Your Food</button>
      </div>
    </section>
  );
};

export default Foods;
