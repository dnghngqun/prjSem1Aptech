import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import jsonData from "../data.json";
import Footer from "./Footer";
import "./css/homepage.css";
import Navbar from "./navbar/navbar";
const Homepage = () => {
  const { Business, TodayInWorld, Sports } = jsonData;
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    truncateText("trunLeft", 200);
    truncateText("trunTop", 200);
    truncateText("trun-sm", 70);
    truncateText("trun-bn", 200);
    truncateText("trun-bn-cn", 130);
  }, []);

  return (
    <div id="homepage">
      <Navbar />
      <div className="separator"></div>
      <div id="hot" className="container-box">
        <div className="list-1">
          <FontAwesomeIcon icon={faFire} style={{ color: "#e32400" }} />
          <span>HOT</span>
        </div>
        <div className="separator" style={{ height: "1px" }}></div>
        <div className="content-hot">
          <div className="left">
            <div className="posts">
              <Link
                onClick={handleLinkClick}
                className="link right"
                to={`/viewpage/Business/Econ/${Business.Econ[1].id}`}>
                <img src={Business.Econ[1].images[0]} />
              </Link>
              <div className="left">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/Business/Econ/${Business.Econ[1].id}`}>
                  <b>{Business.Econ[1].title}</b>
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/Business/Econ/${Business.Econ[1].id}`}>
                  <p className="trunLeft">
                    {Business.Econ[1].content[0]} {Business.Econ[1].content[1]}{" "}
                  </p>
                </Link>
              </div>
            </div>
            <div className="posts">
              <div className="left">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/Business/Econ/${Business.Econ[0].id}`}>
                  <b>{Business.Econ[0].title}</b>
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/Business/Econ/${Business.Econ[0].id}`}>
                  <p className="trunLeft">{Business.Econ[0].content[0]}</p>
                </Link>
              </div>
              <Link
                onClick={handleLinkClick}
                className="link right"
                to={`/viewpage/Business/Econ/${Business.Econ[0].id}`}>
                <img src={Business.Econ[0].images[0]} />
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="posts-top">
              <Link
                onClick={handleLinkClick}
                className="link top"
                to={`/viewpage/Sports/Football/${Sports.Football[0].id}`}>
                <img src={Sports.Football[0].images[0]} alt="" />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/Sports/Football/${Sports.Football[0].id}`}>
                <b>{Sports.Football[0].title}</b>
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/Sports/Football/${Sports.Football[0].id}`}>
                <p className="trunTop">{Sports.Football[0].content[0]} </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="separator" style={{ height: "1px" }}></div>
      </div>

      <div id="BreakingNews" className="container-box">
        <div className="list-2">
          <span>Breaking News</span>
        </div>
        <div className="separator" style={{ backgroundColor: "red" }}></div>
        <div className="content-breaking-news">
          <div className="left">
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/Sports/Football/${Sports.Football[2].id}`}>
                <img src={Sports.Football[2].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/Sports/Football/${Sports.Football[2].id}`}>
                <b className="trun-Sm">{Sports.Football[2].title}</b>
              </Link>
            </div>
            <div className="separator"></div>
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/Sports/Golf/${Sports.Golf[1].id}`}>
                <img src={Sports.Golf[1].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/Sports/Golf/${Sports.Golf[1].id}`}>
                <b className="trun-sm">{Sports.Golf[1].title}</b>
              </Link>
            </div>
            <div className="separator"></div>
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/Sports/Football/${Sports.Football[3].id}`}>
                <img src={Sports.Football[3].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/Sports/Football/${Sports.Football[3].id}`}>
                <b className="trun-sm">{Sports.Football[3].title}</b>
              </Link>
            </div>
            <div className="separator"></div>
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/Sports/Golf/${Sports.Golf[2].id}`}>
                <img src={Sports.Golf[2].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/Sports/Golf/${Sports.Golf[2].id}`}>
                <b className="trun-sm">{Sports.Golf[2].title}</b>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="posts posts-bn">
              <div className="left">
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/Business/Tech/${Business.Tech[0].id}`}>
                  <b>{Business.Tech[0].title}</b>
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/Business/Tech/${Business.Tech[0].id}`}>
                  <p className="trun-bn">
                    {Business.Tech[0].content[0]} {Business.Tech[0].content[1]}{" "}
                    {Business.Tech[0].content[2]}
                  </p>
                </Link>
              </div>
              <Link
                onClick={handleLinkClick}
                className="link right"
                to={`/viewpage/Business/Tech/${Business.Tech[0].id}`}>
                <img src={Business.Tech[0].images[0]} alt="" />
              </Link>
            </div>
            <div className="posts posts-bn">
              <Link
                onClick={handleLinkClick}
                className="link right"
                to={`/viewpage/Business/Tech/${Business.Tech[1].id}`}>
                <img src={Business.Tech[1].images[0]} alt="" />
              </Link>
              <div className="left">
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/Business/Tech/${Business.Tech[1].id}`}>
                  <b>{Business.Tech[1].title}</b>
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/Business/Tech/${Business.Tech[1].id}`}>
                  <p className="trun-bn">
                    {Business.Tech[1].content[0]} {Business.Tech[1].content[1]}{" "}
                    {Business.Tech[1].content[2]}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="TodayInWorld" className="container-box">
        <div className="list-2">
          <span>Today In World</span>
        </div>
        <div className="separator" style={{ backgroundColor: "black" }}></div>
        <div className="content-todayinworld">
          <div className="left">
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[0].id}`}>
                <img src={TodayInWorld.US[0].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[0].id}`}>
                <b className="trun-sm">{TodayInWorld.US[0].title}</b>
              </Link>
            </div>
            <div className="separator"></div>
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[0].id}`}>
                <img src={TodayInWorld.Germany[0].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[0].id}`}>
                <b className="trun-sm">{TodayInWorld.Germany[0].title}</b>
              </Link>
            </div>
            <div className="separator"></div>
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[0].id}`}>
                <img src={TodayInWorld.China[0].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[0].id}`}>
                <b className="trun-sm">{TodayInWorld.China[0].title}</b>
              </Link>
            </div>
            <div className="separator"></div>
            <div className="posts-sm">
              <Link
                onClick={handleLinkClick}
                className="link left-sm "
                to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[0].id}`}>
                <img src={TodayInWorld.Japan[0].images[0]} />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link right-sm"
                to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[0].id}`}>
                <b className="trun-sm">{TodayInWorld.Japan[0].title}</b>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="posts posts-bn">
              <Link
                onClick={handleLinkClick}
                className="link right"
                to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[1].id}`}>
                <img src={TodayInWorld.Japan[1].images[0]} alt="" />
              </Link>
              <div className="left">
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[1].id}`}>
                  <b>{TodayInWorld.Japan[1].title}</b>
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[1].id}`}>
                  <p className="trun-bn-cn">
                    {TodayInWorld.Japan[1].content[0]}{" "}
                    {TodayInWorld.Japan[1].content[1]}{" "}
                    {TodayInWorld.Japan[1].content[2]}
                  </p>
                </Link>
              </div>
            </div>
            <div className="posts posts-bn">
              <div className="left">
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[1].id}`}>
                  <b>{TodayInWorld.China[1].title}</b>
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link "
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[1].id}`}>
                  <p className="trun-bn-cn">
                    {TodayInWorld.China[1].content[0]}{" "}
                    {TodayInWorld.China[1].content[1]}{" "}
                    {TodayInWorld.China[1].content[2]}
                  </p>
                </Link>
              </div>
              <Link
                onClick={handleLinkClick}
                className="link right"
                to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[1].id}`}>
                <img src={TodayInWorld.China[1].images[0]} alt="" />
              </Link>
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

export default Homepage;
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
