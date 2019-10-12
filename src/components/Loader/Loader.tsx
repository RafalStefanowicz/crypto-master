import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledInfo, StyledText } from "../../styles/infoStyles";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loader = () => {
  return (
    <StyledInfo>
      <FontAwesomeIcon icon={faSpinner} className="fa-spin"></FontAwesomeIcon>
      <StyledText>Loading..</StyledText>
    </StyledInfo>
  );
};
