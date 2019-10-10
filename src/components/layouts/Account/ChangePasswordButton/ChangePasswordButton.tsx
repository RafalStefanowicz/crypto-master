import React from "react";

import { RectangleButton } from "../../../../styles/Buttons";

interface ChangePasswordButtonProps {
  handleClick: () => void;
}
export const ChangePasswordButton = ({
  handleClick
}: ChangePasswordButtonProps) => {
  return (
    <RectangleButton
      onClick={() => {
        handleClick();
      }}
    >
      Change password
    </RectangleButton>
  );
};
