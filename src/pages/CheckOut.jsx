import { Link } from "react-router-dom";
import "../style/checkOut.css";
import "../style/cart.css";
import SvgPath from "../assets/svg/SvgPath";

function CheckOut() {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="direction-container">
            <Link to={"/"}>Home</Link>/<Link to={"/cart"}>Cart</Link>/
            <Link to={"/cart/checkOut"}>CheckOut</Link>
          </div>
          <h2>Billing Details</h2>
          <div className="checkOut-container">
            <div className="yourDetails">
              <form>
                <div className="details-sections">
                  <label for="Your-name">Your Name*</label>
                  <input id="Your-name" type="text" />
                </div>
                <div className="details-sections">
                  <label for="company-Name">Company Name</label>
                  <input id="company-Name" type="text" />
                </div>
                <div className="details-sections">
                  <label for="street-Address">Street Address*</label>
                  <input id="street-Address" type="text" />
                </div>
                <div className="details-sections">
                  <label for="apartment">
                    Apartment, floor, etc. (optional)
                  </label>
                  <input id="apartment" type="text" />
                </div>
                <div className="details-sections">
                  <label for="city">Town/City*</label>
                  <input id="city" type="text" />
                </div>
                <div className="details-sections">
                  <label for="number">Phone Number*</label>
                  <input id="number" type="tel" />
                </div>
                <div className="details-sections">
                  <label for="email">Email Address*</label>
                  <input id="email" type="email" />
                </div>
                <div className="save-your-details">
                  <input type="checkbox" checked />
                  <p>Save this information for faster check-out next time</p>
                </div>
              </form>
            </div>
            <div className="detianls-payment-method">
              <div className="cart-devices flex-spaceBetween">
                <div className="flex">
                  <img src={SvgPath.cartMoniter} alt="moniter" />
                  <p>LCD Monitor</p>
                </div>
                <p>$650</p>
              </div>
              <div className="cart-devices flex-spaceBetween">
                <div className="flex">
                  <img src={SvgPath.cartGamepad} alt="gamepad" />
                  <p>H1 Gamepad</p>
                </div>
                <p>$1100</p>
              </div>
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
              <div className="select-method-div">
                <input id="bankss" type="radio" name="method" />
                <label for="bankss" className="banks">
                  <p>Bank</p>
                  <img src={SvgPath.banks} alt="banks" />
                </label>
              </div>
              <div className="select-method-div">
                <input id="delivery" type="radio" name="method" checked />
                <label for="delivery">Cash on delivery</label>
              </div>
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
              <button
                  style={{
                    background: "#DB4444",
                    color: "white",
                    border: "none",
                    margin: "0",
                  }}
                  className="cart-btns"
                >
                  Place Order
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CheckOut;
