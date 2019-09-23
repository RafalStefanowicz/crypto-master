import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { AuthButton } from "../AuthButton/AuthButton";
import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { IStore } from "../../../redux/reducers";
import { UserNamesI } from "../../../redux/reducers/userNames";

interface GoogleButtonProps {
  firebase: FirebaseOperations;
  userNames: UserNamesI;
}

const _GoogleButton = ({ firebase, userNames }: GoogleButtonProps) => {
  const handleLogIn = () => {
    firebase.doCreateUserWithGoogle(userNames);
  };

  return (
    <AuthButton handleLogIn={handleLogIn}>
      <FontAwesomeIcon icon={faGoogle} />
    </AuthButton>
  );
};

const mapStateToProps = (state: IStore) => ({
  userNames: state.userNames
});

export const GoogleButton = compose(
  withFirebase,
  connect(mapStateToProps)
)(_GoogleButton) as React.ReactType;
