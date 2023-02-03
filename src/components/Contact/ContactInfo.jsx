import React from "react";
import { GrMail } from "react-icons/gr";
import { CgPhone } from "react-icons/cg";
import "aos/dist/aos.css";

function ContactInfo() {
  return (
    <div className="contact-info animation-fix" data-aos="fade-right">
      <span className="sub-text">Get in touch</span>
      <h3 className="main-heading">Have Any Project Plan In Your Mind?</h3>
      <p className="contact-text">
        Parturient gravida dis auctor augue vivamus cras pellentesque hac,
        vametus tortor aptent turpis nam. Etiam integer eros pulvinar fusce
        justo nam phasellus consequat sagittis parturient.
      </p>
      <div className="contact-mail">
        <div className="svg-parent">{<GrMail />}</div>
        <div className="con-info">
          <span className="contact-us">Mail us 24/7:</span>
          <p className="our-contact">hello.mail@gmail.com</p>
        </div>
      </div>
      <div className="contact-number">
        <div className="svg-parent">{<CgPhone />}</div>
        <div className="con-info">
          <span className="contact-us">For urgent help:</span>
          <p className="our-contact">+227-300-3676</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
