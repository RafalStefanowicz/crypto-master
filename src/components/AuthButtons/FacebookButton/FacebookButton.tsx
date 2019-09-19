import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { AuthButton } from "../AuthButton/AuthButton";
import { Firebase } from "../../../firebase/Firebase";
import { withFirebase } from "../../../firebase/withFirebase";

interface FacebookButtonProps {
  firebase: Firebase;
}

const _FacebookButton = ({ firebase }: FacebookButtonProps) => {
  const handleLogIn = () => {
    firebase.doSignInWithFacebook();
  };
  return (
    <AuthButton handleLogIn={handleLogIn}>
      <FontAwesomeIcon icon={faFacebookF} />
    </AuthButton>
  );
};

export const FacebookButton = withFirebase(_FacebookButton);
