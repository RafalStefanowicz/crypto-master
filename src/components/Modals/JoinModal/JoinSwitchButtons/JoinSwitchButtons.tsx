import React from "react";

interface JoinSwitchButtonsProps {
  handleLogIn: () => void;
  handleSignUp: () => void;
}

export const JoinSwitchButtons = ({
  handleLogIn,
  handleSignUp
}: JoinSwitchButtonsProps) => {
  return (
    <div>
      <button onClick={handleLogIn}>LOG IN</button>
      <button onClick={handleSignUp}>SIGN UP</button>
    </div>
  );
};
