import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import { ThemeI } from "../../styles/theme";
import { media } from "../../styles/media";

interface StyledNavProps {
  theme: ThemeI;
}
export const StyledNav = styled.nav<StyledNavProps>`
  font-size: 22px;

  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 4px 0;
  background-color: ${({ theme }) => theme.color.green};
  color: white;
  @media ${media.small} {
    font-size: 18px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  &.active {
    color: ${({ theme }) => theme.color.navyBlue};
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  @media ${media.small} {
    flex-direction: column;
  }
`;

export const StyledNavItem = styled.li``;

interface NavBarProps {
  isShown: boolean;
}

export const StyledNavBar = styled.div<NavBarProps>`
  @media ${media.small} {
    li {
      position: fixed;
      background-color: ${({ theme }) => theme.color.green};
      transition: 0.3s linear;
      width: 0%;
      right: 0;
    }
    li:nth-child(1) {
      top: 30px;
      transition-delay: 0.3s;
    }
    li:nth-child(2) {
      top: 52px;
      transition-delay: 0.2s;
    }
    li:nth-child(3) {
      top: 72px;
      transition-delay: 0.1s;
    }
    li:nth-child(4) {
      top: 94px;
      transition-delay: 0s;
    }

    ${({ isShown }) =>
      isShown &&
      css`
        li {
          width: 100%;
        }
        li:nth-child(1) {
          transition-delay: 0s;
        }
        li:nth-child(2) {
          transition-delay: 0.1s;
        }
        li:nth-child(3) {
          transition-delay: 0.2s;
        }
        li:nth-child(4) {
          transition-delay: 0.3s;
        }
      `}
  }
`;
