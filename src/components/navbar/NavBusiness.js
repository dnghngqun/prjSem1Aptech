import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav/NavBusiness.css";
const NavBusiness = () => {
  return (
    <div>
      <div className="container-business">
        <NavLink
          onClick={handleLinkClick}
          to="/Business"
          style={{ textDecoration: "none", color: "#fff" }}
          className="left-bs">
          <div className="logo-business">
            <span>Business</span>
          </div>
        </NavLink>
        <div className="right-bs">
          <nav className="navBusiness">
            <NavLink onClick={handleLinkClick} to="/Business/Econ">
              <div>Finance and economy</div>
            </NavLink>
            <NavLink onClick={handleLinkClick} to="/Business/Tech">
              <div>Technology of Business</div>
            </NavLink>
            <NavLink onClick={handleLinkClick} to="#Business">
              <div>Business</div>
            </NavLink>
            <NavLink onClick={handleLinkClick} to="#WK">
              <div>Work Culture</div>
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="separator" style={{ height: "1px" }}></div>
    </div>
  );
};

export default NavBusiness;

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
