import { Link } from "react-router-dom";
import "../style/profile.css";
import Button from "../snippets/butttons/button";
function Profile() {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="flex-spaceBetween">
            <div className="direction-container">
              <Link to={"/"}>Home</Link>/<Link to={"/profile"}>Profile</Link>
            </div>
            <p className="profile-user-name">
              Welcome! <span style={{ color: "#DB4444" }}>Md Rimel</span>
            </p>
          </div>
          <div className="profile-container">
            <div className="account-management">
              <h3>Manage My Account</h3>
              <div>
                <p style={{ color: "#DB4444" }}>My Profile</p>
                <p>Address Book</p>
                <p>My Payment Options</p>
              </div>
              <h3>My Orders</h3>
              <div>
                <p>My Returns</p>
                <p>My Cancellations</p>
              </div>
              <h3>My WishList</h3>
            </div>
            <div className="edit-your-profile">
              <h2>Edit Your Profile</h2>
              <form>
                <div className="details-sections">
                  <label for="first-name">First Name</label>
                  <input id="first-name" type="text" value="Md" />
                </div>
                <div className="details-sections">
                  <label for="last-name">Last Name</label>
                  <input id="last-name" type="text" value="Rimel" />
                </div>
                <div className="details-sections">
                  <label for="email">Email</label>
                  <input id="email" type="text" value="rimel1111@gmail.com" />
                </div>
                <div className="details-sections">
                  <label for="Address">Address</label>
                  <input
                    id="Address"
                    type="text"
                    value="Kingston, 5236, United State"
                  />
                </div>
                <div>
                  <label>Password Changes</label>
                  <div className="details-sections">
                    <input type="password" placeholder="Current Passwod" />
                  </div>
                  <div className="details-sections">
                    <input type="password" placeholder="New Passwod" />
                  </div>
                  <div className="details-sections">
                    <input type="password" placeholder="Confirm New Passwod" />
                  </div>
                </div>
                <div className="cencal-and-save">
                    <button>Cencel</button>
                    <Button name="Save Changes" bgColor="#db4444" ></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
