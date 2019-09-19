import React from "react";

interface AuthButtonProps {
  children: JSX.Element;
  handleLogIn: () => void;
}

export const AuthButton = ({ children, handleLogIn }: AuthButtonProps) => {
  return <button onClick={handleLogIn}>{children}</button>;
};
