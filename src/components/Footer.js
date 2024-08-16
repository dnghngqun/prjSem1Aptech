import {
  faComment,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./css/Footer.css";
const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="footer">
      <div className="top">
        <div className="left">
          <ul className="home">
            <li>
              <b>
                <a href="/">Home</a>
              </b>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="/#BreakingNews">Breaking news</a>
            </li>
            <li>
              <a href="/#hot">Trending</a>
            </li>
            <li>
              <a href="#">Watch a lot</a>
            </li>
            <li>
              <a href="#">Newest</a>
            </li>
          </ul>
          <ul className="todayinworld">
            <li>
              <b>
                <a href="/TodayInWorld">Today in world</a>
              </b>
            </li>
            <li>
              <a href="#">U.S.</a>
            </li>
            <li>
              <a href="#">Germany</a>
            </li>
            <li>
              <a href="#">Italy</a>
            </li>
            <li>
              <a href="#">China</a>
            </li>
            <li>
              <a href="#">Japan</a>
            </li>
          </ul>
          <ul className="sports">
            <li>
              <b>
                <a href="/Sports">Sports</a>
              </b>
            </li>
            <li>
              <a href="/Sports/Golf">Golf</a>
            </li>
            <li>
              <a href="/Sports/Football">Football</a>
            </li>
            <li>
              <a href="/Sports">Badminton</a>
            </li>
            <li>
              <a href="/Sports">Swimming</a>
            </li>
            <li>
              <a href="/Sports">Cycling</a>
            </li>
          </ul>
          <ul className="business">
            <li>
              <b>
                <a href="/Business">Business</a>
              </b>
            </li>
            <li>
              <a href="/Business/Econ">Finance and economy</a>
            </li>
            <li>
              <a href="/Business/Tech">Technology of business</a>
            </li>
            <li>
              <a href="/Business">Work Culture</a>
            </li>
          </ul>
        </div>

        <div className="right" style={{ marginLeft: "20px" }}>
          <div className="contact">
            <span style={{ fontSize: "20px", color: "#e5e5e5" }}>
              CONTACT US
            </span>
            <br />
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
            <span style={{ color: "#fff", marginLeft: "4px" }}>
              dnbcgroup@gmail.com
            </span>
            <br />
            <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff" }} />
            <a
              href="/Feedback"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginLeft: "4px",
              }}>
              Feedback
            </a>
          </div>
          <p className="center hide-mobile" style={{ color: "#fff" }}>
            <b>Address:</b> 1 Raffles Place, #40-02, <br /> One Raffles Place,
            Office Tower, 1, Singapore
          </p>
          <div className="hotline">
            <span style={{ fontSize: "20px", color: "#e5e5e5" }}>HOTLINE</span>
            <br />
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
            <span style={{ color: "#fff", marginLeft: "4px" }}>
              (+65) 202 861 0737
            </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <a href="/">
          <img src="/logo.png" alt="logo" />
        </a>
        <div className="center">
          <b>ABOUT US</b>
          <p>
            DNBC is your news website. We provide you with the latest breaking
            news and videos from the world.
          </p>
        </div>
        <div className="hide-mobile">
          <span>©Copyright by Group2</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
