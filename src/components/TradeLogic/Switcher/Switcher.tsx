import React from "react";

import { TransactionType } from "../TradeLogic";
interface SwitcherProps {
  handleSwitch: (transactionType: TransactionType) => void;
}

export const Switcher = ({ handleSwitch }: SwitcherProps) => {
  return (
    <div>
      <button
        onClick={() => {
          handleSwitch(TransactionType.buy);
        }}
      >
        {TransactionType.buy}
      </button>
      <button
        onClick={() => {
          handleSwitch(TransactionType.sell);
        }}
      >
        {TransactionType.sell}
      </button>
    </div>
  );
};
