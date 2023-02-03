import React from "react";
import Member from "./Member";
import "./OurTeam.css";
import memberOne from "../../assets/team-1.jpeg";
import memberTwo from "../../assets/team-2.jpeg";
import memberThree from "../../assets/team-3.jpeg";
import memberFour from "../../assets/team-4.jpeg";

function OurTeam() {
  return (
    <div className="our-team" id="team">
      <div className="container">
        <div className="team-title">
          <span className="sub-text">How We Work</span>
          <h3 className="main-heading">Meet Our Team</h3>
        </div>
        <div className="team-parent">
          <Member name="Alan Dosan" jobTitle="UX Designer" member={memberOne} />
          <Member name="Stive Stikollo" jobTitle="Manager" member={memberTwo} />
          <Member
            name="Archer Graham"
            jobTitle="Founder"
            member={memberThree}
          />
          <Member
            name="Amelia Clover"
            jobTitle="Finance Manager"
            member={memberFour}
          />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
