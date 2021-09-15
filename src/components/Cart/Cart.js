import React from "react";
import styles from "./Cart.module.css";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cart = localStorage.getItem("cart")
    ? Object.values(JSON.parse(localStorage.getItem("cart")))
    : [];
  return (
    <div className={styles.cartContainer}>
      <Navbar></Navbar>
      <div className={styles.cart}>
        <div className={styles.cartBody}>
          <div className={styles.cartHeader}>
            <div>
              <h2>My Cart</h2>
            </div>
            <div>
              <h2>Total: 000 Tk.</h2>
              <h3>Total Items you have selected (4)</h3>
            </div>
          </div>
          <div className={styles.cartDetails}>
            {cart.map((item) => (
              <CartItem key={item._id} item={item}></CartItem>
            ))}
          </div>
        </div>
        <div className={styles.checkoutSummery}>
          <h4>Checkout Summary</h4>
          <hr />
          <select name="country" id="country">
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
          </select>
          <table>
            <tr>
              <td>Subtotal</td>
              <td className={styles.textRight}>505 Tk.</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td className={styles.textRight}>50 Tk.</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className={styles.textRight}>555 Tk.</td>
            </tr>
            <tr>
              <td>
                <b>Payable Total</b>
              </td>
              <td className={styles.textRight}>
                <b>555 Tk.</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
