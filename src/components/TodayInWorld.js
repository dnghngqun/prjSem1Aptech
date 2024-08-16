import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import jsonData from "../data.json";
import Footer from "./Footer";
import "./css/TodayInWorld.css";
import NavToday from "./navbar/navToday";
import Navbar from "./navbar/navbar";
const TodayInWorld = () => {
  const { TodayInWorld } = jsonData;

  return (
    <div className="TodayInWorld">
      <Navbar />
      <NavToday />

      <main className="main-box">
        <div className="news-container">
          <ul>
            <li>
              <a>World News</a>
            </li>
          </ul>
          <section className="news-section">
            <article className="news-article1">
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[4].id}`}>
                <img src={TodayInWorld.US[4].images[0]} alt="" />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[4].id}`}>
                <h3>{TodayInWorld.US[4].title}</h3>
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[4].id}`}>
                <p>
                  {TodayInWorld.US[4].content[0]}{" "}
                  {TodayInWorld.US[4].content[1]}{" "}
                  {TodayInWorld.US[4].content[2]}
                </p>
              </Link>
            </article>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[4].id}`}>
                  <img src={TodayInWorld.China[4].images[0]} alt="" />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[4].id}`}>
                  <h3>{TodayInWorld.China[4].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[4].id}`}>
                  <img src={TodayInWorld.Italy[4].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[4].id}`}>
                  <h3>{TodayInWorld.Italy[4].title}</h3>
                </Link>
              </article>
            </div>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[4].id}`}>
                  <img src={TodayInWorld.Germany[4].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[4].id}`}>
                  <h3>{TodayInWorld.Germany[4].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[4].id}`}>
                  <img src={TodayInWorld.Japan[4].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[4].id}`}>
                  <h3>{TodayInWorld.Japan[4].title}</h3>
                </Link>
              </article>
            </div>
          </section>

          <ul>
            <li>
              <Link
                className="bg-slider"
                style={{ textDecoration: "none" }}
                to="/TodayInWorld/US"
                onClick={handleLinkClick}>
                US <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          </ul>
          <section className="news-section">
            <article className="news-article1">
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[0].id}`}>
                <img src={TodayInWorld.US[0].images[0]} alt=" " />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[0].id}`}>
                <h3>{TodayInWorld.US[0].title}</h3>
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[0].id}`}>
                <p>
                  {TodayInWorld.US[0].content[0]}{" "}
                  {TodayInWorld.US[0].content[1]}
                </p>
              </Link>
            </article>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[1].id}`}>
                  <img src={TodayInWorld.US[1].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[1].id}`}>
                  <h3>{TodayInWorld.US[1].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[2].id}`}>
                  <img src={TodayInWorld.US[2].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[2].id}`}>
                  <h3>{TodayInWorld.US[2].title}</h3>
                </Link>
              </article>
            </div>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[3].id}`}>
                  <img src={TodayInWorld.US[3].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[3].id}`}>
                  <h3>{TodayInWorld.US[3].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[4].id}`}>
                  <img src={TodayInWorld.US[4].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/US/${TodayInWorld.US[4].id}`}>
                  <h3>{TodayInWorld.US[4].title}</h3>
                </Link>
              </article>
            </div>
          </section>

          <ul>
            <li>
              <Link
                className="bg-slider"
                style={{ textDecoration: "none" }}
                to="/TodayInWorld/Germany"
                onClick={handleLinkClick}>
                Germany
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          </ul>
          <section className="news-section">
            <article className="news-article1">
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[0].id}`}>
                <img src={TodayInWorld.Germany[0].images[0]} alt=" " />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[0].id}`}>
                <h3>{TodayInWorld.Germany[0].title}</h3>
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[0].id}`}>
                <p>
                  {TodayInWorld.Germany[0].content[0]}{" "}
                  {TodayInWorld.Germany[0].content[1]}
                </p>
              </Link>
            </article>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[1].id}`}>
                  <img src={TodayInWorld.Germany[1].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[1].id}`}>
                  <h3>{TodayInWorld.Germany[1].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[2].id}`}>
                  <img src={TodayInWorld.Germany[2].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[2].id}`}>
                  <h3>{TodayInWorld.Germany[2].title}</h3>
                </Link>
              </article>
            </div>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[3].id}`}>
                  <img src={TodayInWorld.Germany[3].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[3].id}`}>
                  <h3>{TodayInWorld.Germany[3].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[4].id}`}>
                  <img src={TodayInWorld.Germany[4].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Germany/${TodayInWorld.Germany[4].id}`}>
                  <h3>{TodayInWorld.Germany[4].title}</h3>
                </Link>
              </article>
            </div>
          </section>

          <ul>
            <li>
              <Link
                className="bg-slider"
                style={{ textDecoration: "none" }}
                to="/TodayInWorld/Italy"
                onClick={handleLinkClick}>
                Italy <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          </ul>
          <section className="news-section">
            <article className="news-article1">
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[0].id}`}>
                <img src={TodayInWorld.Italy[0].images[0]} alt=" " />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[0].id}`}>
                <h3>{TodayInWorld.Italy[0].title}</h3>
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[0].id}`}>
                <p>
                  {TodayInWorld.Italy[0].content[0]}{" "}
                  {TodayInWorld.Italy[0].content[1]}
                </p>
              </Link>
            </article>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[1].id}`}>
                  <img src={TodayInWorld.Italy[1].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[1].id}`}>
                  <h3>{TodayInWorld.Italy[1].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[2].id}`}>
                  <img src={TodayInWorld.Italy[2].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[2].id}`}>
                  <h3>{TodayInWorld.Italy[2].title}</h3>
                </Link>
              </article>
            </div>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[3].id}`}>
                  <img src={TodayInWorld.Italy[3].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[3].id}`}>
                  <h3>{TodayInWorld.Italy[3].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[4].id}`}>
                  <img src={TodayInWorld.Italy[4].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Italy/${TodayInWorld.Italy[4].id}`}>
                  <h3>{TodayInWorld.Italy[4].title}</h3>
                </Link>
              </article>
            </div>
          </section>

          <ul>
            <li>
              <Link
                className="bg-slider"
                style={{ textDecoration: "none" }}
                to="/TodayInWorld/China"
                onClick={handleLinkClick}>
                China <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          </ul>
          <section className="news-section">
            <article className="news-article1">
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[0].id}`}>
                <img src={TodayInWorld.China[0].images[0]} alt=" " />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[0].id}`}>
                <h3>{TodayInWorld.China[0].title}</h3>
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[0].id}`}>
                <p>
                  {TodayInWorld.China[0].content[0]}{" "}
                  {TodayInWorld.China[0].content[1]}{" "}
                  {TodayInWorld.China[0].content[2]}{" "}
                  {TodayInWorld.China[0].content[3]}{" "}
                  {TodayInWorld.China[0].content[4]}{" "}
                  {TodayInWorld.China[0].content[5]}{" "}
                  {TodayInWorld.China[0].content[6]}
                </p>
              </Link>
            </article>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[1].id}`}>
                  <img src={TodayInWorld.China[1].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[1].id}`}>
                  <h3>{TodayInWorld.China[1].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[2].id}`}>
                  <img src={TodayInWorld.China[2].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[2].id}`}>
                  <h3>{TodayInWorld.China[2].title}</h3>
                </Link>
              </article>
            </div>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[3].id}`}>
                  <img
                    src={TodayInWorld.China[3].images[0]}
                    style={{ height: "250px", objectFit: "cover" }}
                    alt=" "
                  />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[3].id}`}>
                  <h3>{TodayInWorld.China[3].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[4].id}`}>
                  <img src={TodayInWorld.China[4].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/China/${TodayInWorld.China[4].id}`}>
                  <h3>{TodayInWorld.China[4].title}</h3>
                </Link>
              </article>
            </div>
          </section>

          <ul>
            <li>
              <Link
                className="bg-slider"
                to="/TodayInWorld/Japan"
                style={{ textDecoration: "none" }}
                onClick={handleLinkClick}>
                Japan <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          </ul>
          <section className="news-section">
            <article className="news-article1">
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[0].id}`}>
                <img
                  src={TodayInWorld.Japan[0].images[0]}
                  style={{ height: "300px", objectFit: "cover" }}
                  alt=" "
                />
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[0].id}`}>
                <h3>{TodayInWorld.Japan[0].title}</h3>
              </Link>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[0].id}`}>
                <p>
                  {TodayInWorld.Japan[0].content[0]}{" "}
                  {TodayInWorld.Japan[0].content[1]}{" "}
                  {TodayInWorld.Japan[0].content[2]}{" "}
                  {TodayInWorld.Japan[0].content[3]}
                </p>
              </Link>
            </article>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[1].id}`}>
                  <img src={TodayInWorld.Japan[1].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[1].id}`}>
                  <h3>{TodayInWorld.Japan[1].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[2].id}`}>
                  <img src={TodayInWorld.Japan[2].images[0]} alt=" " />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[2].id}`}>
                  <h3>{TodayInWorld.Japan[2].title}</h3>
                </Link>
              </article>
            </div>
            <div className="related">
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[3].id}`}>
                  <img
                    src={TodayInWorld.Japan[3].images[0]}
                    style={{ height: "220px", objectFit: "cover" }}
                    alt=" "
                  />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[3].id}`}>
                  <h3>{TodayInWorld.Japan[3].title}</h3>
                </Link>
              </article>
              <article className="news-article">
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[4].id}`}>
                  <img
                    src={TodayInWorld.Japan[4].images[0]}
                    alt=" "
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </Link>
                <Link
                  onClick={handleLinkClick}
                  className="link"
                  to={`/viewpage/TodayInWorld/Japan/${TodayInWorld.Japan[4].id}`}>
                  <h3>{TodayInWorld.Japan[4].title}</h3>
                </Link>
              </article>
            </div>
          </section>
        </div>
      </main>

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

export default TodayInWorld;
const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
