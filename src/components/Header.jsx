import React, { useState } from "react";
import { Hamburger, Logo } from "../assets/icons";
import "../styles/header.scss";
import { ROUTES } from "../utils";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <header>
      <section>
        <Logo />
      </section>
      <nav>
        <ul>
          {ROUTES.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item.routeTo}
              >
                {item.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="side-nav">
        <span className="menu-icon" onClick={() => setSideNav((prev) => !prev)}>
          <Hamburger />
        </span>

        <ul className={`menu-nav ${sideNav ? "show-menu" : ""}`}>
          {ROUTES.map((item) => (
            <li key={item.id} onClick={() => setSideNav((prev) => !prev)}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={item.routeTo}
              >
                {item.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Header;
