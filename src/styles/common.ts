import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ThemeI } from "./theme";

interface StyledNavLinkProps {
  theme: ThemeI;
}
export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  :hover {
    color: ${({ theme: { color } }) => color.green};
  }
`;
