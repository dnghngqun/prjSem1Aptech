import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import jsonData from "../../data.json";
import Footer from "../Footer";
import "../css/child.css";
import NavSports from "../navbar/NavSports";
import Navbar from "../navbar/navbar";

const SportsChild = () => {
  const { category } = useParams();
  console.log(category);
  const { Sports } = jsonData;
  const itemsPerPage = 3;
  const itemStartID = 2;
  useEffect(() => {
    truncateText("trun-sp-c", 150);
    truncateText("trun-sp-head", 70);
  }, []);
  return (
    <div>
      <Navbar />
      <NavSports />
      <br />
      {category === "Football" && (
        <>
          <h1 className="title-style-head">Football</h1>
        </>
      )}
      {category === "Golf" && (
        <>
          <h1 className="title-style-head">Golf</h1>
        </>
      )}

      <div className="separate-child"></div>
      <br />
      <div className="container-xxl container-style">
        {category === "Golf" && (
          <>
            <div className="row ">
              <div
                className="card m-0 p-0 border border-0"
                style={{ backgroundColor: "#f7f7f7", borderRadius: "0" }}>
                <div className="row">
                  <div className="col-md-6 ">
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/Sports/${category}/1`}>
                      <img
                        src={Sports.Golf[0].images[0]}
                        style={{ objectFit: "cover", borderRadius: "0" }}
                        className="img-fluid "
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="col-md-6 " style={{}}>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/Sports/${category}/1`}>
                      <b
                        className="card-title text-hover"
                        style={{ fontSize: "25px" }}>
                        {Sports.Golf[0].title}
                      </b>
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/Sports/${category}/1`}>
                      <p
                        className="card-text  trun-sp-c text-gray"
                        style={{
                          width: "95%",
                          textAlign: "justify",
                          fontSize: "15px",
                        }}>
                        {Sports.Golf[0].content[0]} {Sports.Golf[0].content[1]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              {Sports.Golf.slice(
                itemStartID - 1,
                itemStartID - 1 + itemsPerPage
              ).map((item) => (
                <div className="col-md-4">
                  <div
                    className="card border-0 m-0 p-0"
                    style={{ borderRadius: "0" }}>
                    <div className="row">
                      <div className="card-img-top">
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/Sports/${category}/${item.id}`}>
                          <img
                            src={item.images[0]}
                            style={{
                              height: "",
                              objectFit: "cover",
                              borderRadius: "0",
                            }}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </Link>
                      </div>

                      <div className="card-body">
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/Sports/${category}/${item.id}`}>
                          <b
                            className="card-title trun-sp-head text-hover"
                            style={{ fontSize: "16px" }}>
                            {item.title}
                          </b>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
            </div>
            {Sports.Golf.slice(itemStartID - 1 + itemsPerPage).map((item) => (
              <div className="card mb-3 card-style">
                <div className="row g-0">
                  <div className="col-lg-4 col-md-5 col-sm-6 col-5">
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/Sports/${category}/${item.id}`}>
                      <img
                        src={item.images[0]}
                        className="img-fluid rounded-start img-style"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="col-lg-8 col-md-7 col-sm-6 col-7">
                    <div className="card-body">
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/Sports/${category}/${item.id}`}>
                        <b className="card-title trun-sp-head text-hover card-title-style">
                          {item.title}
                        </b>
                      </Link>
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/Sports/${category}/${item.id}`}>
                        <p className="card-text trun-sp-c text-gray card-text-style">
                          {item.content[0]} {item.content[1]}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {category === "Football" && (
          <>
            <div className="row ">
              <div
                className="card m-0 p-0 border border-0"
                style={{ backgroundColor: "#f7f7f7", borderRadius: "0" }}>
                <div className="row">
                  <div className="col-md-6 ">
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/Sports/${category}/1`}>
                      <img
                        src={Sports.Football[0].images[0]}
                        style={{ objectFit: "cover", borderRadius: "0" }}
                        className="img-fluid "
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="col-md-6 " style={{}}>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/Sports/${category}/1`}>
                      <b
                        className="card-title text-hover"
                        style={{ fontSize: "25px" }}>
                        {Sports.Football[0].title}
                      </b>
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/Sports/${category}/1`}>
                      <p
                        className="card-text trun-sp-c text-gray"
                        style={{
                          width: "95%",
                          textAlign: "justify",
                          fontSize: "15px",
                        }}>
                        {Sports.Football[0].content[0]}{" "}
                        {Sports.Football[0].content[1]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              {Sports.Football.slice(
                itemStartID - 1,
                itemStartID - 1 + itemsPerPage
              ).map((item) => (
                <div className="col-md-4">
                  <div
                    className="card border-0 m-0 p-0"
                    style={{ borderRadius: "0" }}>
                    <div className="row">
                      <div className="card-img-top">
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/Sports/${category}/${item.id}`}>
                          <img
                            src={item.images[0]}
                            style={{
                              height: "",
                              objectFit: "cover",
                              borderRadius: "0",
                            }}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </Link>
                      </div>

                      <div className="card-body">
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/Sports/${category}/${item.id}`}>
                          <b
                            className="card-title text-hover"
                            style={{ fontSize: "16px" }}>
                            {item.title}
                          </b>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
            </div>
            {Sports.Football.slice(itemStartID - 1 + itemsPerPage).map(
              (item) => (
                <div className="card mb-3 card-style">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-5 col-sm-6 col-5">
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/Sports/${category}/${item.id}`}>
                        <img
                          src={item.images[0]}
                          className="img-fluid rounded-start img-style"
                          alt="..."
                        />
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-6 col-7">
                      <div className="card-body">
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/Sports/${category}/${item.id}`}>
                          <b className="card-title text-hover card-title-style ">
                            {item.title}
                          </b>
                        </Link>
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/Sports/${category}/${item.id}`}>
                          <p
                            className="card-text trun-sp-c text-gray card-text-style"
                            style={{ textAlign: "justify", fontSize: "15px" }}>
                            {item.content[0]} {item.content[1]}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </>
        )}
      </div>
      <div className="separate-child"></div>
      <nav aria-label="Page navigation" style={{ marginTop: "1vh" }}>
        <ul className="pagination justify-content-center w-100 ">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <br />
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

export default SportsChild;
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
