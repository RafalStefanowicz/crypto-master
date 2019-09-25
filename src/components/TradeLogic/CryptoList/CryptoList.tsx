import React from "react";

import { cryptoIcons } from "../../../constants/cryptoIcons";
import { CRYPTO_SYMBOLS } from "../../../types/CRYPTO_SYMBOLS";
import { CryptosI } from "../../../redux/reducers/cryptos";
import { TransactionType } from "../TradeLogic";
import { InputValueType } from "../TradeLogic";

interface CryptoListProps {
  cryptos: CryptosI;
  transactionType: TransactionType;
  handleInputChange: HandleInputChangeType;
  inputValue: InputValueType;
  handleTransaction: (e: React.FormEvent) => void;
  acqusition: number;
}

export type HandleInputChangeType = (
  event: React.FormEvent<HTMLInputElement>
) => void;

export const CryptoList = ({
  cryptos,
  transactionType,
  handleInputChange,
  inputValue,
  handleTransaction,
  acqusition
}: CryptoListProps) => {
  let items = null;

  if (cryptos) {
    const symbols = Object.keys(cryptos) as Array<keyof typeof CRYPTO_SYMBOLS>;

    items = symbols.map(cryptoSymbol => {
      const { FROMSYMBOL, PRICE, CHANGEPCT24HOUR } = cryptos[cryptoSymbol];

      return (
        <li key={FROMSYMBOL}>
          <form onSubmit={handleTransaction}>
            <img
              style={{ width: "30px", height: "30px" }}
              src={cryptoIcons[cryptoSymbol]}
              alt={cryptoIcons[cryptoSymbol]}
            ></img>
            <span>{`${FROMSYMBOL} `}</span>
            <span>{PRICE} $</span>
            <span> 24h: {CHANGEPCT24HOUR.toFixed(2)}%</span>
            <input
              name={FROMSYMBOL}
              type="number"
              placeholder={
                transactionType === TransactionType.buy
                  ? "USD.."
                  : `${FROMSYMBOL}..`
              }
              onChange={handleInputChange}
              value={inputValue[FROMSYMBOL] || ""}
            />
            {cryptoSymbol in inputValue ? (
              <>
                <span>{`${acqusition} ${
                  transactionType === TransactionType.buy ? FROMSYMBOL : "usd"
                }`}</span>
                <button>{transactionType}</button>
              </>
            ) : null}
          </form>
        </li>
      );
    });
  }
  return <ul>{items}</ul>;
};
