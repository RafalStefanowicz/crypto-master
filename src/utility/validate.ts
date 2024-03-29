import { getUniqueUserName } from "./getUniqueUserName";
import { UserNamesI } from "../redux/reducers/userNames";
import { isProperLength } from "./isProperLength";
import { testPassword } from "./testPassword";

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

interface ChangePasswordValuesI {
  currentPassword: string;
  newPassword: string;
}

interface ChangePasswordErrors {
  currentPassword?: string;
  newPassword?: string;
}

export type ValidationType =
  | SignUpValidateType
  | typeof signInValidate
  | typeof resetPasswordValidate;

export type SignUpValidateType = (values: ISignUpValues) => ISignUpErrors;

export const signUpValidate = (userNames: UserNamesI): SignUpValidateType => (
  values: ISignUpValues
): ISignUpErrors => {
  let errors: ISignUpErrors = {};
  const userName = values.userName;
  const uniqueUserName = getUniqueUserName(userName, userNames);
  const isProperNameLength = isProperLength(userName);

  if (!userName) {
    errors.userName = "Required";
  } else if (userName !== uniqueUserName) {
    errors.userName = `The user name is already in use. We suggest ${uniqueUserName}`;
  } else if (!isProperNameLength) {
    errors.userName = `The user name is too long`;
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!testPassword(values.password)) {
    errors.password =
      "Minimum six characters, at least one letter and one number";
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
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!testPassword(values.password)) {
    errors.password =
      "Minimum six characters, at least one letter and one number";
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
  }
  return errors;
};

export const changePasswordValidate = (
  values: ChangePasswordValuesI
): ChangePasswordErrors => {
  let errors: ChangePasswordErrors = {};
  if (!values.currentPassword) {
    errors.currentPassword = "Required";
  }
  if (!values.newPassword) {
    errors.newPassword = "Required";
  } else if (!testPassword(values.newPassword)) {
    errors.newPassword =
      "Minimum six characters, at least one letter and one number";
  }
  return errors;
};
