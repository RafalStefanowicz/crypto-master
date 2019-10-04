import React from "react";

import { CompletedI } from "../../../../../types/InvestmentsInterfaces";
import { CRYPTO_SYMBOLS } from "../../../../../types/CRYPTO_SYMBOLS";

export interface CompletedInvestmentItemProps {
  cryptoSymbol: keyof typeof CRYPTO_SYMBOLS;
  investmentTime: string;
  investment: CompletedI;
}

export const CompletedInvestmentItem = ({
  investmentTime,
  investment,
  cryptoSymbol
}: CompletedInvestmentItemProps) => {
  return (
    <li key={investmentTime}>
      <p>{investment.buyTime}</p>
      <p>{investment.buyPrice}</p>
      <p>{investment.sellTime}</p>
      <p>{investment.sellPrice}</p>
      <p>{investment.sellCryptoAmount}</p>
      <p>{investment.roi}</p>
    </li>
  );
};
