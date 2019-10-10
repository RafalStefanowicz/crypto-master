import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, NAV_LINKS } from "../../../types";
import { StyledNavList, StyledNavItem } from "./navListStyles";

export const NavList = () => {
  return (
    <StyledNavList>
      <StyledNavItem>
        <NavLink to={ROUTES.STOCK}>{NAV_LINKS.STOCK}</NavLink>
      </StyledNavItem>
      <StyledNavItem>
        <NavLink to={ROUTES.RANK}>{NAV_LINKS.RANK}</NavLink>
      </StyledNavItem>
      <StyledNavItem>
        <NavLink to={ROUTES.INVESTMENTS}>{NAV_LINKS.INVESTMENTS}</NavLink>
      </StyledNavItem>
      <StyledNavItem>
        <NavLink to={ROUTES.ACCOUNT}>{NAV_LINKS.ACCOUNT}</NavLink>
      </StyledNavItem>
    </StyledNavList>
  );
};
