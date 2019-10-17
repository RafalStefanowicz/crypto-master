import styled from "styled-components";
import { media } from "../../../styles/media";

export const StyledStockWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media ${media.xlarge} {
    display: block;
  }

  @media ${media.small} {
    font-size: 16px;
  }
`;

export const StyledTradeWrapper = styled.div`
  flex: 4;
`;

export const StyledStockLabel = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme: { color } }) => color.navyBlue};
`;

export const StyledCryptoItem = styled.li`
  margin: 10px 0;
`;
