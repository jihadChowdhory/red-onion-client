import React, { useContext } from "react";
import styles from "./FoodItem.module.css";
import { UserContext } from "../../App";

const FoodItem = ({ item }) => {
  const [loggedInUser, setLoggedInUser, cart, setCart] =
    useContext(UserContext);
  const handleCart = (e) => {
    const newCart = { ...cart };
    const key = item._id;
    const value = item;
    newCart[key] = value;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <div className={styles.foodItem}>
      <img src={`data:image/png;base64,${item.img.img}`} alt="" />
      <div className={styles.detailsDiv}>
        <h2 className={styles.foodTitle}>{item.name}</h2>
        <p>{item.details}</p>
        <h2>৳{item.price}</h2>
      </div>
      <button className={styles.btn} onClick={handleCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;
