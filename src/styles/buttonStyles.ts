import styled, { css } from "styled-components";
import { ThemeI } from "./theme";
import { media } from "./media";

export enum ButtonTypes {
  access = "access",
  accessSmall = "accessSmall",
  rectangle = "rectangle",
  backButton = "backButton",
  provider = "provider",
  forgotPassword = "forgotPassword",
  alert = "alert"
}

interface StyledButtonProps {
  buttonType:
    | ButtonTypes.access
    | ButtonTypes.accessSmall
    | ButtonTypes.rectangle
    | ButtonTypes.backButton
    | ButtonTypes.provider
    | ButtonTypes.forgotPassword
    | ButtonTypes.alert;

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

    ${({ buttonType }) =>
      buttonType === ButtonTypes.backButton &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        background-color: transparent;
        font-size: 52px;

        :hover {
          color: ${({ theme: { color } }) => color.green};
        }

        @media ${media.small} {
          font-size: 30px;
        }
      `}

      ${({ buttonType }) =>
        buttonType === ButtonTypes.provider &&
        css`
          border: none;
          padding: 0;
          line-height: 0;

          svg {
            .classOne,
            .classTwo,
            .classTree,
            .classFour {
              transition: 370ms ease-in-out;
              fill: #000;
            }
          }

          &:hover {
            svg {
              .classOne {
                fill: #4285f4;
              }
              .classTwo {
                fill: #34a853;
              }
              .classTree {
                fill: #fbbc04;
              }
              .classFour {
                fill: #ea4335;
              }
            }
          }
        `}

        ${({ buttonType }) =>
          buttonType === ButtonTypes.forgotPassword &&
          css`
            border: none;
            display: block;
            color: ${({ theme: { color } }) => color.green};
            margin-left: auto;
            border-bottom: 1px solid transparent;
            font-size: 14px;

            :hover {
              border-bottom: 1px solid ${({ theme: { color } }) => color.green};
            }
          `}

          ${({ buttonType }) =>
            buttonType === ButtonTypes.alert &&
            css`
              display: block;
              margin: 10px auto;
              padding: 3px 12px;
              border: 1px solid black;
              border-radius: 5px;
              font-size: 20px;
              letter-spacing: 2px;

              :hover {
                background-color: ${({ theme: { color } }) => color.red};
                color: white;
                border-color: white;
              }
            `}
`;
