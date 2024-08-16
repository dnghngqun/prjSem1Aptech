import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import jsonData from "../data.json";
import Footer from "./Footer";
import "./css/Sports.css";
import NavSports from "./navbar/NavSports";
import Navbar from "./navbar/navbar";
const Sports = () => {
  const { Sports } = jsonData;
  useEffect(() => {
    truncateText("trun-sp", 250);
    truncateText("trun-sp-sm", 80);
  }, []);
  return (
    <div className="body">
      <Navbar />
      <NavSports />
      <div>
        <br />
        <div className="container" id="football">
          <Link
            onClick={handleLinkClick}
            to="/Sports/Football"
            style={{ textDecoration: "none", color: "#000" }}>
            <h3>Football</h3>
          </Link>
          <div className="separator" style={{ height: "1px" }}></div>
          <div className="sports-football">
            <div className="left">
              <div className="global">
                <div className="global-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Football[0].id}`}>
                    <b>{Sports.Football[0].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-right"
                  to={`/viewpage/Sports/Football/${Sports.Football[0].id}`}>
                  <img
                    src={Sports.Football[0].images[0]}
                    className="global-bottom-left"
                  />

                  <p
                    style={{ fontSize: "14px" }}
                    className="trun-sp global-bottom-right clip">
                    {Sports.Football[0].content[0]}{" "}
                    {Sports.Football[0].content[1]}
                  </p>
                </Link>
              </div>
              <div className="global">
                <div className="global-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Football[1].id}`}>
                    <b style={{ fontSize: "24px" }}>
                      {Sports.Football[1].title}
                    </b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-right"
                  to={`/viewpage/Sports/Football/${Sports.Football[1].id}`}>
                  <img
                    src={Sports.Football[1].images[0]}
                    className="global-bottom-left"
                  />

                  <p
                    style={{ fontSize: "14px" }}
                    className="trun-sp global-bottom-right clip">
                    {Sports.Football[1].content[0]}{" "}
                    {Sports.Football[1].content[1]}{" "}
                    {Sports.Football[1].content[2]}
                  </p>
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="global-small">
                <div className="global-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Football[2].id}`}>
                    <b className="right">{Sports.Football[2].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-small-bottom"
                  to={`/viewpage/Sports/Football/${Sports.Football[2].id}`}>
                  <img
                    src={Sports.Football[2].images[0]}
                    className="global-small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-sp-sm  global-small-right">
                    {Sports.Football[2].content[0]}{" "}
                    {Sports.Football[2].content[1]}
                  </p>
                </Link>
              </div>
              <div className="global-small">
                <div className="global-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Football[3].id}`}>
                    <b className="right">{Sports.Football[3].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-small-bottom"
                  to={`/viewpage/Sports/Football/${Sports.Football[3].id}`}>
                  <img
                    src={Sports.Football[3].images[0]}
                    className="global-small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-sp-sm  global-small-right">
                    {Sports.Football[3].content[0]}{" "}
                    {Sports.Football[3].content[1]}
                  </p>
                </Link>
              </div>
              <div className="global-small">
                <div className="global-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Football[4].id}`}>
                    <b className="right">{Sports.Football[4].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-small-bottom"
                  to={`/viewpage/Sports/Football/${Sports.Football[4].id}`}>
                  <img
                    src={Sports.Football[4].images[0]}
                    className="global-small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-sp-sm  global-small-right">
                    {Sports.Football[4].content[0]}{" "}
                    {Sports.Football[4].content[1]}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container" id="golf">
          <Link
            onClick={handleLinkClick}
            to="/Sports/Golf"
            style={{ textDecoration: "none", color: "#000" }}>
            <h3>Golf</h3>
          </Link>

          <div className="separator" style={{ height: "1px" }}></div>

          <div className="sports-golf">
            <div className="left">
              <div className="global">
                <div className="global-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Golf[0].id}`}>
                    <b>{Sports.Golf[0].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-right"
                  to={`/viewpage/Sports/Football/${Sports.Golf[0].id}`}>
                  <img
                    src={Sports.Golf[0].images[0]}
                    className="global-bottom-left"
                  />

                  <p
                    style={{ fontSize: "14px" }}
                    className="trun-sp global-bottom-right clip">
                    {Sports.Golf[0].content[0]} {Sports.Golf[0].content[1]}
                  </p>
                </Link>
              </div>
              <div className="global">
                <div className="global-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Golf[1].id}`}>
                    <b style={{ fontSize: "24px" }}>{Sports.Golf[1].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-right"
                  to={`/viewpage/Sports/Football/${Sports.Golf[1].id}`}>
                  <img
                    src={Sports.Golf[1].images[0]}
                    className="global-bottom-left"
                  />

                  <p
                    style={{ fontSize: "14px" }}
                    className="trun-sp global-bottom-right clip">
                    {Sports.Golf[1].content[0]} {Sports.Golf[1].content[1]}{" "}
                    {Sports.Golf[1].content[2]}
                  </p>
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="global-small">
                <div className="global-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Golf[2].id}`}>
                    <b className="right">{Sports.Golf[2].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-small-bottom"
                  to={`/viewpage/Sports/Football/${Sports.Golf[2].id}`}>
                  <img
                    src={Sports.Golf[2].images[0]}
                    className="global-small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-sp-sm  global-small-right">
                    {Sports.Golf[2].content[0]} {Sports.Golf[2].content[1]}
                  </p>
                </Link>
              </div>
              <div className="global-small">
                <div className="global-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Golf[3].id}`}>
                    <b className="right">{Sports.Golf[3].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-small-bottom"
                  to={`/viewpage/Sports/Football/${Sports.Golf[3].id}`}>
                  <img
                    src={Sports.Golf[3].images[0]}
                    className="global-small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-sp-sm  global-small-right">
                    {Sports.Golf[3].content[0]} {Sports.Golf[3].content[1]}
                  </p>
                </Link>
              </div>
              <div className="global-small">
                <div className="global-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link link-hover"
                    to={`/viewpage/Sports/Football/${Sports.Golf[4].id}`}>
                    <b className="right">{Sports.Golf[4].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link global-small-bottom"
                  to={`/viewpage/Sports/Football/${Sports.Golf[4].id}`}>
                  <img
                    src={Sports.Golf[4].images[0]}
                    className="global-small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-sp-sm  global-small-right">
                    {Sports.Golf[4].content[0]} {Sports.Golf[4].content[1]}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop
        style={{
          borderRadius: "50px",
          backgroundColor: "rgb(202, 200, 200)",
        }}
        smooth
      />
    </div>
  );
};

export default Sports;
const truncateText = (className, maxLength) => {
  const elements = document.getElementsByClassName(className);

  for (let i = 0; i < elements.length; i++) {
    let text = elements[i].textContent.trim();
    if (text.length > maxLength) {
      text = text.substring(0, maxLength - 3) + "...";
      elements[i].textContent = text;
    }
  }
};
const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
