import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  :hover {
    color: ${({ theme: { color } }) => color.green};
  }
`;
