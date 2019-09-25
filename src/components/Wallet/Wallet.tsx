import React from "react";
import usdIcon from "../../../node_modules/cryptocurrency-icons/svg/color/usd.svg";

import { CRYPTO_SYMBOLS } from "../../types/CRYPTO_SYMBOLS";
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
      keyof typeof CRYPTO_SYMBOLS | "USD"
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
          <span>{CRYPTO_SYMBOLS[crypto]} </span>
          <span>{wallet[crypto]}</span>
        </li>
      );
    });

    usdItem = (
      <li>
        <img
          style={{ width: "30px", height: "30px" }}
          src={usdIcon}
          alt="usd"
        ></img>
        <span>USD </span>
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
