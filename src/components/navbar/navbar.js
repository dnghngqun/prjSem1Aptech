import { faList, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../css/nav/navbar.css";
const Navbar = () => {
  const activeNavBar = {
    fontWeight: "650",
  };
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const { category } = useParams();
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  console.log(category);
  return (
    <div id="header" style={{ backgroundColor: "#e5e5e5" }}>
      <div id="header-pc">
        <div className="left">
          <NavLink to="/" onClick={handleLinkClick}>
            <img src="/logo.png" alt="logo" />
          </NavLink>
        </div>
        <div className="right ">
          <div className="hover hide-mobile">
            <NavLink
              className="navlink1 navlink "
              onClick={handleLinkClick}
              to="/"
              style={({ isActive }) => (isActive ? activeNavBar : {})}>
              Home
            </NavLink>
          </div>
          <div className="hover hide-tbl hide-mobile">
            <NavLink
              className="navlink2 navlink "
              onClick={handleLinkClick}
              to="/TodayInWorld"
              style={({ isActive }) =>
                isActive || category === "TodayInWorld" ? activeNavBar : {}
              }>
              Today in World
            </NavLink>
          </div>
          <div className="hover hide-tbl hide-mobile">
            <NavLink
              className="navlink3 navlink "
              onClick={handleLinkClick}
              to="/Sports"
              style={({ isActive }) =>
                isActive || category === "Sports" ? activeNavBar : {}
              }>
              Sports
            </NavLink>
          </div>
          <div className="hover hide-tbl hide-mobile">
            <NavLink
              className="navlink4 navlink "
              onClick={handleLinkClick}
              to="/Business"
              style={({ isActive }) =>
                isActive || category === "Business" ? activeNavBar : {}
              }>
              Business
            </NavLink>
          </div>
          <div className="menu" onClick={toggleSubMenu}>
            <FontAwesomeIcon
              icon={faList}
              className="button-dropdown  "
              type="button"
            />
          </div>

          <div>
            <a className="btn btn-dark" to="#" style={{ color: "#fff" }}>
              Login
            </a>
          </div>
        </div>
      </div>
      <div className={`sub-menu ${isSubMenuVisible ? "visible" : ""}`}>
        <div className="sub-menu-flex right">
          <div className="hover show-mobile">
            <NavLink
              className="navlink1 navlink "
              onClick={handleLinkClick}
              to="/"
              style={({ isActive }) => (isActive ? activeNavBar : {})}>
              Home
            </NavLink>
          </div>
          <div className="hover">
            <NavLink
              className="navlink2 navlink "
              onClick={handleLinkClick}
              to="/TodayInWorld"
              style={({ isActive }) =>
                isActive || category === "TodayInWorld" ? activeNavBar : {}
              }>
              Today in World
            </NavLink>
          </div>
          <div className="hover">
            <NavLink
              className="navlink3 navlink"
              onClick={handleLinkClick}
              to="/Sports"
              style={({ isActive }) =>
                isActive || category === "Sports" ? activeNavBar : {}
              }>
              Sports
            </NavLink>
          </div>
          <div className="hover">
            <NavLink
              className="navlink4 navlink"
              onClick={handleLinkClick}
              to="/Business"
              style={({ isActive }) =>
                isActive || category === "Business" ? activeNavBar : {}
              }>
              Business
            </NavLink>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faX}
          className="icon"
          type="button"
          onClick={() => setSubMenuVisible(false)}
        />
      </div>
    </div>
  );
};

export default Navbar;
