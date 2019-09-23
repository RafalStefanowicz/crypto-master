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
import { fetchCryptosAction } from "../../redux/actions/fetchCryptosAction";
import { CryptosI } from "../../redux/reducers/cryptos";

interface ForwardButtonProps {
  isLoggedIn: IsLoggedInType;
  showModal: typeof showModal;
  history: History;
  fetchCryptosAction: typeof fetchCryptosAction;
  cryptos: CryptosI;
}

const _ForwardButton = ({
  isLoggedIn,
  showModal,
  history,
  fetchCryptosAction,
  cryptos
}: ForwardButtonProps) => {
  const handleClick = () => {
    fetchCryptosAction();
    if (cryptos) {
      console.log(cryptos.BTC);
    }
    isLoggedIn
      ? history.push(ROUTES.STOCK)
      : showModal({ modalType: MODAL_TYPES.JOIN, modalProps: {} });
  };

  const buttonText = isLoggedIn ? "Play" : "Join";
  return <button onClick={handleClick}>{buttonText}</button>;
};

const mapStateToProps = (
  state: IStore
): { isLoggedIn: IsLoggedInType; cryptos: CryptosI } => ({
  isLoggedIn: state.isLoggedIn,
  cryptos: state.cryptos
});

export const ForwardButton = compose(
  connect(
    mapStateToProps,
    { showModal, fetchCryptosAction }
  ),
  withRouter
)(_ForwardButton) as React.ReactType;
