import React from "react";

import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { ProviderLogIn } from "../ProviderLogIn/ProviderLogIn";
import { UserNamesI } from "../../../redux/reducers/userNames";
import { StyledFacebookIcon } from "../../../styles/iconProvidersStyles";

interface FacebookLogInProps {
  firebase: FirebaseOperations;
}

const _FacebookLogIn = ({ firebase }: FacebookLogInProps) => {
  const doCreateUserWithFacebook = (userNames: UserNamesI) =>
    firebase.doCreateUserWithFacebook(userNames);

  const renderIcon = () => <StyledFacebookIcon />;
  return (
    <ProviderLogIn
      doCreateUserWithProvider={doCreateUserWithFacebook}
      renderIcon={renderIcon}
    />
  );
};

export const FacebookLogIn = withFirebase(_FacebookLogIn);
