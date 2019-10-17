import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
  StyledSubmitButton,
  StyledButtonInner,
  StyledLoadingIconWrapper
} from "../../../styles/formStyles";

interface SubmitButtonProps {
  disabled: boolean;
  text: string;
  submitting: boolean;
  handleSubmit?: () => void;
}

export const SubmitButton = ({
  disabled,
  text,
  submitting,
  handleSubmit
}: SubmitButtonProps) => {
  return (
    <StyledSubmitButton
      type="submit"
      disabled={disabled}
      onClick={handleSubmit}
    >
      <StyledButtonInner>
        <StyledLoadingIconWrapper submitting={submitting}>
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        </StyledLoadingIconWrapper>
        {text}
      </StyledButtonInner>
    </StyledSubmitButton>
  );
};
