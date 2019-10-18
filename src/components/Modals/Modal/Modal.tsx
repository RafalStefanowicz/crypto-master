import React from "react";
import { connect } from "react-redux";

import { hideModal } from "../../../redux/actions/modalActions";
import { StyledReactModal, StyledExitButton } from "./modalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { MODAL_TYPES } from "../../../types/MODAL_TYPES";

interface ModalProps {
  children: JSX.Element[] | JSX.Element;
  hideModal: typeof hideModal;
  modalType?: MODAL_TYPES;
}
const element = document.getElementById("root");

element && StyledReactModal.setAppElement(element);

const _Modal = ({ children, hideModal, modalType }: ModalProps) => {
  return (
    <StyledReactModal
      isOpen={true}
      onRequestClose={hideModal}
      modalType={modalType}
    >
      <StyledExitButton onClick={hideModal} modalType={modalType}>
        <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
      </StyledExitButton>
      {children}
    </StyledReactModal>
  );
};

export const Modal = connect(
  null,
  { hideModal }
)(_Modal);
