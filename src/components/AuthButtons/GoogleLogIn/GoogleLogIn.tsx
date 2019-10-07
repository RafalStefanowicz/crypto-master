import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { ProviderLogIn } from "../ProviderLogIn/ProviderLogIn";
import { UserNamesI } from "../../../redux/reducers/userNames";

interface GoogleLogInProps {
  firebase: FirebaseOperations;
}

const _GoogleLogIn = ({ firebase }: GoogleLogInProps) => {
  const doCreateUserWithGoogle = (userNames: UserNamesI) =>
    firebase.doCreateUserWithGoogle(userNames);

  const renderIcon = () => <FontAwesomeIcon icon={faGoogle} />;
  return (
    <ProviderLogIn
      doCreateUserWithProvider={doCreateUserWithGoogle}
      renderIcon={renderIcon}
    />
  );
};

export const GoogleLogIn = withFirebase(_GoogleLogIn);
