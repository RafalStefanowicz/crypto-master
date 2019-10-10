import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

import { ThemeI } from "./theme";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 250px;
  margin: 0 auto;
`;

export const StyledField = styled(Field)`
  margin: 1px;
  padding: 4px;
  border: 1px solid black;
  font-size: 16px;
`;

interface StyledMessageProps {
  theme: ThemeI;
}
export const StyledMessage = styled(ErrorMessage)<StyledMessageProps>`
  font-size: 16px;
  color: ${({ theme: { color } }) => color.red};
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin: 4px auto;
  padding: 4px 22px;
  font-size: 18px;
  border: 1px solid black;

  :hover {
    background-color: ${({ theme: { color } }) => color.green};
    color: white;
  }

  :disabled {
    border-color: gray;
    color: gray;
    cursor: default;

    :hover {
      background-color: white;
      color: gray;
    }
  }
`;

export const StyledButtonInner = styled.span`
  position: relative;
`;

interface StyledLoadingIconWrapperProps {
  submitting: boolean;
}

export const StyledLoadingIconWrapper = styled.span<
  StyledLoadingIconWrapperProps
>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -20px;
  display: ${({ submitting }) => (submitting ? "inline" : "none")};
`;
