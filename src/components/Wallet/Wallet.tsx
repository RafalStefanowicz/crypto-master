import React from "react";
import BTC from "../../../node_modules/cryptocurrency-icons/svg/black/btc.svg";

import { cryptoSymbols } from "../../constants/cryptoSymbols";
import { cryptoIcons } from "../../constants/cryptoIcons";
import { WalletType } from "../../redux/reducers/wallet";

interface WalletProps {
  wallet: WalletType;
}

export const Wallet = ({ wallet }: WalletProps) => {
  let cryptoItems = null;
  let usdItem = null;
  if (wallet) {
    const walletKeys = Object.keys(wallet) as Array<
      keyof typeof cryptoSymbols | "USD"
    >;
    cryptoItems = walletKeys.map(crypto => {
      if (crypto === "USD") return null;
      return (
        <li key={crypto}>
          <img
            style={{ width: "30px", height: "30px" }}
            src={cryptoIcons[crypto]}
            alt={crypto}
          ></img>
          <span>{cryptoSymbols[crypto]} </span>
          <span>{wallet[crypto]}</span>
        </li>
      );
    });

    usdItem = (
      <li>
        <span>USD</span>
        <span>{wallet.USD}</span>
      </li>
    );
  }
  return (
    <ul>
      {usdItem}
      {cryptoItems}
    </ul>
  );
};
