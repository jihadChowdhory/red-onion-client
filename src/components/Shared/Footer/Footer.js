import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../../imgs/footerLogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerLinksContainer}>
          <img src={footerLogo} alt="" />
          <div>
            <a href="/">About online food</a>
            <a href="/">Read our blog</a>
            <a href="/">Sign up to deliver</a>
            <a href="/">Add your restaurant</a>
          </div>
          <div>
            <a href="/">Get help</a>
            <a href="/">Read FAQs</a>
            <a href="/">View all cities</a>
            <a href="/">Restaurant near me</a>
          </div>
        </div>
        <div className={styles.copyrightPart}>
          <p>Copyright &copy; 2021 all rights reserved by Red Onion Foods</p>
          <div>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a>
            <a href="/">Pricing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
