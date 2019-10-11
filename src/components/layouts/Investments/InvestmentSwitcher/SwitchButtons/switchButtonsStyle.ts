import styled, { css } from "styled-components";
import { ThemeI } from "../../../../../styles/theme";

export const StyledButtonsWrapper = styled.div`
  display: flex;
`;

export const StyledSwitchButton = styled.button`
  flex: 1;
  border: 2px solid gray;
  padding: 4px 0;
  margin: 1px;
  color: gray;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;

  :disabled {
    ${({ theme }) =>
      css`
        border: 2px solid ${theme.color.green};
        color: ${theme.color.green};
      `};
  }

  :not([disabled]) {
    :hover {
      border: 2px solid black;
      color: black;
    }
  }
`;
