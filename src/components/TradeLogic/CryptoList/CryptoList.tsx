import React from "react";

import { CryptoItemForm } from "./CryptoItemForm/CryptoItemForm";
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
  fee: number;
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
  acqusition,
  fee
}: CryptoListProps) => {
  let items = null;

  if (cryptos) {
    const symbols = Object.keys(cryptos) as Array<keyof typeof CRYPTO_SYMBOLS>;
    const selectedCrypto = Object.keys(inputValue)[0];

    items = symbols.map(cryptoSymbol => {
      const { FROMSYMBOL, PRICE, CHANGEPCT24HOUR } = cryptos[cryptoSymbol];
      const isSelectedCrypto = selectedCrypto === FROMSYMBOL;

      return (
        <CryptoItemForm
          key={cryptoSymbol}
          handleTransaction={handleTransaction}
          handleInputChange={handleInputChange}
          cryptoIcon={cryptoIcons[cryptoSymbol]}
          cryptoSymbol={FROMSYMBOL}
          price={PRICE}
          change24hour={CHANGEPCT24HOUR.toFixed(2)}
          inputValue={isSelectedCrypto ? inputValue[FROMSYMBOL] : ""}
          transactionType={transactionType}
          acqusition={isSelectedCrypto ? acqusition : 0}
          fee={isSelectedCrypto ? fee : 0}
        />
      );
    });
  }
  return <ul>{items}</ul>;
};
