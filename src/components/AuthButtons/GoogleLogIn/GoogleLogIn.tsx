import React from "react";

import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { ProviderLogIn } from "../ProviderLogIn/ProviderLogIn";
import { UserNamesI } from "../../../redux/reducers/userNames";
import { StyledGoogleIcon } from "../../../styles/iconProvidersStyles";

interface GoogleLogInProps {
  firebase: FirebaseOperations;
}

const _GoogleLogIn = ({ firebase }: GoogleLogInProps) => {
  const doCreateUserWithGoogle = (userNames: UserNamesI) =>
    firebase.doCreateUserWithGoogle(userNames);

  const renderIcon = () => <StyledGoogleIcon />;
  return (
    <ProviderLogIn
      doCreateUserWithProvider={doCreateUserWithGoogle}
      renderIcon={renderIcon}
    />
  );
};

export const GoogleLogIn = withFirebase(_GoogleLogIn);
