import React from "react";
import { connect } from "react-redux";

import { JoinModal } from "../JoinModal/JoinModal";
import { TransactionModal } from "../TransactionModal/TransactionModal";
import { AlertModal } from "../AlertModal/AltertModal";
import { MODAL_TYPES } from "../../../types/MODAL_TYPES";
import { IStore } from "../../../redux/reducers";
import { IModal } from "../../../redux/reducers/modal";
import { IsLoggedInType } from "../../../redux/reducers/isLoggedIn";

interface ModalRootProps {
  modal: IModal;
  isLoggedIn: IsLoggedInType;
}

const _ModalRoot = ({ modal, isLoggedIn }: ModalRootProps) => {
  switch (modal.modalType) {
    case MODAL_TYPES.JOIN:
      if (isLoggedIn) return null;
      return <JoinModal />;
    case MODAL_TYPES.TRANSACTION:
      return <TransactionModal {...modal.modalProps} />;
    case MODAL_TYPES.ALERT:
      return <AlertModal {...modal.modalProps} />;
    default:
      return null;
  }
};

const mapStateToProps = (state: IStore): ModalRootProps => ({
  modal: state.modal,
  isLoggedIn: state.isLoggedIn
});

export const ModalRoot = connect(mapStateToProps)(_ModalRoot);
