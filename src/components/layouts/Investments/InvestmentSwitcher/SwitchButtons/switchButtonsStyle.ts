import styled, { css } from "styled-components";
import { ThemeI } from "../../../../../styles/theme";

export const StyledButtonsWrapper = styled.div`
  display: flex;
`;

interface StyledSwitchButtonProps {
  isActive: boolean;
  theme: ThemeI;
}

export const StyledSwitchButton = styled.button<StyledSwitchButtonProps>`
  flex: 1;
  font-size: 20px;
  border: 2px solid gray;
  color: gray;
  padding: 4px 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  margin: 1px;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      border: 2px solid ${theme.color.green};
      color: ${theme.color.green};
    `};

  ${({ isActive }) =>
    !isActive &&
    css`
      :hover {
        border: 2px solid black;
        color: black;
      }
    `};
`;
