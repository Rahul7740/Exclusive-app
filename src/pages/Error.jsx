import { Link } from "react-router-dom";
import Button from "../snippets/butttons/button";

function Error() {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="direction-container">
            <Link to={"/"}>Home</Link>/<Link to={"/error"}>Error</Link>
          </div>
          <div className="error-div">

            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>

            <Button name="Back to home page" bgColor="#DB4444" />

          </div>
        </div>
      </section>
    </>
  );
}
export default Error;
