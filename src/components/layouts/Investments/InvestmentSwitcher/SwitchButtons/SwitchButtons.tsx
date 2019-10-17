import React from "react";
import {
  StyledButtonsWrapper,
  StyledSwitchButton,
  SwitchButtonTypes
} from "./switchButtonsStyle";

export enum SwitchActiveType {
  left = "left",
  right = "right"
}

interface SwitchButtonsProps {
  leftClick: () => void;
  rightClick: () => void;
  leftText: string;
  rightText: string;
  active?: SwitchActiveType;
  buttonType?: SwitchButtonTypes;
}

export const SwitchButtons = ({
  active,
  leftClick,
  rightClick,
  leftText,
  rightText,
  buttonType
}: SwitchButtonsProps) => {
  return (
    <StyledButtonsWrapper>
      <StyledSwitchButton
        onClick={leftClick}
        disabled={active === SwitchActiveType.left}
        buttonType={buttonType}
      >
        {leftText}
      </StyledSwitchButton>
      <StyledSwitchButton
        onClick={rightClick}
        disabled={active === SwitchActiveType.right}
        buttonType={buttonType}
      >
        {rightText}
      </StyledSwitchButton>
    </StyledButtonsWrapper>
  );
};
