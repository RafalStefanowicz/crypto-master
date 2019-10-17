import styled from "styled-components";
import { media } from "../../../styles/media";

export const StyledProviderWrapper = styled.div`
  margin-top: 24px;
  height: 200px;

  @media ${media.small} {
    height: 160px;
  }
`;

export const StyledUserName = styled.h1`
  margin: 30px 0 6px;
  text-align: center;
  color: ${({ theme: { color } }) => color.navyBlue};
`;

export const StyledEmail = styled.p`
  margin: 6px;
  text-align: center;
  font-size: 20px;
`;
