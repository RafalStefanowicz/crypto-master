import styled from "styled-components";
import { TransitionTypes } from "../../types/TransitionTypes";

export const StyledWalletWrapper = styled.div`
  flex: 1;
  max-width: 400px;
`;

interface WalletItemProps {
  transitionType?: TransitionTypes;
}

export const StyledWalletItem = styled.li<WalletItemProps>`
  display: flex;
  align-items: center;
  margin: 10px;

  &.trade-item-enter {
    background-color: ${({ transitionType, theme }) => {
      if (!transitionType) return;
      switch (transitionType) {
        case TransitionTypes.green:
          return theme.color.green;
        case TransitionTypes.red:
          return theme.color.red;
      }
    }};
  }
  &.trade-item-enter-active {
    transition: 2s linear;
    background-color: white;
  }
  &.wallet-item-enter {
    background-color: ${({ theme: { color } }) => color.green};
  }
  &.wallet-item-enter-active {
    transition: 2s;
    background-color: white;
  }
  &.wallet-item-exit {
    opacity: 1;
    background-color: ${({ theme: { color } }) => color.red};
  }
  &.wallet-item-exit-active {
    transition: 2s;
    background-color: white;
    opacity: 0;
  }
`;

export const StyledWalletCrypto = styled.span`
  flex: 4;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const StyledWalletAmount = styled.span`
  flex: 3;
`;

export const StyledImg = styled.img`
  margin-right: 10px;
`;
