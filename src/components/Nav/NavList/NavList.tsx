import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, NAV_LINKS } from "../../../types";

export const NavList = () => {
  return (
    <ul>
      <li>
        <NavLink to={ROUTES.STOCK}>
          <span>{NAV_LINKS.STOCK}</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.RANK}>
          <span>{NAV_LINKS.RANK}</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.INVESTMENTS}>
          <span>{NAV_LINKS.INVESTMENTS}</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ACCOUNT}>
          <span>{NAV_LINKS.ACCOUNT}</span>
        </NavLink>
      </li>
    </ul>
  );
};
