import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { JoinForm } from "../JoinForm/JoinForm";
import { withFirebase } from "../../../firebase/withFirebase";
import { Firebase, DoSignInI } from "../../../firebase/Firebase";
import { hideModal } from "../../../redux/actions/modalActions";
import { signInValidate } from "../../../utility/validate";
import { FIELDS_NAME } from "../../../types/FIELDS_NAMES";

interface SignInFormProps {
  firebase: Firebase;
  hideModal: typeof hideModal;
}

const SignInFields = [
  {
    type: "email",
    name: FIELDS_NAME.EMAIL
  },
  {
    type: "password",
    name: FIELDS_NAME.PASSWORD
  }
];

const _SignInForm = ({ firebase, hideModal }: SignInFormProps) => {
  const handleSignIn = (values: DoSignInI) =>
    firebase
      .doSignIn(values)
      .then(() => {
        hideModal();
      })
      .catch(error => {
        return error.message;
      });

  return (
    <JoinForm
      fields={SignInFields}
      validate={signInValidate}
      handleSubmit={handleSignIn}
      buttonText="Log in"
    />
  );
};

export const SignInForm = compose(
  connect(
    null,
    { hideModal }
  ),
  withFirebase
)(_SignInForm) as React.ReactType<{
  setResetPassword: () => void;
}>;
