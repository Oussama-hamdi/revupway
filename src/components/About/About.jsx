import React from "react";
import "./About.css";
import digitalMarektingPic from "../../assets/about-img.jpeg";

function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="img-parent">
          <img src={digitalMarektingPic} alt="" />
        </div>
        <div className="about-info">
          <span className="sub-text">More About Company</span>
          <h3 className="main-heading">Marketing Your Business More Unique</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing italeo tellus,
            luctus nec mattis pulvinar dapibus leo. dolor sit amet, consectetur
            adipiscing elit. dkalk elit tellus, luctus nec mattis.
          </p>
          <p>
            Natoque turpis metus mollis dignissim sociosqu curabitur suspendisse
            eu habitasse, arcu hendrerit vitae leo laoreet nulla
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
