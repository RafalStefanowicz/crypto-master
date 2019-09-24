import React from "react";
import { connect } from "react-redux";

import { Modal } from "../Modal/Modal";
import { hideModal } from "../../../redux/actions/modalActions";

interface AlertModalProps {
  hideModal: typeof hideModal;
  alertText: string;
}

const _AlertModal = ({ hideModal, alertText }: AlertModalProps) => {
  return (
    <Modal>
      <>
        <h1>{alertText}</h1>
        <button onClick={hideModal}>OK</button>
      </>
    </Modal>
  );
};

export const AlertModal = connect(
  null,
  { hideModal }
)(_AlertModal);
