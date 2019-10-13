import styled from "styled-components";
import { media } from "../../styles/media";

export const StyledMain = styled.main`
  max-width: 1600px;
  margin: 40px auto;

  @media ${media.small} {
    margin-top: 10px;
  }
`;

export const StyledMainInner = styled.div`
  margin: 0 20px;

  @media ${media.small} {
    margin: 0 4px;
  }
`;
