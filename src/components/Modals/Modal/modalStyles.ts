import ReactModal from "react-modal";
import styled from "styled-components";
import { MODAL_TYPES } from "../../../types/MODAL_TYPES";
import { media } from "../../../styles/media";

interface ReactModalProps {
  modalType?: MODAL_TYPES;
}

const _StyledReactModal = styled(ReactModal)<ReactModalProps>`
  max-width: 600px;
  background-color: white;
  border: 2px solid black;
  position: relative;
  padding: 20px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-color: ${({ modalType, theme }) =>
    modalType === MODAL_TYPES.ALERT && theme.color.red};

  :focus {
    outline: none;
  }

  @media ${media.small} {
    top: 50%;
  }
`;
// styled ReactsModal have bug in its type,
// and don't see set app method so i ve extended it
type StyledReactModalType = typeof _StyledReactModal & {
  setAppElement: (element: HTMLElement) => void;
};

export const StyledReactModal = _StyledReactModal as StyledReactModalType;

export const StyledExitButton = styled.button<ReactModalProps>`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 0;
  margin: 0;
  border: none;
  line-height: 32px;
  font-size: 32px;

  :hover {
    color: ${({ theme: { color } }) => color.green};

    color: ${({ modalType, theme: { color } }) =>
      modalType === MODAL_TYPES.ALERT && color.red};
  }
`;
