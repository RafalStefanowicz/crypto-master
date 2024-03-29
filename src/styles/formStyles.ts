import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { media } from "./media";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 250px;
  margin: 0 auto;

  @media ${media.small} {
    max-width: 170px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  margin: 1px 0;
  padding: 5px;
  font-size: 16px;
  border: 1px solid black;

  @media ${media.small} {
    font-size: 14px;
  }
`;

export const StyledMessage = styled(ErrorMessage)`
  font-size: 12px;

  @media ${media.small} {
    font-size: 10px;
  }

  color: ${({ theme: { color } }) => color.red};
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin: 4px auto;
  padding: 4px 26px;
  border: 1px solid black;

  :hover {
    background-color: ${({ theme: { color } }) => color.green};
    color: white;
  }

  :disabled {
    border-color: gray;
    color: gray;

    :hover {
      background-color: white;
      color: gray;
    }
  }
`;

export const StyledButtonInner = styled.span`
  position: relative;
`;

interface StyledIconWrapperProps {
  submitting: boolean;
}

export const StyledIconWrapper = styled.span<StyledIconWrapperProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -23px;
  display: ${({ submitting }) => (submitting ? "inline" : "none")};
`;
