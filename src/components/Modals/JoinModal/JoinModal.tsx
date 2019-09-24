import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

import { FacebookButton } from "../../AuthButtons/FacebookButton/FacebookButton";
import { GoogleButton } from "../../AuthButtons/GoogleButton/GoogleButton";
import { SignUpForm } from "../../Form/SignUpForm/SignUpForm";
import { SignInForm } from "../../Form/SignInForm/SignInForm";
import { ResetPasswordForm } from "../../Form/ResetPasswordForm/ResetPasswordForm";
import { JOIN_FORM_TYPES } from "../../../types/JOIN_FORM_TYPES";
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

  return (
    <Modal>
      <>
        <button
          onClick={() => {
            setForm(JOIN_FORM_TYPES.LOG_IN);
          }}
        >
          LOG IN
        </button>
        <button
          onClick={() => {
            setForm(JOIN_FORM_TYPES.SIGN_UP);
          }}
        >
          SIGN UP
        </button>
        <FacebookButton />
        <GoogleButton />
        {renderForm()}
      </>
    </Modal>
  );
};
