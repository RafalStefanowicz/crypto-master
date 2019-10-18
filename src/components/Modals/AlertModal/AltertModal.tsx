import React from "react";
import { connect } from "react-redux";

import { Modal } from "../Modal/Modal";
import { hideModal } from "../../../redux/actions/modalActions";
import { StyledAlertText } from "./alertModalStyles";
import { Button } from "../../Button/Button";
import { ButtonTypes } from "../../../styles/buttonStyles";
import { MODAL_TYPES } from "../../../types/MODAL_TYPES";

interface AlertModalProps {
  hideModal: typeof hideModal;
  alertText: string;
}

const _AlertModal = ({ hideModal, alertText }: AlertModalProps) => {
  return (
    <Modal modalType={MODAL_TYPES.ALERT}>
      <StyledAlertText>{alertText}</StyledAlertText>
      <Button buttonType={ButtonTypes.alert} handleClick={hideModal}>
        ACCEPT
      </Button>
    </Modal>
  );
};

export const AlertModal = connect(
  null,
  { hideModal }
)(_AlertModal);
