import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../Button/Button";
import { ButtonTypes } from "../../styles/buttonStyles";
import { BackButtonWrapper } from "./backButtonStyles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface BackButtonProps {
  goBack: () => void;
}

export const BackButton = ({ goBack }: BackButtonProps) => (
  <BackButtonWrapper>
    <Button handleClick={goBack} buttonType={ButtonTypes.backButton}>
      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
    </Button>
  </BackButtonWrapper>
);
