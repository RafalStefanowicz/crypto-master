import ReactModal from "react-modal";
import styled from "styled-components";

const _StyledReactModal = styled(ReactModal)`
  max-width: 600px;
  background-color: white;
  border: 2px solid black;
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  :focus {
    outline: none;
  }
`;
// styled ReactsModal have bug in its type,
// and don't see set app method so i ve extended it
type StyledReactModalType = typeof _StyledReactModal & {
  setAppElement: (element: HTMLElement) => void;
};

export const StyledReactModal = _StyledReactModal as StyledReactModalType;

export const StyledExitButton = styled.button`
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
  }
`;
