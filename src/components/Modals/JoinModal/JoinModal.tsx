import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

import { FacebookLogIn } from "../../AuthButtons/FacebookLogIn/FacebookLogIn";
import { GoogleLogIn } from "../../AuthButtons/GoogleLogIn/GoogleLogIn";
import { SignUpForm } from "../../Form/SignUpForm/SignUpForm";
import { SignInForm } from "../../Form/SignInForm/SignInForm";
import { ResetPasswordForm } from "../../Form/ResetPasswordForm/ResetPasswordForm";
import { JOIN_FORM_TYPES } from "../../../types/JOIN_FORM_TYPES";
import { JoinSwitchButtons } from "./JoinSwitchButtons/JoinSwitchButtons";
import ForgotPasswordButton from "./ForgotPasswordButton/ForgotPasswordButton";
export const JoinModal = () => {
  const [form, setForm] = useState<JOIN_FORM_TYPES>(JOIN_FORM_TYPES.LOG_IN);

  const setResetPassword = () => {
    setForm(JOIN_FORM_TYPES.REMIND_PASSWORD);
  };

  const renderForm = () => {
    switch (form) {
      case JOIN_FORM_TYPES.LOG_IN:
        return <SignInForm setResetPassword={setResetPassword} />;

      case JOIN_FORM_TYPES.SIGN_UP:
        return <SignUpForm />;

      case JOIN_FORM_TYPES.REMIND_PASSWORD:
        return <ResetPasswordForm />;
      default:
        return null;
    }
  };

  const handleLogIn = () => {
    setForm(JOIN_FORM_TYPES.LOG_IN);
  };
  const handleSignUp = () => {
    setForm(JOIN_FORM_TYPES.SIGN_UP);
  };

  return (
    <Modal>
      <>
        <JoinSwitchButtons
          handleLogIn={handleLogIn}
          handleSignUp={handleSignUp}
        />
        <FacebookLogIn />
        <GoogleLogIn />
        {renderForm()}
        {form !== JOIN_FORM_TYPES.REMIND_PASSWORD && (
          <ForgotPasswordButton setResetPassword={setResetPassword} />
        )}
      </>
    </Modal>
  );
};
