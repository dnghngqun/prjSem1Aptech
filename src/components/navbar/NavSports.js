import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav/NavSports.css";
const NavSports = () => {
  return (
    <div className="nav-sports">
      <div className="nav-left">
        <NavLink
          className="navLink"
          onClick={handleLinkClick}
          to="/Sports"
          style={{ textDecoration: "none" }}>
          <h1 className="Logo-sports ">Sports</h1>
        </NavLink>
      </div>
      <nav className="nav-right">
        <NavLink
          className="navLink"
          onClick={handleLinkClick}
          to="/Sports/Football">
          <div>Football</div>
        </NavLink>
        <NavLink
          className="navLink"
          onClick={handleLinkClick}
          to="/Sports/Golf">
          <div>Golf</div>
        </NavLink>
        <NavLink className="navLink" onClick={handleLinkClick} to="#tennis">
          <div>Tennis</div>
        </NavLink>
        <NavLink className="navLink" onClick={handleLinkClick} to="#badminton">
          <div>Badminton</div>
        </NavLink>
        <NavLink className="navLink" onClick={handleLinkClick} to="#swimming">
          <div>Swimming</div>
        </NavLink>
        <NavLink className="navLink" onClick={handleLinkClick} to="#cycling">
          <div style={{ borderRight: "0" }}>Cycling</div>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavSports;
const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
