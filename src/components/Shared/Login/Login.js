import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import formLogo from "../../../imgs/navLogo.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
initializeApp(firebaseConfig);
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const swapLogin = () => {
    setIsSignedIn(!isSignedIn);
  };
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.isSignedIn = true;
        newUserInfo.email = result.user.email;
        newUserInfo.name = result.user.displayName;
        setLoggedInUser(newUserInfo);
        localStorage.setItem("loggedInUserInfo", JSON.stringify(newUserInfo));
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
