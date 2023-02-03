import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Member(props) {
  return (
    <div className="member">
      <div className="content">
        <img src={props.member} alt="" />
        <div className="member-info">
          <h2>{props.name}</h2>
          <p>{props.jobTitle}</p>
          <div className="social">
            <div className="social-parent">
              {<FaFacebook color="#1877f2" />}
            </div>
            <div className="social-parent">{<FaTwitter color="#1da1f2" />}</div>
            <div className="social-parent">
              {<FaLinkedin color="#0077b5" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
