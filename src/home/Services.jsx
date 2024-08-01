import SvgPath from "../assets/svg/SvgPath";
import "../style/Services.css";

function Services() {
  return (
    <>
      <section className="all-section">
        <div className="services-main-container">
            <div className="services">
                <img src={SvgPath.services1} />
                <h2>FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="services">
                <img src={SvgPath.services2} />
                <h2>24/7 CUSTOMER SERVICE</h2>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className="services">
                <img src={SvgPath.services3} />
                <h2>MONEY BACK GUARANTEE</h2>
                <p>We reurn money within 30 days</p>
            </div>
        </div>
      </section>
    </>
  );
}
export default Services;
