import React from "react";

import { ROUTES, NAV_LINKS } from "../../../types";
import { StyledNavLink, StyledNavList, StyledNavItem } from "../navStyles";

export const NavList = () => {
  return (
    <StyledNavList>
      <StyledNavItem>
        <StyledNavLink to={ROUTES.STOCK}>{NAV_LINKS.STOCK}</StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to={ROUTES.RANK}>{NAV_LINKS.RANK}</StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to={ROUTES.INVESTMENTS}>
          {NAV_LINKS.INVESTMENTS}
        </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to={ROUTES.ACCOUNT}>{NAV_LINKS.ACCOUNT}</StyledNavLink>
      </StyledNavItem>
    </StyledNavList>
  );
};
