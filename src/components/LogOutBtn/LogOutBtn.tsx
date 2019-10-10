import React from "react";

import { StyledButtonAccess } from "../../styles/Buttons";
import { withFirebase } from "../../firebase/withFirebase";
import { Firebase } from "../../firebase/Firebase";

interface LogOutBtnProps {
  firebase: Firebase;
}

const _LogOutBtn = ({ firebase }: LogOutBtnProps) => {
  const handleLogOut = () => {
    firebase.auth.signOut();
  };

  return (
    <StyledButtonAccess onClick={handleLogOut} small>
      Log out
    </StyledButtonAccess>
  );
};

export const LogOutBtn = withFirebase(_LogOutBtn);
