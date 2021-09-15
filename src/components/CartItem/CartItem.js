import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const cart = localStorage.getItem("cart")
    ? Object.values(JSON.parse(localStorage.getItem("cart")))
    : [];
  const handleRemove = () => {
    const key = item._id;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      if (key === element._id) {
        cart.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      }
    }
  };
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
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
