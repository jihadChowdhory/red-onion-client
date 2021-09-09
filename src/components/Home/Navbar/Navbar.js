import React from "react";
import styles from "./Navbar.module.css";
import navLogo from "../../../imgs/navLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const info = JSON.parse(localStorage.getItem("loggedInUserInfo"));
  const signedInUserInfo = info ? info : {};
  const handleLogOut = () => {
    localStorage.removeItem("loggedInUserInfo");
  };
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
          {!signedInUserInfo.isSignedIn && <Link to="/login">Login</Link>}
          {!signedInUserInfo.isSignedIn && <Link to="/login">Sign up</Link>}
          {signedInUserInfo.isSignedIn && (
            <a href="/">{signedInUserInfo.name}</a>
          )}
          {signedInUserInfo.isSignedIn && (
            <a href="/" onClick={handleLogOut}>
              Log out
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
