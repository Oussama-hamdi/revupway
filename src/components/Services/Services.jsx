import React from "react";
import "./Services.css";
import {
  FaGrinStars,
  FaLaptopCode,
  FaPalette,
  FaPeopleCarry,
  FaPuzzlePiece,
  FaRegChartBar,
} from "react-icons/fa";
import Service from "./Service";

function Services() {
  return (
    <div id="services" className="services">
      <div className="container">
        <div className="services-heading">
          <span className="sub-text">Our Services</span>
          <h3 className="main-heading">Service We Provide</h3>
        </div>
        <div className="our-services">
          <Service icon={<FaGrinStars />} title={"Product Design"} />
          <Service icon={<FaRegChartBar />} title={"Digital Marketing"} />
          <Service icon={<FaLaptopCode />} title={"Web Development"} />
          <Service icon={<FaLaptopCode />} title={"Technology Solution"} />
          <Service icon={<FaGrinStars />} title={"Business Solution"} />
          <Service icon={<FaPeopleCarry />} title={"Creative Layout"} />
          <Service icon={<FaPuzzlePiece />} title={"Content Writing"} />
          <Service icon={<FaPalette />} title={"Web Design"} />
        </div>
      </div>
    </div>
  );
}

export default Services;
