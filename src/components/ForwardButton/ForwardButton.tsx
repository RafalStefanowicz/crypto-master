import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { History } from "history";

import { ROUTES } from "../../types/ROUTES";
import { MODAL_TYPES } from "../../types/MODAL_TYPES";
import { showModal } from "../../redux/actions/modalActions";
import { IStore } from "../../redux/reducers";
import { IsLoggedInType } from "../../redux/reducers/isLoggedIn";
import { Button } from "../Button/Button";
import { ButtonTypes } from "../../styles/buttonStyles";

interface ForwardButtonProps {
  isLoggedIn: IsLoggedInType;
  showModal: typeof showModal;
  history: History;
}

const _ForwardButton = ({
  isLoggedIn,
  showModal,
  history
}: ForwardButtonProps) => {
  const handleClick = () => {
    isLoggedIn
      ? history.push(ROUTES.STOCK)
      : showModal({ modalType: MODAL_TYPES.JOIN, modalProps: {} });
  };

  const buttonText = isLoggedIn ? "Play" : "Join";

  return isLoggedIn !== null ? (
    <Button handleClick={handleClick} buttonType={ButtonTypes.access}>
      {buttonText}
    </Button>
  ) : null;
};

const mapStateToProps = (state: IStore): { isLoggedIn: IsLoggedInType } => ({
  isLoggedIn: state.isLoggedIn
});

export const ForwardButton = compose(
  connect(
    mapStateToProps,
    { showModal }
  ),
  withRouter
)(_ForwardButton) as React.ReactType;
