import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.imgDiv}>
        <img src={`data:image/png;base64,${item.img.img}`} alt="" />
      </div>
      <div className={styles.cartItemDetails}>
        <div className={styles.child}>
          <h3>{item.name}</h3>
          <p>{item.details}</p>
        </div>
        <div className={styles.child}>
          <p>
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </p>
        </div>
        <div className={styles.child}>
          <p>TK. {item.price}</p>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
