import React from "react";

import { ButtonTypes, StyledButton } from "../../styles/button";

interface ButtonProps {
  buttonType: ButtonTypes;
  children: JSX.Element | string;
  handleClick?: () => void;
}

export const Button = ({ children, handleClick, buttonType }: ButtonProps) => (
  <StyledButton onClick={handleClick} buttonType={buttonType}>
    {children}
  </StyledButton>
);
