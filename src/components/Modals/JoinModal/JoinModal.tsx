import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

import { FacebookLogIn } from "../../AuthButtons/FacebookLogIn/FacebookLogIn";
import { GoogleLogIn } from "../../AuthButtons/GoogleLogIn/GoogleLogIn";
import { SignUpForm } from "../../Form/SignUpForm/SignUpForm";
import { SignInForm } from "../../Form/SignInForm/SignInForm";
import { ResetPasswordForm } from "../../Form/ResetPasswordForm/ResetPasswordForm";
import { JOIN_FORM_TYPES } from "../../../types/JOIN_FORM_TYPES";
import {
  StyledProviderWrapper,
  StyledJoinModalWrapper,
  StyledSwitchButtonsWrapper
} from "./joinModalStyles";
import {
  SwitchButtons,
  SwitchActiveType
} from "../../layouts/Investments/InvestmentSwitcher/SwitchButtons/SwitchButtons";
import { SwitchButtonTypes } from "../../layouts/Investments/InvestmentSwitcher/SwitchButtons/switchButtonsStyle";
import { Button } from "../../Button/Button";
import { ButtonTypes } from "../../../styles/buttonStyles";

export const JoinModal = () => {
  const [form, setForm] = useState<JOIN_FORM_TYPES>(JOIN_FORM_TYPES.LOG_IN);

  const setResetPassword = () => {
    setForm(JOIN_FORM_TYPES.REMIND_PASSWORD);
  };

  const handleLogIn = () => {
    setForm(JOIN_FORM_TYPES.LOG_IN);
  };

  const handleSignUp = () => {
    setForm(JOIN_FORM_TYPES.SIGN_UP);
  };

  const renderForm = () => {
    switch (form) {
      case JOIN_FORM_TYPES.LOG_IN:
        return <SignInForm setResetPassword={setResetPassword} />;

      case JOIN_FORM_TYPES.SIGN_UP:
        return <SignUpForm />;

      case JOIN_FORM_TYPES.REMIND_PASSWORD:
        return <ResetPasswordForm />;
      default:
        return null;
    }
  };

  const getSwitchActive = () => {
    if (form === JOIN_FORM_TYPES.LOG_IN) return SwitchActiveType.left;
    if (form === JOIN_FORM_TYPES.SIGN_UP) return SwitchActiveType.right;
  };
  return (
    <Modal>
      <StyledJoinModalWrapper>
        <StyledProviderWrapper>
          <FacebookLogIn />
          <GoogleLogIn />
        </StyledProviderWrapper>
        <StyledSwitchButtonsWrapper>
          <SwitchButtons
            active={getSwitchActive()}
            leftClick={handleLogIn}
            rightClick={handleSignUp}
            leftText="LOG IN"
            rightText="SIGN UP"
            buttonType={SwitchButtonTypes.small}
          />
        </StyledSwitchButtonsWrapper>
        {renderForm()}
        {form !== JOIN_FORM_TYPES.REMIND_PASSWORD && (
          <Button
            handleClick={setResetPassword}
            buttonType={ButtonTypes.forgotPassword}
          >
            Forgot password
          </Button>
        )}
      </StyledJoinModalWrapper>
    </Modal>
  );
};
