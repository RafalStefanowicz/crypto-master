import styled, { css } from "styled-components";

export const StyledButtonsWrapper = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
`;

export enum SwitchButtonTypes {
  small = "small"
}

interface StyledSwitchButton {
  buttonType?: SwitchButtonTypes;
}

export const StyledSwitchButton = styled.button<StyledSwitchButton>`
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

  /* ${({ buttonType }) =>
    buttonType === SwitchButtonTypes.small &&
    css`
      border-width: 1px;
      padding: 2px 0;
      letter-spacing: 2px;
      font-weight: normal;
    `}

  :disabled {
    border-width: 1px;
  }

  :not([disabled]) {
    :hover {
      border-width: 1px;
    }
  } */
`;
