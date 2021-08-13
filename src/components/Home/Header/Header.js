import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Best food waiting for your belly</h1>
        <input type="text" placeholder="Search food items" />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
