import React from "react";

import { withFirebase } from "../../firebase/withFirebase";
import { Firebase } from "../../firebase/Firebase";

interface LogOutBtnProps {
  firebase: Firebase;
}

const _LogOutBtn = ({ firebase }: LogOutBtnProps) => {
  const handleLogOut = () => {
    firebase.auth.signOut();
  };
  return <button onClick={handleLogOut}>LogOut</button>;
};

export const LogOutBtn = withFirebase(_LogOutBtn);
