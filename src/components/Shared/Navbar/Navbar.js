import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import navLogo from "../../../imgs/navLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  const info = JSON.parse(localStorage.getItem("loggedInUserInfo"));
  const [identity, setIdentity] = useState(null);
  const signedInUserInfo = info ? info : {};
  const handleLogOut = () => {
    localStorage.removeItem("loggedInUserInfo");
  };
  useEffect(() => {
    if (signedInUserInfo.email) {
      fetch("https://aqueous-basin-07040.herokuapp.com/checkIdentity", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: signedInUserInfo.email }),
      })
        .then((res) => res.json())
        .then((data) => setIdentity(data));
    }
  }, [signedInUserInfo.email]);
  return (
    <nav className={styles.navParent}>
      <div className={styles.navbar}>
        <div>
          <img src={navLogo} alt="" />
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </Link>
          <Link to="/menu">Menu</Link>
          {!signedInUserInfo.isSignedIn && <Link to="/login">Login</Link>}
          {!signedInUserInfo.isSignedIn && (
            <Link to="/signup" className={styles.primaryBtn}>
              Sign up
            </Link>
          )}
          {identity && <Link to="/adminpanel">Admin</Link>}
          {signedInUserInfo.isSignedIn && (
            <Link to="/" className={styles.name}>
              {signedInUserInfo.name}
            </Link>
          )}
          {signedInUserInfo.isSignedIn && (
            <a href="/" onClick={handleLogOut} className={styles.primaryBtn}>
              Log out
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
