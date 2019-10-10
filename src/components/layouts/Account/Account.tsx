import React from "react";

import { LogOutBtn } from "../../LogOutBtn/LogOutBtn";
import {
  StyledUserName,
  StyledEmail,
  StyledProviderWrapper
} from "./accountStyles";

interface AccountProps {
  userName: string;
  email: string;
  renderProviderOrChangePass: () => JSX.Element;
}

export const Account = ({
  userName,
  email,
  renderProviderOrChangePass
}: AccountProps) => {
  return (
    <>
      <StyledUserName>{userName}</StyledUserName>
      <StyledEmail>{email}</StyledEmail>
      <StyledProviderWrapper>
        {renderProviderOrChangePass()}
      </StyledProviderWrapper>
      <LogOutBtn />
    </>
  );
};
