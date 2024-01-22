import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import jsonData from "../../data.json";
import Footer from "../Footer";
import "../css/child.css";
import NavToday from "../navbar/navToday";
import Navbar from "../navbar/navbar";
const TodayChild = () => {
  const { category } = useParams();
  console.log(category);
  const { TodayInWorld } = jsonData;
  const itemsPerPage = 3;
  const itemStartID = 2;
  useEffect(() => {
    truncateText("trun-today-c", 150);
    truncateText("trun-today-head", 70);
  }, [category]);
  return (
    <div>
      <Navbar />
      <NavToday />
      <br />
      {category === "US" && (
        <>
          <h1 className="title-style-head">US</h1>
        </>
      )}
      {category === "Germany" && (
        <>
          <h1 className="title-style-head">Germany</h1>
        </>
      )}
      {category === "Italy" && (
        <>
          <h1 className="title-style-head">Italy</h1>
        </>
      )}
      {category === "China" && (
        <>
          <h1 className="title-style-head">China</h1>
        </>
      )}
      {category === "Japan" && (
        <>
          <h1 className="title-style-head">Japan</h1>
        </>
      )}

      <div className="separate-child"></div>
      <br />
      <div className="container-xxl container-style">
        {category === "US" && (
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <img
                        src={TodayInWorld.US[0].images[0]}
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <b
                        className="card-title text-hover"
                        style={{ fontSize: "25px" }}>
                        {TodayInWorld.US[0].title}
                      </b>
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <p
                        className="card-text trun-today-c text-gray"
                        style={{
                          width: "95%",
                          textAlign: "justify",
                          fontSize: "15px",
                        }}>
                        {TodayInWorld.US[0].content[0]}{" "}
                        {TodayInWorld.US[0].content[1]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              {TodayInWorld.US.slice(
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <b
                            className="card-title trun-today-head text-hover"
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
            {TodayInWorld.US.slice(itemStartID - 1 + itemsPerPage).map(
              (item) => (
                <div className="card card-style mb-3">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-5 col-sm-6 col-5">
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <b className="card-title trun-today-head card-title-style text-hover">
                            {item.title}
                          </b>
                        </Link>
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <p className="card-text trun-today-c text-gray card-text-style">
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
        {category === "Germany" && (
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <img
                        src={TodayInWorld.Germany[0].images[0]}
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <b
                        className="card-title text-hover"
                        style={{ fontSize: "25px" }}>
                        {TodayInWorld.Germany[0].title}
                      </b>
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <p
                        className="card-text trun-today-c text-gray"
                        style={{
                          width: "95%",
                          textAlign: "justify",
                          fontSize: "15px",
                        }}>
                        {TodayInWorld.Germany[0].content[0]}{" "}
                        {TodayInWorld.Germany[0].content[1]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              {TodayInWorld.Germany.slice(
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
            {TodayInWorld.Germany.slice(itemStartID - 1 + itemsPerPage).map(
              (item) => (
                <div className="card card-style mb-3">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-5 col-sm-6 col-5">
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <b className="card-title text-hover card-title-style">
                            {item.title}
                          </b>
                        </Link>
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <p className="card-text trun-today-c text-gray card-text-style">
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
        {category === "Italy" && (
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <img
                        src={TodayInWorld.Italy[0].images[0]}
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <b
                        className="card-title text-hover"
                        style={{ fontSize: "25px" }}>
                        {TodayInWorld.Italy[0].title}
                      </b>
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <p
                        className="card-text trun-today-c text-gray"
                        style={{
                          width: "95%",
                          textAlign: "justify",
                          fontSize: "15px",
                        }}>
                        {TodayInWorld.Italy[0].content[0]}{" "}
                        {TodayInWorld.Italy[0].content[1]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              {TodayInWorld.Italy.slice(
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
            {TodayInWorld.Italy.slice(itemStartID - 1 + itemsPerPage).map(
              (item) => (
                <div className="card card-style mb-3">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-5 col-sm-6 col-5">
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <b className="card-title text-hover card-title-style">
                            {item.title}
                          </b>
                        </Link>
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <p className="card-text trun-today-c text-gray card-text-style">
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
        {category === "China" && (
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <img
                        src={TodayInWorld.China[0].images[0]}
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <b
                        className="card-title text-hover"
                        style={{ fontSize: "25px" }}>
                        {TodayInWorld.China[0].title}
                      </b>
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <p
                        className="card-text trun-today-c text-gray"
                        style={{
                          width: "95%",
                          textAlign: "justify",
                          fontSize: "15px",
                        }}>
                        {TodayInWorld.China[0].content[0]}{" "}
                        {TodayInWorld.China[0].content[1]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              {TodayInWorld.China.slice(
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
            {TodayInWorld.China.slice(itemStartID - 1 + itemsPerPage).map(
              (item) => (
                <div className="card card-style mb-3">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-5 col-sm-6 col-5">
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                        <img
                          src={item.images[0]}
                          className="img-fluid rounded-start img-style"
                          alt="..."
                        />
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-6 col-7 ">
                      <div className="card-body">
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <b className="card-title text-hover card-title-style">
                            {item.title}
                          </b>
                        </Link>
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <p className="card-text trun-today-c text-gray card-text-style">
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
        {category === "Japan" && (
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <img
                        src={TodayInWorld.Japan[0].images[0]}
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
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <b
                        className="card-title text-hover"
                        style={{ fontSize: "25px" }}>
                        {TodayInWorld.Japan[0].title}
                      </b>
                    </Link>
                    <Link
                      onClick={handleLinkClick}
                      className="linkto"
                      to={`/viewpage/TodayInWorld/${category}/1`}>
                      <p
                        className="card-text trun-today-c text-gray"
                        style={{
                          width: "95%",
                          textAlign: "justify",
                          fontSize: "15px",
                        }}>
                        {TodayInWorld.Japan[0].content[0]}{" "}
                        {TodayInWorld.Japan[0].content[1]}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              {TodayInWorld.Japan.slice(
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
            {TodayInWorld.Japan.slice(itemStartID - 1 + itemsPerPage).map(
              (item) => (
                <div className="card card-style mb-3">
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-5 col-sm-6 col-5">
                      <Link
                        onClick={handleLinkClick}
                        className="linkto"
                        to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
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
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <b className="card-title text-hover card-title-style">
                            {item.title}
                          </b>
                        </Link>
                        <Link
                          onClick={handleLinkClick}
                          className="linkto"
                          to={`/viewpage/TodayInWorld/${category}/${item.id}`}>
                          <p className="card-text trun-today-c text-gray card-text-style">
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
        <ul class="pagination justify-content-center w-100 ">
          <li class="page-item disabled">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
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

export default TodayChild;
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
