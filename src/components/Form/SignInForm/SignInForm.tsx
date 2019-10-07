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
  setResetPassword: () => void;
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

const _SignInForm = ({
  firebase,
  hideModal,
  setResetPassword
}: SignInFormProps) => {
  const handleSignIn = (values: DoSignInI) => {
    firebase
      .doSignIn(values)
      .then(() => {
        hideModal();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <JoinForm
        fields={SignInFields}
        validate={signInValidate}
        handleSubmit={handleSignIn}
        buttonText="Log in"
      />
      <button
        onClick={() => {
          setResetPassword();
        }}
      >
        Forgot Password
      </button>
    </div>
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
