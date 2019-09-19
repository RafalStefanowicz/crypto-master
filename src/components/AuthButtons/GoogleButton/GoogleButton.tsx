import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { AuthButton } from "../AuthButton/AuthButton";
import { Firebase } from "../../../firebase/Firebase";
import { withFirebase } from "../../../firebase/withFirebase";

interface GoogleButtonProps {
  firebase: Firebase;
}

const _GoogleButton = ({ firebase }: GoogleButtonProps) => {
  const handleLogIn = () => {
    firebase.doSignInWithGoogle();
  };
  return (
    <AuthButton handleLogIn={handleLogIn}>
      <FontAwesomeIcon icon={faGoogle} />
    </AuthButton>
  );
};

export const GoogleButton = withFirebase(_GoogleButton);
