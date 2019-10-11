import styled from "styled-components";
import { media } from "../../../../styles/media";

export const ProviderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
`;

export const ProviderLabel = styled.span``;

export const ProviderImage = styled.img`
  margin: 4px;
  max-height: 50px;

  @media ${media.small} {
    max-height: 35px;
  }
`;
