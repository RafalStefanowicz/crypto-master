import React from "react";
import usdIcon from "../../../node_modules/cryptocurrency-icons/svg/color/usd.svg";

import { CRYPTO_SYMBOLS } from "../../types/CRYPTO_SYMBOLS";
import { cryptoIcons } from "../../constants/cryptoIcons";
import { WalletType } from "../../redux/reducers/wallet";
import {
  StyledImg,
  StyledWalletWrapper,
  StyledWalletItem,
  StyledWalletAmount,
  StyledWalletCrypto
} from "./walletStyles";
import { StyledStockLabel } from "../layouts/Stock/stockStyles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TradeTransition } from "../TradeTransition/TradeTransition";

interface WalletProps {
  wallet: WalletType;
}

export const Wallet = ({ wallet }: WalletProps) => {
  let cryptoItems = null;
  let usdItem = null;

  if (wallet) {
    const walletKeys = Object.keys(wallet) as Array<
      keyof typeof CRYPTO_SYMBOLS | "USD"
    >;
    cryptoItems = walletKeys.map(crypto => {
      if (crypto === "USD") return null;

      return (
        <CSSTransition
          classNames="wallet-item"
          timeout={{ enter: 2000, exit: 2000 }}
          key={crypto}
        >
          <TradeTransition
            value={wallet[crypto]}
            renderTransitionedElement={transitionType => (
              <StyledWalletItem key={crypto} transitionType={transitionType}>
                <StyledWalletCrypto>
                  <StyledImg src={cryptoIcons[crypto]} alt={crypto}></StyledImg>
                  <span>{CRYPTO_SYMBOLS[crypto]} </span>
                </StyledWalletCrypto>
                <StyledWalletAmount>{wallet[crypto]}</StyledWalletAmount>
              </StyledWalletItem>
            )}
          ></TradeTransition>
        </CSSTransition>
      );
    });

    usdItem = (
      <StyledWalletItem>
        <StyledWalletCrypto>
          <StyledImg src={usdIcon} alt="usd"></StyledImg>
          <span>USD </span>
        </StyledWalletCrypto>
        <StyledWalletAmount>{wallet.USD}</StyledWalletAmount>
      </StyledWalletItem>
    );
  }
  return (
    <StyledWalletWrapper>
      <StyledStockLabel>Wallet</StyledStockLabel>
      <ul>
        {usdItem}
        <TransitionGroup component={null}>{cryptoItems}</TransitionGroup>
      </ul>
    </StyledWalletWrapper>
  );
};
