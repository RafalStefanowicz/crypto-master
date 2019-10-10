import styled from "styled-components";
import { device } from "../../../styles/media";

export const StyledStockWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media ${device.mobileL} {
    display: block;
  }
`;

export const StyledWalletWrapper = styled.div`
  flex: 1;
`;

export const StyledTradeWrapper = styled.div`
  flex: 4;
`;

export const StyledStockLabel = styled.h1`
  text-align: center;
`;
