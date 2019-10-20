import styled from "styled-components";
import { media } from "./media";

export const StyledInfo = styled.h1`
  color: ${({ theme }) => theme.color.navyBlue};
  text-align: center;
  max-width: 70%;
  margin: 0 auto 20px;
  font-size: 26px;

  @media ${media.small} {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

export const StyledText = styled.span`
  margin: 10px;
`;
