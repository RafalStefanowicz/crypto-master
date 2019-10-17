import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { JoinForm } from "../JoinForm/JoinForm";
import { withFirebase } from "../../../firebase/withFirebase";
import { Firebase } from "../../../firebase/Firebase";
import { hideModal } from "../../../redux/actions/modalActions";
import { resetPasswordValidate } from "../../../utility/validate";
import { FIELDS_NAME } from "../../../types/FIELDS_NAMES";
import { StyledInfo } from "./renderPasswordFormStyles";

interface ResetPasswordForm {
  firebase: Firebase;
  hideModal: typeof hideModal;
}

const ResetPasswordFields = [
  {
    type: "email",
    name: FIELDS_NAME.EMAIL
  }
];

const _ResetPasswordForm = ({ firebase, hideModal }: ResetPasswordForm) => {
  const handlePasswordReset = ({ email }: { email: "string" }) =>
    firebase
      .doPasswordReset(email)
      .then(() => {
        hideModal();
        return "email send";
      })
      .catch(error => {
        return error.message;
      });

  return (
    <>
      <StyledInfo>Reset Password</StyledInfo>
      <JoinForm
        fields={ResetPasswordFields}
        validate={resetPasswordValidate}
        handleSubmit={handlePasswordReset}
        buttonText="Send"
      />
    </>
  );
};

export const ResetPasswordForm = compose(
  connect(
    null,
    { hideModal }
  ),
  withFirebase
)(_ResetPasswordForm) as React.ReactType;
