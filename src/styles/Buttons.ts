import styled, { css } from "styled-components";
import { ThemeI } from "./theme";

interface StyledButtonProps {
  small?: boolean;
}
export const StyledButtonAccess = styled.button<StyledButtonProps>`
  display: block;
  margin: 0 auto;
  padding: 8px 30px;
  border-radius: 50px;
  border-color: black;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 3px;

  :hover {
    background-color: ${({ theme: { color } }) => color.green};
    color: white;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 6px 20px;
      font-size: 20px;
      letter-spacing: 1px;
    `}
`;
interface RectangleButtonProps {
  theme: ThemeI;
}
export const RectangleButton = styled.button<RectangleButtonProps>`
  display: block;
  margin: 0 auto;
  padding: 4px 20px;
  border-color: black;
  font-size: 18px;

  :hover {
    background-color: ${({ theme: { color } }) => color.green};
    color: white;
  }
`;
