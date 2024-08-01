import React from "react";
import "../style/Cantact.css";
import { Link } from "react-router-dom";
import SvgPath from "../assets/svg/SvgPath";

const Contact = () => {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="direction-container">
            <Link to={"/"}>Home</Link>/<Link to={"/Contact"}>Contact</Link>
          </div>
          <div className="contects-container">
            <div className="contact">
              <div className="contact-header">
                <img src={SvgPath.phoneBG} className="contact-image" />
                <h3 className="contact-title">Call To Us</h3>
              </div>
              <p className="contact-description">
                We are available 24/7, 7 days a week.
              </p>
              <a
                target="_blank"
                href="tel:+8801611112222"
                className="contact-phone"
              >
                Phone: +8801611112222
              </a>
              <hr className="contact-HR-space" />
              <div className="contact-header">
                <img src={SvgPath.phoneBG} className="contact-image" />
                <h3 className="contact-title">Write To US</h3>
              </div>
              <p className="contact-description">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <a
                target="_blank"
                href="mailto:customer@exclusive.com"
                className="contact-phone"
              >
                Emails: customer@exclusive.com
              </a>
              <a
                target="_blank"
                href="mailto:support@exclusive.com"
                className="contact-phone"
              >
                Emails: support@exclusive.com
              </a>
            </div>
            <div className="massage-container">
              <div className="massage-inputs">
                <input
                  type="text"
                  placeholder="Your Name *"
                  id="name"
                  name="name"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  id="email"
                  name="email"
                  required
                />

                <input
                  type="tel"
                  placeholder="Your Phone *"
                  id="phone"
                  name="phone"
                  required
                />
              </div>

              <textarea
                placeholder="Your Message *"
                id="message"
                name="message"
                rows="8"
                required
              ></textarea>

              <button className="massage-send-btn" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
