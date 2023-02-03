import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="upper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff3c00"
            fillOpacity="1"
            d="M0,96L48,128C96,160,192,224,288,256C384,288,480,288,576,240C672,192,768,96,864,85.3C960,75,1056,149,1152,165.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="info">
          <div className="info-title" data-aos="fade-right">
            <h1>Welcome To RevUpWay</h1>
            <p>
              We Reverse <br />
              We Up
              <br />
              We go in the right way together
            </p>
          </div>
          <div className="info-pic" data-aos="fade-left">
            <img
              src="https://reactheme.com/products/wordpress/axela/wp-content/uploads/2022/10/banner-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="buttom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L48,128C96,160,192,224,288,256C384,288,480,288,576,240C672,192,768,96,864,85.3C960,75,1056,149,1152,165.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
