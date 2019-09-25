import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";

import { hideModal } from "../../../redux/actions/modalActions";

interface ModalProps {
  children: JSX.Element;
  hideModal: typeof hideModal;
}
const element = document.getElementById("root");

element && ReactModal.setAppElement(element);

const _Modal = ({ children, hideModal }: ModalProps) => {
  return (
    <div>
      <ReactModal
        isOpen={true}
        onRequestClose={() => {
          hideModal();
        }}
      >
        <button
          onClick={() => {
            hideModal();
          }}
        >
          X
        </button>
        {children}
      </ReactModal>
    </div>
  );
};

export const Modal = connect(
  null,
  { hideModal }
)(_Modal);
