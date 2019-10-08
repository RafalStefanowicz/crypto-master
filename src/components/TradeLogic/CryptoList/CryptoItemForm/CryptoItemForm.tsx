import React from "react";

import { TransactionType } from "../../TradeLogic";
import { InputValueType } from "../../TradeLogic";
import { HandleInputChangeType } from "../CryptoList";

interface CryptoItemFormProps {
  transactionType: TransactionType;
  handleInputChange: HandleInputChangeType;
  inputValue: string;
  handleTransaction: (e: React.FormEvent) => void;
  acqusition: number;
  fee: number;
  price: number;
  cryptoSymbol: string;
  cryptoIcon: string;
  change24hour: string;
}

const _CryptoItemForm = ({
  handleTransaction,
  handleInputChange,
  cryptoIcon,
  cryptoSymbol,
  price,
  change24hour,
  inputValue,
  transactionType,
  acqusition,
  fee
}: CryptoItemFormProps) => {
  return (
    <form onSubmit={handleTransaction}>
      <img
        style={{ width: "30px", height: "30px" }}
        src={cryptoIcon}
        alt={cryptoIcon}
      ></img>
      <span>{`${cryptoSymbol} `}</span>
      <span>{price} $</span>
      <span> 24h: {change24hour}%</span>
      <input
        name={cryptoSymbol}
        value={inputValue}
        type="number"
        placeholder={
          transactionType === TransactionType.buy
            ? "USD.."
            : `${cryptoSymbol}..`
        }
        onChange={handleInputChange}
      />
      {inputValue ? (
        <>
          <span>{`${acqusition} ${
            transactionType === TransactionType.buy ? cryptoSymbol : "usd"
          }`}</span>
          <span> {fee}$ fee</span>
          <button>{transactionType}</button>
        </>
      ) : null}
    </form>
  );
};

const propsAreEqual = (
  { price: prevPrice, inputValue: prevInpupValue }: CryptoItemFormProps,
  { inputValue: nextInpupValue, price: nextPrice }: CryptoItemFormProps
) => prevPrice === nextPrice && prevInpupValue === nextInpupValue;

export const CryptoItemForm = React.memo(_CryptoItemForm, propsAreEqual);
