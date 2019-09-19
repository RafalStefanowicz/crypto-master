interface ISignUpValues {
  userName: string;
  email: string;
  password: string;
}

interface ISignUpErrors {
  userName?: string;
  email?: string;
  password?: string;
}

export const signUpValidate = (values: ISignUpValues): ISignUpErrors => {
  let errors: ISignUpErrors = {};
  if (!values.userName) {
    errors.userName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.password)) {
    errors.password =
      "Invalid password: Minimum six characters, at least one letter and one number:";
  }
  return errors;
};

interface SignInValuesI {
  email: string;
  password: string;
}

interface SignInErrorsI {
  email?: string;
  password?: string;
}

export const signInValidate = (values: SignInValuesI): SignInErrorsI => {
  let errors: SignInErrorsI = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.password)) {
    errors.password =
      "Invalid password: Minimum six characters, at least one letter and one number:";
  }
  return errors;
};

interface ResetPasswordValuesI {
  email: string;
}

interface ResetPasswordErrorsI {
  email?: string;
}

export const resetPasswordValidate = (
  values: ResetPasswordValuesI
): ResetPasswordErrorsI => {
  let errors: SignInErrorsI = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  return errors;
};

export type ValidationType =
  | typeof signUpValidate
  | typeof signInValidate
  | typeof resetPasswordValidate;
