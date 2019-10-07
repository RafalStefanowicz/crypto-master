import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { ProviderLogIn } from "../ProviderLogIn/ProviderLogIn";
import { UserNamesI } from "../../../redux/reducers/userNames";

interface FacebookLogInProps {
  firebase: FirebaseOperations;
}

const _FacebookLogIn = ({ firebase }: FacebookLogInProps) => {
  const doCreateUserWithFacebook = (userNames: UserNamesI) =>
    firebase.doCreateUserWithFacebook(userNames);

  const renderIcon = () => <FontAwesomeIcon icon={faFacebookF} />;
  return (
    <ProviderLogIn
      doCreateUserWithProvider={doCreateUserWithFacebook}
      renderIcon={renderIcon}
    />
  );
};

export const FacebookLogIn = withFirebase(_FacebookLogIn);
