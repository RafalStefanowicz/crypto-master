import React from "react";
import { StyledButtonsWrapper, StyledSwitchButton } from "./switchButtonsStyle";

export enum SwitchActiveType {
  left = "left",
  right = "right"
}

interface SwitchButtonsProps {
  active?: SwitchActiveType;
  leftClick: any;
  rightClick: any;
  leftText: string;
  rightText: string;
}
export const SwitchButtons = ({
  active,
  leftClick,
  rightClick,
  leftText,
  rightText
}: SwitchButtonsProps) => {
  return (
    <StyledButtonsWrapper>
      <StyledSwitchButton
        onClick={leftClick}
        disabled={active === SwitchActiveType.left}
      >
        {leftText}
      </StyledSwitchButton>
      <StyledSwitchButton
        onClick={rightClick}
        disabled={active === SwitchActiveType.right}
      >
        {rightText}
      </StyledSwitchButton>
    </StyledButtonsWrapper>
  );
};
