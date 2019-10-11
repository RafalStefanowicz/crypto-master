import styled, { css } from "styled-components";
import { ThemeI } from "./theme";
import { media } from "./media";

export enum ButtonTypes {
  access = "access",
  accessSmall = "accessSmall",
  rectangle = "rectangle"
}

interface StyledButtonProps {
  buttonType:
    | ButtonTypes.access
    | ButtonTypes.accessSmall
    | ButtonTypes.rectangle;
  theme: ThemeI;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ buttonType }) =>
    (buttonType === ButtonTypes.access ||
      buttonType === ButtonTypes.accessSmall) &&
    css`
      padding: 6px 20px;
      letter-spacing: 1px;
      display: block;
      margin: 0 auto;
      padding: 8px 30px;
      border-radius: 50px;
      border-color: black;
      text-transform: uppercase;
      letter-spacing: 3px;

      :hover {
        background-color: ${({ theme: { color } }) => color.green};
        color: white;
      }

      ${({ buttonType }) =>
        buttonType === ButtonTypes.accessSmall &&
        css`
          padding: 8px 20px;
          letter-spacing: 1px;
        `}
    `}

  ${({ buttonType }) =>
    buttonType === ButtonTypes.rectangle &&
    css`
      display: block;
      margin: 0 auto;
      padding: 6px 20px;
      border-color: black;

      @media ${media.small} {
        padding: 2px 10px;
      }

      :hover {
        background-color: ${({ theme: { color } }) => color.green};
        color: white;
      }
    `}
`;
