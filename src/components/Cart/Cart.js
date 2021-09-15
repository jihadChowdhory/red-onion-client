import styles from "./Cart.module.css";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const cart = localStorage.getItem("cart")
    ? Object.values(JSON.parse(localStorage.getItem("cart")))
    : [];
  const result = cart.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.price);
  }, 0);
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
                <h2>Total: {result} Tk.</h2>
                <h3>Total Items you have selected ({cart.length})</h3>
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
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className={styles.textRight}>{result} Tk.</td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td className={styles.textRight}>100 Tk.</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className={styles.textRight}>{result + 100} Tk.</td>
                </tr>
                <tr>
                  <td>
                    <b>Payable Total</b>
                  </td>
                  <td className={styles.textRight}>
                    <b>{result + 100} Tk.</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className={styles.checkoutBtn}>Go To Checkout Page</button>
          </div>
        </div>
      ) : (
        <h1>Sorry your cart is empty!</h1>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Cart;
