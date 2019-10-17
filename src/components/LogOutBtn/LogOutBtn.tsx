import React from "react";

import { withFirebase } from "../../firebase/withFirebase";
import { Firebase } from "../../firebase/Firebase";
import { Button } from "../Button/Button";
import { ButtonTypes } from "../../styles/buttonStyles";

interface LogOutBtnProps {
  firebase: Firebase;
}

const _LogOutBtn = ({ firebase }: LogOutBtnProps) => {
  const handleLogOut = () => {
    firebase.auth.signOut();
  };

  return (
    <Button handleClick={handleLogOut} buttonType={ButtonTypes.accessSmall}>
      Log out
    </Button>
  );
};

export const LogOutBtn = withFirebase(_LogOutBtn);
