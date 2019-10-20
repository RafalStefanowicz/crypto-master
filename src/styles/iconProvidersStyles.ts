import styled from "styled-components";

import GoogleIcon from "../Icons/GoogleIcon";

export const StyledGoogleIcon = styled(GoogleIcon)`
  width: 30px;
  height: 30px;
  margin: 0 5px;
`;

export const StyledIconWrapper = styled.div`
  font-size: 30px;
  line-height: 30px;
  margin: 0 5px;
  transition: 370ms ease-in-out;

  :hover {
    color: #3a559f;
  }
`;
