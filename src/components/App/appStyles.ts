import styled from "styled-components";
import { media } from "../../styles/media";

export const StyledMain = styled.main`
  max-width: 1300px;
  margin: 80px auto;
  padding: 0 20px;

  @media ${media.small} {
    margin: 64px auto;
    padding: 0 15px;
  }
`;
