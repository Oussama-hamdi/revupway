import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import {
  FaFacebook,
  FaInstagram,
  FaResolving,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ListItems from "./ListItems";
import ListSocial from "./ListSocial";

function Navbar() {
  const burgerMenuRef = useRef(null);
  const linksParentRef = useRef(null);

  useEffect(() => {
    burgerMenuRef.current.onclick = (e) => {
      if (e.target.tagName === "SPAN") {
        e.target.parentElement.classList.toggle("open");
      }
      linksParentRef.current.classList.toggle("active");
      e.target.classList.toggle("open");
    };
  }, []);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="/">
            <FaResolving />
          </a>
        </div>
        <div ref={burgerMenuRef} className="burger-menu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div ref={linksParentRef} className="links-parent">
          <ul className="links">
            <ListItems active={"active"} name="home" />
            <ListItems name="service" />
            <ListItems name="about" />
            <ListItems name="team" />
            <ListItems name="contact" />
          </ul>

          <ul className="social">
            <ListSocial icon={<FaWhatsapp />} style={{ color: "#128c7e" }} />

            <ListSocial icon={<FaTwitter />} style={{ color: "#1da1f2" }} />
            <ListSocial icon={<FaFacebook />} style={{ color: "#1877f2" }} />
            <ListSocial icon={<FaInstagram />} style={{ color: "#e1306c" }} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
