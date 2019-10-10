import React from "react";

import { StyledButtonAccess } from "../../styles/Buttons";

interface ForwardButtonProps {
  text: string;
  handleClick: () => void;
}

const _ForwardButton = ({ text, handleClick }: ForwardButtonProps) => {
  return <StyledButtonAccess onClick={handleClick}>{text}</StyledButtonAccess>;
};

export const ForwardButton = _ForwardButton;
