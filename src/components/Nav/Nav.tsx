import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { NavListContainer } from "./NavList/NavListContainer";
import { ROUTES, NAV_LINKS } from "../../types";
import { StyledNav, StyledNavLink, StyledNavBar } from "./navStyles";
import { Button } from "../Button/Button";
import { ButtonTypes } from "../../styles/buttonStyles";

export const Nav = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const memoHideNavBar = useCallback(() => {
    setShowNavBar(false);
  }, []);

  useEffect(() => {
    if (showNavBar) window.addEventListener("click", memoHideNavBar);

    return () => {
      window.removeEventListener("click", memoHideNavBar);
    };
  }, [showNavBar]);

  return (
    <StyledNav
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      <StyledNavLink exact to={ROUTES.CRYTPO_MASTER}>
        {NAV_LINKS.CRYTPO_MASTER}
      </StyledNavLink>
      <StyledNavBar isShown={showNavBar}>
        <NavListContainer />
      </StyledNavBar>
      <Button
        buttonType={ButtonTypes.hamburger}
        handleClick={() => {
          setShowNavBar(!showNavBar);
        }}
      >
        <FontAwesomeIcon icon={showNavBar ? faTimes : faBars}></FontAwesomeIcon>
      </Button>
    </StyledNav>
  );
};

export default Nav;
