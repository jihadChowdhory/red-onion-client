import React from "react";
import styles from "./FoodItem.module.css";
import breakfast1 from "../../imgs/Breakfast/breakfast1.png";

const FoodItem = ({ item }) => {
  return (
    <div className={styles.foodItem}>
      <img src={breakfast1} alt="" />
      <div className={styles.detailsDiv}>
        <h2 className={styles.foodTitle}>{item.name}</h2>
        <p>{item.details}</p>
        <h2>${item.price}</h2>
      </div>
      <button className={styles.btn}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
