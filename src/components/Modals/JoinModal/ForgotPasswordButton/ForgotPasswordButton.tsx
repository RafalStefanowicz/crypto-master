import React from "react";

interface ForgotPasswordButtonProps {
  setResetPassword: () => void;
}

export default function ForgotPasswordButton({
  setResetPassword
}: ForgotPasswordButtonProps) {
  return <button onClick={setResetPassword}>Forgot Password</button>;
}
