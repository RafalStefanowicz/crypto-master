import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { AuthButton } from "../AuthButton/AuthButton";
import { FirebaseOperations } from "../../../firebase/FirebaseOperations";
import { withFirebase } from "../../../firebase/withFirebase";
import { IStore } from "../../../redux/reducers";
import { UserNamesI } from "../../../redux/reducers/userNames";
import { hideModal } from "../../../redux/actions/modalActions";

interface FacebookButtonProps {
  firebase: FirebaseOperations;
  userNames: UserNamesI;
  hideModal: typeof hideModal;
}

const _FacebookButton = ({
  firebase,
  userNames,
  hideModal
}: FacebookButtonProps) => {
  const handleLogIn = () => {
    firebase
      .doCreateUserWithFacebook(userNames)
      .then(() => {
        hideModal();
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <AuthButton handleLogIn={handleLogIn}>
      <FontAwesomeIcon icon={faFacebookF} />
    </AuthButton>
  );
};

const mapStateToProps = (state: IStore) => ({
  userNames: state.userNames
});

export const FacebookButton = compose(
  withFirebase,
  connect(
    mapStateToProps,
    { hideModal }
  )
)(_FacebookButton) as React.ReactType;
