import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { changePasswordValidate } from "../../../utility/validate";
import { MODAL_TYPES } from "../../../types/MODAL_TYPES";
import { withFirebase } from "../../../firebase/withFirebase";
import { Firebase } from "../../../firebase/Firebase";
import { showModal } from "../../../redux/actions/modalActions";

const FORM_INITIAL_VALUES = {
  currentPassword: "",
  newPassword: ""
};

interface ChangePasswordFormProps {
  firebase: Firebase;
  showModal: typeof showModal;
}

const _ChangePasswordForm = ({
  firebase,
  showModal
}: ChangePasswordFormProps) => {
  return (
    <Formik
      initialValues={{ ...FORM_INITIAL_VALUES }}
      validate={changePasswordValidate}
      onSubmit={async ({ currentPassword, newPassword }, { setSubmitting }) => {
        try {
          await firebase.doChangePassword(currentPassword, newPassword);
          setSubmitting(false);
        } catch (error) {
          showModal({
            modalType: MODAL_TYPES.ALERT,
            modalProps: { alertText: "Please provide actual password" }
          });
        }
      }}
    >
      <Form>
        <Field type="password" name="currentPassword" />
        <ErrorMessage name="currentPassword" component="div" />
        <Field type="password" name="newPassword" />
        <ErrorMessage name="newPassword" component="div" />
        <button type="submit">Change</button>
      </Form>
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
