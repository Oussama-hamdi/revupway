import React from "react";
import "./Contact.css";
import "aos/dist/aos.css";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="contact animation-fix" id="contact">
      <div className="container">
        <div className="contact-parent">
          <ContactInfo />
          <form data-aos="fade-left" onSubmit={(e) => e.preventDefault()}>
            <div className="name">
              <label>Your Name*</label>
              <input type="text" required />
            </div>
            <div className="mail">
              <label>Your Email*</label>
              <input type="email" required />
            </div>
            <div className="textarea">
              <label>How Can I help You?</label>
              <textarea></textarea>
              <button>
                <div className="bg-color"></div>
                <div className="text">Submit Now</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
