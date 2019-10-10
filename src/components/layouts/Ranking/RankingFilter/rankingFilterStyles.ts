import styled from "styled-components";

import { device } from "../../../../styles/media";

export const StyledFilterInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 4px;
  font-size: 24px;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;
