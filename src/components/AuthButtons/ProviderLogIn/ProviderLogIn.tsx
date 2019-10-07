import React from "react";
import { connect } from "react-redux";

import { AuthButton } from "../AuthButton/AuthButton";
import { IStore } from "../../../redux/reducers";
import { UserNamesI } from "../../../redux/reducers/userNames";
import { hideModal } from "../../../redux/actions/modalActions";

interface ProviderLogInProps {
  userNames: UserNamesI;
  hideModal: typeof hideModal;
  renderIcon: () => JSX.Element;
  doCreateUserWithProvider: (
    userNames: UserNamesI
  ) => Promise<firebase.User | null>;
}

const _ProviderLogIn = ({
  userNames,
  hideModal,
  doCreateUserWithProvider,
  renderIcon
}: ProviderLogInProps) => {
  const handleLogIn = () => {
    doCreateUserWithProvider(userNames)
      .then(() => {
        hideModal();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return <AuthButton handleLogIn={handleLogIn}>{renderIcon()}</AuthButton>;
};

const mapStateToProps = (state: IStore) => ({
  userNames: state.userNames
});

export const ProviderLogIn = connect(
  mapStateToProps,
  { hideModal }
)(_ProviderLogIn);
