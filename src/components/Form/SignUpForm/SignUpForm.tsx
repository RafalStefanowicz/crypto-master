import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { JoinForm } from "../JoinForm/JoinForm";
import { withFirebase } from "../../../firebase/withFirebase";
import {
  FirebaseOperations,
  DoCreateUserI
} from "../../../firebase/FirebaseOperations";
import { hideModal } from "../../../redux/actions/modalActions";
import { signUpValidate } from "../../../utility/validate";
import { FIELDS_NAME } from "../../../types/FIELDS_NAMES";
import { IStore } from "../../../redux/reducers";
import { UserNamesI } from "../../../redux/reducers/userNames";

interface SignUpFormProps {
  firebase: FirebaseOperations;
  hideModal: typeof hideModal;
  userNames: UserNamesI;
}

const SignUpFields = [
  {
    type: "text",
    name: FIELDS_NAME.USER_NAME
  },
  {
    type: "email",
    name: FIELDS_NAME.EMAIL
  },
  {
    type: "password",
    name: FIELDS_NAME.PASSWORD
  }
];

const _SignUpForm = ({ firebase, hideModal, userNames }: SignUpFormProps) => {
  const handleSignUp = (values: DoCreateUserI) => {
    firebase
      .doCreateUser(values)
      .then(() => {
        hideModal();
      })
      .catch(error => {
        alert(error.message);
      });
  };
  const validate = signUpValidate(userNames);

  return (
    <div>
      <JoinForm
        fields={SignUpFields}
        validate={validate}
        handleSubmit={handleSignUp}
        buttonText="Sign up"
      />
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({ userNames: state.userNames });

export const SignUpForm = compose(
  connect(
    mapStateToProps,
    { hideModal }
  ),
  withFirebase
)(_SignUpForm) as React.ReactType;
