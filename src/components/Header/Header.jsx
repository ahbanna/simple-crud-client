import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/users", label: "Users" },
  ];
  return (
    <div>
      <div className="header-area">
        <div className="header-logo">
          <Link to="/"></Link>
        </div>
        <div className="d-flex align-items-center">
          <ul className="hidden d-flex align-items-center menu-items ">
            {menuItems.map((item) => (
              <li>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-apply-btn">
          <Link to="/login"></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
