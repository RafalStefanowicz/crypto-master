import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { History } from "history";

import { ForwardButton } from "./ForwardButton";
import { ROUTES } from "../../types/ROUTES";
import { MODAL_TYPES } from "../../types/MODAL_TYPES";
import { showModal } from "../../redux/actions/modalActions";
import { IStore } from "../../redux/reducers";
import { IsLoggedInType } from "../../redux/reducers/isLoggedIn";

interface ForwardButtonLogicProps {
  isLoggedIn: IsLoggedInType;
  showModal: typeof showModal;
  history: History;
}

const _ForwardButtonLogic = ({
  isLoggedIn,
  showModal,
  history
}: ForwardButtonLogicProps) => {
  const handleClick = () => {
    isLoggedIn
      ? history.push(ROUTES.STOCK)
      : showModal({ modalType: MODAL_TYPES.JOIN, modalProps: {} });
  };

  const buttonText = isLoggedIn ? "Play" : "Join";

  return isLoggedIn !== null ? (
    <ForwardButton handleClick={handleClick} text={buttonText}></ForwardButton>
  ) : null;
};

const mapStateToProps = (state: IStore): { isLoggedIn: IsLoggedInType } => ({
  isLoggedIn: state.isLoggedIn
});

export const ForwardButtonLogic = compose(
  connect(
    mapStateToProps,
    { showModal }
  ),
  withRouter
)(_ForwardButtonLogic) as React.ReactType;
