import styled from "styled-components";
import { ThemeI } from "../../styles/theme";

interface StyledNavProps {
  theme: ThemeI;
}
export const StyledNav = styled.nav<StyledNavProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.green};
  color: white;
`;
