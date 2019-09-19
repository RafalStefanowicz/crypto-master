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

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// import { withFirebase } from "../../../firebase/withFirebase";
// import { Firebase } from "../../../firebase/Firebase";

// interface SignInFormProps {
//   firebase: Firebase;
// }

// interface IErrors {
//   email?: string;
//   password?: string;
// }

// const _SignInForm = ({ firebase }: SignInFormProps) => {
//   return (
//     <div>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validate={values => {
//           let errors: IErrors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Invalid email address";
//           }
//           if (!values.password) {
//             errors.password = "Required";
//           }
//           return errors;
//         }}
//         onSubmit={async (values, { setSubmitting }) => {
//           await firebase.doSignIn(values);
//           setSubmitting(false);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//             <button type="submit" disabled={isSubmitting}>
//               SignIn
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export const SignInForm = withFirebase(_SignInForm);
