import React from "react";
import styles from "./AdminPanel.module.css";
import logo from "../../../imgs/navLogo.png";
import { Link } from "react-router-dom";
const AdminPanel = () => {
  return (
    <div className={styles.adminPanelContainer}>
      <img src={logo} alt="" />
      <Link to="/addfood">Add Food</Link>
      <Link to="/addadmin">Add Admin</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
};

export default AdminPanel;
