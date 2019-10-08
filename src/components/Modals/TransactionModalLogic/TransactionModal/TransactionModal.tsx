import React from "react";
import { Modal } from "../../Modal/Modal";
import { TransactionType } from "../../../TradeLogic/TradeLogic";

interface TransactionModalProps {
  transactionType: TransactionType;
  cryptoAmount: number;
  usdAmount: number;
  cryptoSymbol: string;
  fee: number;
  timeLeft: number;
  handleAccept: () => void;
}

export const TransactionModal = ({
  timeLeft,
  transactionType,
  cryptoAmount,
  cryptoSymbol,
  usdAmount,
  fee,
  handleAccept
}: TransactionModalProps) => {
  return (
    <Modal>
      <>
        <h1>{timeLeft}</h1>
        <span>{`Do you want to ${transactionType} `}</span>
        <span>{cryptoAmount} </span>
        <span>{cryptoSymbol} </span>
        <span>for </span>
        <span>{usdAmount} $ </span>
        <span>?</span>
        <p>{`Fee included: ${fee} $`}</p>
        <button onClick={handleAccept}>{transactionType}</button>
      </>
    </Modal>
  );
};
