import styled from "styled-components";
import { media } from "../../../styles/media";

export const StyledStockWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media ${media.xlarge} {
    display: block;
  }
`;

export const StyledTradeWrapper = styled.div`
  flex: 4;
`;

export const StyledStockLabel = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme: { color } }) => color.navyBlue};
  font-size: 26px;

  @media ${media.small} {
    margin-bottom: 10px;
    font-size: 22px;
    text-align: center;
  }
`;

export const StyledCryptoItem = styled.li`
  margin: 10px 0;
`;

export const StyledStockSwitchButtonsWrapper = styled.div`
  margin-bottom: 20px;
`;
