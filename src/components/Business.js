import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import jsonData from "../data.json";
import Footer from "./Footer";
import "./css/Business.css";
import NavBusiness from "./navbar/NavBusiness";
import Navbar from "./navbar/navbar";
const Business = () => {
  const { Business } = jsonData;
  useEffect(() => {
    truncateText("trun-bs", 250);
    truncateText("trun-bs-sm", 90);
  }, []);
  return (
    <div>
      <Navbar />
      <NavBusiness />
      <div style={{ marginTop: "40px" }}>
        <div className="container" id="FaE">
          <Link
            onClick={handleLinkClick}
            to="/Business/Econ"
            style={{ textDecoration: "none", color: "#000" }}>
            <h3>Finance and economy</h3>
          </Link>
          <div className="separator" style={{ height: "1px" }}></div>

          <br />
          <div className="posts-FaE">
            <div className="left">
              <div className="content">
                <div className="content-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Econ[0].id}`}>
                    <b>{Business.Econ[0].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-right"
                  href={`/viewpage/Business/Econ/${Business.Econ[0].id}`}>
                  <img
                    src={Business.Econ[0].images[0]}
                    className="bottom-right"
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="trun-bs clip bottom-left">
                    {Business.Econ[0].content[0]} {Business.Econ[0].content[1]}
                  </p>
                </Link>
              </div>

              <div className="content">
                <div className="content-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Econ[1].id}`}>
                    <b style={{ fontSize: "25px" }}>{Business.Econ[1].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-right"
                  href={`/viewpage/Business/Econ/${Business.Econ[1].id}`}>
                  <img
                    src={Business.Econ[1].images[0]}
                    className="bottom-right"
                  />

                  <p
                    style={{ fontSize: "15px" }}
                    className="trun-bs bottom-left clip">
                    {Business.Econ[1].content[0]} {Business.Econ[1].content[1]}{" "}
                    {Business.Econ[1].content[2]}
                  </p>
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="content-small">
                <div className="content-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Econ[2].id}`}>
                    <b className="right">{Business.Econ[2].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-small-bottom"
                  href={`/viewpage/Business/Econ/${Business.Econ[2].id}`}>
                  <img
                    src={Business.Econ[2].images[0]}
                    className="small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-bs-sm  small-right">
                    {Business.Econ[2].content[0]} {Business.Econ[2].content[1]}
                  </p>
                </Link>
              </div>
              <div className="content-small">
                <div className="content-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Econ[3].id}`}>
                    <b style={{ fontSize: "18px" }} className="right">
                      {Business.Econ[3].title}
                    </b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-small-bottom"
                  href={`/viewpage/Business/Econ/${Business.Econ[3].id}`}>
                  <img
                    src={Business.Econ[3].images[0]}
                    className="small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-bs-sm  small-right">
                    {Business.Econ[3].content[0]} {Business.Econ[3].content[1]}
                  </p>
                </Link>
              </div>{" "}
              <div className="content-small">
                <div className="content-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Econ[4].id}`}>
                    <b style={{ fontSize: "18px" }} className="right">
                      {Business.Econ[4].title}
                    </b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-small-bottom"
                  href={`/viewpage/Business/Econ/${Business.Econ[4].id}`}>
                  <img
                    src={Business.Econ[4].images[0]}
                    className="small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-bs-sm  small-right">
                    {Business.Econ[4].content[0]} {Business.Econ[4].content[1]}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container" id="ToB">
          <Link
            onClick={handleLinkClick}
            to="/Business/Tech"
            style={{ textDecoration: "none", color: "#000" }}>
            <h3>Technology of Business</h3>
          </Link>

          <div className="separator" style={{ height: "1px" }}></div>

          <br />
          <div className="posts-ToB">
            <div className="left">
              <div className="content">
                <div className="content-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Tech[0].id}`}>
                    <b>{Business.Tech[0].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-right"
                  href={`/viewpage/Business/Econ/${Business.Tech[0].id}`}>
                  <img
                    src={Business.Tech[0].images[0]}
                    className="bottom-right"
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="trun-bs clip bottom-left">
                    {Business.Tech[0].content[0]} {Business.Tech[0].content[1]}
                  </p>
                </Link>
              </div>

              <div className="content">
                <div className="content-left">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Tech[1].id}`}>
                    <b style={{ fontSize: "25px" }}>{Business.Tech[1].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-right"
                  href={`/viewpage/Business/Econ/${Business.Tech[1].id}`}>
                  <img
                    src={Business.Tech[1].images[0]}
                    className="bottom-right"
                  />

                  <p
                    style={{ fontSize: "15px" }}
                    className="trun-bs bottom-left clip">
                    {Business.Tech[1].content[0]} {Business.Tech[1].content[1]}{" "}
                    {Business.Tech[1].content[2]}
                  </p>
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="content-small">
                <div className="content-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Tech[2].id}`}>
                    <b className="right">{Business.Tech[2].title}</b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-small-bottom"
                  href={`/viewpage/Business/Econ/${Business.Tech[2].id}`}>
                  <img
                    src={Business.Tech[2].images[0]}
                    className="small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-bs-sm  small-right">
                    {Business.Tech[2].content[0]} {Business.Tech[2].content[1]}
                  </p>
                </Link>
              </div>
              <div className="content-small">
                <div className="content-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Tech[3].id}`}>
                    <b style={{ fontSize: "18px" }} className="right">
                      {Business.Tech[3].title}
                    </b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-small-bottom"
                  href={`/viewpage/Business/Econ/${Business.Tech[3].id}`}>
                  <img
                    src={Business.Tech[3].images[0]}
                    className="small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-bs-sm  small-right">
                    {Business.Tech[3].content[0]} {Business.Tech[3].content[1]}
                  </p>
                </Link>
              </div>{" "}
              <div className="content-small">
                <div className="content-small-top">
                  <Link
                    onClick={handleLinkClick}
                    className="link"
                    href={`/viewpage/Business/Econ/${Business.Tech[4].id}`}>
                    <b style={{ fontSize: "18px" }} className="right">
                      {Business.Tech[4].title}
                    </b>
                  </Link>
                </div>
                <Link
                  onClick={handleLinkClick}
                  className="link content-small-bottom"
                  to={`/viewpage/Business/Econ/${Business.Tech[4].id}`}>
                  <img
                    src={Business.Tech[4].images[0]}
                    className="small-left"
                    alt=""
                  />
                  <p
                    style={{ fontSize: "15px" }}
                    className="clip trun-bs-sm  small-right">
                    {Business.Tech[4].content[0]} {Business.Tech[4].content[1]}
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

export default Business;
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
