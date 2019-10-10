import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Formik } from "formik";

import { changePasswordValidate } from "../../../utility/validate";
import { MODAL_TYPES } from "../../../types/MODAL_TYPES";
import { withFirebase } from "../../../firebase/withFirebase";
import { Firebase } from "../../../firebase/Firebase";
import { showModal } from "../../../redux/actions/modalActions";
import {
  StyledForm,
  StyledField,
  StyledMessage
} from "../../../styles/formStyles";
import { SubmitButton } from "../SubmitButton/SubmitButton";

const FORM_INITIAL_VALUES = {
  currentPassword: "",
  newPassword: ""
};

interface ChangePasswordFormProps {
  firebase: Firebase;
  showModal: typeof showModal;
  toggleIsFormShown: () => void;
}

const _ChangePasswordForm = ({
  firebase,
  showModal,
  toggleIsFormShown
}: ChangePasswordFormProps) => {
  return (
    <Formik
      initialValues={{ ...FORM_INITIAL_VALUES }}
      validate={changePasswordValidate}
      onSubmit={async ({ currentPassword, newPassword }, { setSubmitting }) => {
        try {
          await firebase.doChangePassword(currentPassword, newPassword);
          setSubmitting(false);
          toggleIsFormShown();
        } catch (error) {
          setSubmitting(false);
          showModal({
            modalType: MODAL_TYPES.ALERT,
            modalProps: { alertText: "Please provide actual password" }
          });
        }
      }}
    >
      {({ isSubmitting, isValid }) => {
        return (
          <StyledForm>
            <StyledField
              type="password"
              name="currentPassword"
              placeholder="current password"
            />
            <StyledMessage name="currentPassword" component="div" />
            <StyledField
              type="password"
              name="newPassword"
              placeholder="new password"
            />
            <StyledMessage name="newPassword" component="div" />
            <SubmitButton
              disabled={!isValid || isSubmitting}
              submitting={isSubmitting}
              text="Change"
            ></SubmitButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export const ChangePasswordForm = compose(
  withFirebase,
  connect(
    null,
    { showModal }
  )
)(_ChangePasswordForm) as React.ReactType;
