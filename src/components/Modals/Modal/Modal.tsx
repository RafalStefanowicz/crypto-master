import React from "react";
import { connect } from "react-redux";

import { hideModal } from "../../../redux/actions/modalActions";
import { StyledReactModal, StyledExitButton } from "./modalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  children: JSX.Element;
  hideModal: typeof hideModal;
}
const element = document.getElementById("root");

element && StyledReactModal.setAppElement(element);

const _Modal = ({ children, hideModal }: ModalProps) => {
  return (
    <StyledReactModal isOpen={true} onRequestClose={hideModal}>
      <StyledExitButton onClick={hideModal}>
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
