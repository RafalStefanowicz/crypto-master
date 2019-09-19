import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { JoinForm } from "../JoinForm/JoinForm";
import { withFirebase } from "../../../firebase/withFirebase";
import { Firebase, DoSignUpI } from "../../../firebase/Firebase";
import { hideModal } from "../../../redux/actions/modalActions";
import { signUpValidate } from "../../../utility/validate";
import { FIELDS_NAME } from "../../../types/FIELDS_NAMES";

interface SignUpFormProps {
  firebase: Firebase;
  hideModal: typeof hideModal;
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

const _SignUpForm = ({ firebase, hideModal }: SignUpFormProps) => {
  const handleSignUp = (values: DoSignUpI) => {
    firebase
      .doSignUp(values)
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
        fields={SignUpFields}
        validate={signUpValidate}
        handleSubmit={handleSignUp}
        buttonText="Sign up"
      />
    </div>
  );
};

export const SignUpForm = compose(
  connect(
    null,
    { hideModal }
  ),
  withFirebase
)(_SignUpForm) as React.ReactType;

// import React from "react";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// import { withFirebase } from "../../../firebase/withFirebase";
// import { Firebase } from "../../../firebase/Firebase";
// import { hideModal } from "../../../redux/actions/modalActions";
// import { signUpValidate } from "../../../utility/validate";

// interface SignUpFormProps {
//   firebase: Firebase;
//   hideModal: typeof hideModal;
// }

// const INITIAL_FIELDS = {
//   userName: "",
//   email: "",
//   password: ""
// };

// const _SignUpForm = ({ firebase, hideModal }: SignUpFormProps) => {
//   return (
//     <div>
//       <Formik
//         initialValues={INITIAL_FIELDS}
//         validate={signUpValidate}
//         onSubmit={async (values, { setSubmitting }) => {
//           await firebase.doSignUp(values);
//           setSubmitting(false);
//           hideModal();
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="text" name="userName" />
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//             <button type="submit" disabled={isSubmitting}>
//               Sign Up
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export const SignUpForm = compose(
//   connect(
//     null,
//     { hideModal }
//   ),
//   withFirebase
// )(_SignUpForm) as React.ReactType;
