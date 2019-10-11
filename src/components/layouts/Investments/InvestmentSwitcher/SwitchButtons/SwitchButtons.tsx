import React from "react";
import { StyledButtonsWrapper, StyledSwitchButton } from "./switchButtonsStyle";

interface SwitchButtonsProps {
  leftActive: boolean;
  changeActive: (leftActive: boolean) => () => void;
  leftText: string;
  rightText: string;
}
export const SwitchButtons = ({
  leftActive,
  changeActive,
  leftText,
  rightText
}: SwitchButtonsProps) => {
  return (
    <StyledButtonsWrapper>
      <StyledSwitchButton onClick={changeActive(true)} disabled={leftActive}>
        {leftText}
      </StyledSwitchButton>
      <StyledSwitchButton onClick={changeActive(false)} disabled={!leftActive}>
        {rightText}
      </StyledSwitchButton>
    </StyledButtonsWrapper>
  );
};
