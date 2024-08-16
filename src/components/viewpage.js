import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import jsonData from "../data.json";
import Footer from "./Footer";
import "./css/viewpage.css";
import Navbar from "./navbar/navbar";
const Viewpage = (props) => {
  const { category, subCategory, id } = useParams();
  const article = findArticle(category, subCategory, id);
  const relatedArticles = getRelatedArticles(category, subCategory, id);
  const [currentDateTime, setCurrentDateTime] = useState("");

  const showDateTime = () => {
    const now = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();
    setCurrentDateTime(`${dayOfWeek}, ${month}/${day}/${year}`);
  };

  useEffect(() => {
    const datetimeElement = document.getElementById("datetime");
    if (datetimeElement) {
      showDateTime();
      const intervalId = setInterval(showDateTime, 1000);
      return () => {
        clearInterval(intervalId);
      };
    } else {
      console.error('Could not find element ID "datetime".');
    }
  });

  return (
    <div>
      <Navbar />
      <div className="extension">
        <div className="breadcrumb left">{useBreadcrumbs()}</div>
        <div className="right" id="datetime">
          {currentDateTime}
        </div>
      </div>

      {article ? (
        <div className="content-view">
          <b className="head-text text">{article.title}</b>
          {article.content.map((content, index) => (
            <React.Fragment key={index}>
              <p className="text">{content}</p>
              {article.images[index] && (
                <React.Fragment>
                  <figure className="img-1 img">
                    <img src={article.images[index]} alt={`Image ${index}`} />
                    <br />
                    {article["Text-image"][index] && (
                      <figcaption>{article["Text-image"][index]}</figcaption>
                    )}
                  </figure>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p>404 Not Found</p>
      )}
      <div className="related-news">
        <div className="list">
          <span
            style={{
              backgroundColor: "black",
              color: "#FFF",
              padding: "5px 10px",
              fontSize: "20px",
            }}>
            Related news
          </span>
        </div>
        <div className="separator" style={{ backgroundColor: "black" }}></div>
        <div className="related-page">
          {relatedArticles.map((relatedArticles) => (
            <div className="posts-view" key={relatedArticles.id}>
              <Link
                onClick={handleLinkClick}
                className="link"
                to={`/viewpage/${category}/${subCategory}/${relatedArticles.id}`}>
                <img src={relatedArticles.images[0]} alt="" />
              </Link>

              <Link
                onClick={handleLinkClick}
                className="link-to"
                to={`/viewpage/${category}/${subCategory}/${relatedArticles.id}`}>
                <b style={{ color: "#000" }} id="relatedHover">
                  {relatedArticles.title}
                </b>
              </Link>
            </div>
          ))}
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

export default Viewpage;
function useBreadcrumbs() {
  const { category, subCategory } = useParams();
  const breadcrumbs = [];
  if (category === "TodayInWorld") {
    breadcrumbs.push(
      <li key="TodayInWorld">
        <Link onClick={handleLinkClick} to="/" className="link-to">
          Home {">"}
        </Link>
      </li>
    );
    breadcrumbs.push(
      <li key="TodayInWorldCategory">
        <Link onClick={handleLinkClick} to="/TodayInWorld" className="link-to">
          Today in World {">"}
        </Link>
      </li>
    );
    breadcrumbs.push(
      <li key="TodayInWorldSubCategory">
        <Link
          onClick={handleLinkClick}
          to={`/TodayInWorld/${subCategory}`}
          className="link-to">
          {subCategory}
        </Link>
      </li>
    );
  } else if (category === "Business") {
    breadcrumbs.push(
      <li key="Business">
        <Link onClick={handleLinkClick} to="/" className="link-to">
          Home {">"}
        </Link>
      </li>
    );
    breadcrumbs.push(
      <li key="BusinessCategory">
        <Link onClick={handleLinkClick} to="/Business" className="link-to">
          Business {">"}
        </Link>
      </li>
    );
    breadcrumbs.push(
      <li key="BusinessSubCategory">
        <Link
          onClick={handleLinkClick}
          to={`/Business/${subCategory}`}
          className="link-to">
          {subCategory}
        </Link>
      </li>
    );
  } else if (category === "Sports") {
    breadcrumbs.push(
      <li key="Sports">
        <Link onClick={handleLinkClick} to="/" className="link-to">
          Home {">"}
        </Link>
      </li>
    );
    breadcrumbs.push(
      <li key="SportsCategory">
        <Link onClick={handleLinkClick} to="/Sports" className="link-to">
          Sports {">"}
        </Link>
      </li>
    );
    breadcrumbs.push(
      <li key="SportsSubCategory">
        <Link
          onClick={handleLinkClick}
          to={`/Sports/${subCategory}`}
          className="link-to">
          {subCategory}
        </Link>
      </li>
    );
  }
  return breadcrumbs;
}
function findArticle(category, subCategory, id) {
  // directly access the variable without jsonData
  const { TodayInWorld, Business, Sports } = jsonData;

  let articles = null;
  if (category === "TodayInWorld") {
    articles = TodayInWorld[subCategory]?.find(
      (item) => item.id === parseInt(id)
    );
  } else if (category === "Business") {
    articles = Business[subCategory]?.find((item) => item.id === parseInt(id));
  } else if (category === "Sports") {
    articles = Sports[subCategory]?.find((item) => item.id === parseInt(id));
  }
  if (articles && articles.images) {
    const imagesWithLinks = articles.images.map((image) => {
      console.log(image);
      return `${image}`;
    });

    articles.images = imagesWithLinks;
  }

  return articles || null;
}

function shuffle(article) {
  for (let i = article.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [article[i], article[j]] = [article[j], article[i]];
  }
  return article;
}
function getRelatedArticles(category, subCategory, currentArticleId) {
  const { TodayInWorld, Business, Sports } = jsonData;

  let articles = null;
  if (category === "TodayInWorld") {
    articles = TodayInWorld[subCategory] || [];
  } else if (category === "Business") {
    articles = Business[subCategory] || [];
  } else if (category === "Sports") {
    articles = Sports[subCategory] || [];
  }

  const relatedArticles = articles.filter(
    (article) => article.id !== parseInt(currentArticleId)
  );
  const shuffledArticles = shuffle(relatedArticles);

  return shuffledArticles.slice(0, 3);
}

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
