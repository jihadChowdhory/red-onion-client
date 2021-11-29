import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import Navbar from "../Shared/Navbar/Navbar";
import FoodItem from "../FoodItem/FoodItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-basin-07040.herokuapp.com/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.foodsContainer}>
          {menu.map((item) => (
            <FoodItem item={item} key={item._id}></FoodItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
