import React from "react";
import { Link } from "react-router-dom";
import "../css/nav/NavToday.css";
const navToday = () => {
  return (
    <div className="header-today">
      <Link to="/TodayInWorld" style={{ textDecoration: "none" }}>
        <div className="logo-today">
          <a>TODAY IN WORLD</a>
        </div>
      </Link>
      <nav>
        <ul className="navigation">
          <li>
            <Link className="world" to="/TodayInWorld">
              World
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className="navv"
              to="/TodayInWorld/US">
              US
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className="navv"
              to="/TodayInWorld/Germany">
              Germany
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className="navv"
              to="/TodayInWorld/Italy">
              Italy
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className="navv"
              to="/TodayInWorld/China">
              China
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className="navv"
              to="/TodayInWorld/Japan">
              Japan
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navToday;
const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
