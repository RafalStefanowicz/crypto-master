import React from "react";
import { NavLink } from "react-router-dom";

import { NavListContainer } from "./NavList/NavListContainer";
import { ROUTES, NAV_LINKS } from "../../types";

export const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to={ROUTES.CRYTPO_MASTER}>
          <span>{NAV_LINKS.CRYTPO_MASTER}</span>
        </NavLink>
        <NavListContainer />
      </div>
    </nav>
  );
};

export default Nav;
