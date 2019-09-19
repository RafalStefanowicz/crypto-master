import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, NAV_LINKS } from "../../types";

export interface NavProps {}

export const Nav: React.SFC<NavProps> = () => {
  return (
    <nav>
      <div>
        <NavLink to={ROUTES.CRYTPO_MASTER}>
          <span>{NAV_LINKS.CRYTPO_MASTER}</span>
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to={ROUTES.STOCK}>
            <span>{NAV_LINKS.STOCK}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.WALLET}>
            <span>{NAV_LINKS.WALLET}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.RANK}>
            <span>{NAV_LINKS.RANK}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.HISTORY}>
            <span>{NAV_LINKS.HISTORY}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ACCOUNT}>
            <span>{NAV_LINKS.ACCOUNT}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
