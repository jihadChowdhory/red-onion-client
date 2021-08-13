import React from "react";
import styles from "./Navbar.module.css";
import navLogo from "../../../imgs/navLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navParent}>
      <div className={styles.navbar}>
        <div>
          <img src={navLogo} alt="" />
        </div>
        <div>
          <a href="/cart">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </a>
          <Link to="/login">Login</Link>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
