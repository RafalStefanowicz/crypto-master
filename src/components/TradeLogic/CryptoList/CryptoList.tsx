import React from "react";
import { CryptosI } from "../../../redux/reducers/cryptos";
import { CRYPTO_TYPES } from "../../../types/CRYPTO_TYPES";
import { TransactionType } from "../TradeLogic";

interface CryptoListProps {
  cryptos: CryptosI;
  transactionType: TransactionType;
  handleInputChange: HandleInputChangeType;
  inputValue: { [key in CRYPTO_TYPES]?: number };
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
    items = Object.keys(cryptos).map(cryptoSymbol => {
      const { FROMSYMBOL, IMAGEURL, PRICE, CHANGEPCT24HOUR } = cryptos[
        cryptoSymbol as CRYPTO_TYPES
      ];
      return (
        <li key={FROMSYMBOL}>
          <form onSubmit={handleTransaction}>
            <img
              style={{ width: "30px", height: "30px" }}
              src={`https://www.cryptocompare.com${IMAGEURL}`}
              alt={FROMSYMBOL}
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
