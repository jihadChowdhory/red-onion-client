import React from "react";
import styles from "./Login.module.css";
import formLogo from "../../../imgs/navLogo.png";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>
        <img src={formLogo} alt="" />
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Login</button>
          <a href="/">Already have an account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
