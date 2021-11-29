import React, { useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, total, setTotal, cartTotal }) => {
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
        localStorage.removeItem(`${item._id}`);
        window.location.reload();
      }
    }
  };
  const [itemCount, setItemCount] = useState();
  const count = JSON.parse(localStorage.getItem(`${item._id}`));
  const standard = count ? count : 1;
  const handlePlusBtn = () => {
    const newItemCount = standard + 1;
    setItemCount(newItemCount);
    localStorage.setItem(
      "cartTotal",
      JSON.stringify(cartTotal + parseFloat(item.price))
    );
    localStorage.setItem(`${item._id}`, JSON.stringify(newItemCount));
    window.location.reload();
  };
  const handleMinusBtn = () => {
    if (standard > 1) {
      const newItemCount = standard - 1;
      setItemCount(newItemCount);
      setTotal(total - parseFloat(item.price));
      localStorage.setItem(
        "cartTotal",
        JSON.stringify(cartTotal - parseFloat(item.price))
      );
      localStorage.setItem(`${item._id}`, JSON.stringify(newItemCount));
      window.location.reload();
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
            <span onClick={handleMinusBtn} className={styles.addRemoveBtn}>
              -
            </span>
            <span>{count ? count : 1}</span>
            <span onClick={handlePlusBtn} className={styles.addRemoveBtn}>
              +
            </span>
          </p>
        </div>
        <div className={styles.child}>
          <p>TK. {item.price}</p>
          <button onClick={handleRemove} className={styles.cartItemBtn}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
