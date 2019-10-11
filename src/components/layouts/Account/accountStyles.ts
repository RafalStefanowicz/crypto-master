import styled from "styled-components";
import { media } from "../../../styles/media";

export const StyledProviderWrapper = styled.div`
  margin-top: 24px;
  height: 200px;

  @media ${media.small} {
    font-size: ${({ theme: { fontSize } }) => fontSize.smallSpan};
    height: 160px;
  }
`;

export const StyledUserName = styled.h1`
  margin: 30px 0 6px;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.largeHeading};
  color: ${({ theme: { color } }) => color.navyBlue};

  @media ${media.small} {
    font-size: ${({ theme: { fontSize } }) => fontSize.smallHeading};
  }
`;

export const StyledEmail = styled.p`
  margin: 6px;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.largeP};

  @media ${media.small} {
    font-size: ${({ theme: { fontSize } }) => fontSize.smallP};
  }
`;
