import React, { useState } from "react";
import styles from "./Login.module.css";
import formLogo from "../../../imgs/navLogo.png";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const swapLogin = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>
        <img src={formLogo} alt="" />
        <form>
          {!isSignedIn && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {!isSignedIn && (
            <input type="password" placeholder="Confirm Password" />
          )}
          {isSignedIn ? <button>Login</button> : <button>Sign up</button>}
          {isSignedIn ? (
            <p onClick={swapLogin}>Don't have an account?</p>
          ) : (
            <p onClick={swapLogin}>Already have an account?</p>
          )}
        </form>
        <button>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
