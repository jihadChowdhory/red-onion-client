import styles from "./Cart.module.css";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import CartItem from "../CartItem/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = localStorage.getItem("cart")
    ? Object.values(JSON.parse(localStorage.getItem("cart")))
    : [];
  const [total, setTotal] = useState(0);
  const result = cart.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.price);
  }, 0);
  const cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  if (!cartTotal) {
    localStorage.setItem("cartTotal", JSON.stringify(result));
  }
  useEffect(() => {
    setTotal(cartTotal);
  }, [cartTotal]);
  return (
    <div className={styles.cartContainer}>
      <Navbar></Navbar>
      {cart.length > 0 ? (
        <div className={styles.cart}>
          <div className={styles.cartBody}>
            <div className={styles.cartHeader}>
              <div>
                <h2>My Cart</h2>
              </div>
              <div>
                <h2>Total: {cartTotal} Tk.</h2>
                <h3>Total Items ({cart.length})</h3>
              </div>
            </div>
            <div className={styles.cartDetails}>
              {cart.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  total={total}
                  setTotal={setTotal}
                  cartTotal={cartTotal}
                ></CartItem>
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
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className={styles.textRight}>{cartTotal} Tk.</td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td className={styles.textRight}>100 Tk.</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className={styles.textRight}>{cartTotal + 100} Tk.</td>
                </tr>
                <tr>
                  <td>
                    <b>Payable Total</b>
                  </td>
                  <td className={styles.textRight}>
                    <b>{cartTotal + 100} Tk.</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className={styles.checkoutBtn}>Order</button>
          </div>
        </div>
      ) : (
        <h1 className={styles.emptyHeading}>Sorry your cart is empty!</h1>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Cart;
