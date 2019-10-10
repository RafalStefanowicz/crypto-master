import React from "react";
import { NavLink } from "react-router-dom";

import { NavListContainer } from "./NavList/NavListContainer";
import { ROUTES, NAV_LINKS } from "../../types";
import { StyledNav } from "./navStyles";

export const Nav = () => {
  return (
    <StyledNav>
      <NavLink to={ROUTES.CRYTPO_MASTER}>{NAV_LINKS.CRYTPO_MASTER}</NavLink>
      <NavListContainer />
    </StyledNav>
  );
};

export default Nav;
