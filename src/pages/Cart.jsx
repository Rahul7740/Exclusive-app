import { Link } from "react-router-dom";
import "../style/cart.css";
import SvgPath from "../assets/svg/SvgPath";
import Button from "../snippets/butttons/button";
function Cart() {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="direction-container">
            <Link to={"/"}>Home</Link>/<Link to={"/cart"}>Cart</Link>
          </div>
          <div className="cart-container">
            <div className="cart-products">
              <div className="cart-p-contents">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
              <div className="cart-p-contents">
                <div className="flex">
                  <img src={SvgPath.cartMoniter} alt="moniter" />
                  <p>LCD Monitor</p>
                </div>
                <p>$650</p>
                <input type="number" defaultValue="01" />
                <p>$650</p>
              </div>
              <div className="cart-p-contents">
                <div className="flex">
                  <img src={SvgPath.cartGamepad} alt="gamepad" />
                  <p>H1 Gamepad</p>
                </div>
                <p>$550</p>
                <input type="number" defaultValue="02" />
                <p>$1100</p>
              </div>
            </div>
            <div className="flex-spaceBetween cart-btns-div">
              <button className="cart-btns">Return To Shop</button>
              <button className="cart-btns">Update Cart</button>
            </div>
            <div className="flex-spaceBetween cart-total-container">
              <div className="flex-spaceBetween apply-coupon-container">
                <input
                  type="text"
                  className="cart-btns"
                  placeholder="Coupon Code"
                />
                <button
                  style={{
                    background: "#DB4444",
                    color: "white",
                    border: "none",
                  }}
                  className="cart-btns"
                >
                  Apply Coupon
                </button>
              </div>
              <div className="cart-total">
                <h1>Cart Total</h1>
                <div className="flex-spaceBetween">
                  <p>Subtotal:</p>
                  <p>$1750</p>
                </div>
                <hr />
                <div className="flex-spaceBetween">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="flex-spaceBetween">
                  <p>Total:</p>
                  <p>$1750</p>
                </div>
                <Link
                  style={{
                    background: "#DB4444",
                    color: "white",
                    border: "none",
                  }}
                  className="cart-btns"
                  to={"/cart/checkOut"}
                >
                  Procees to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
