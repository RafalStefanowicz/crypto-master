import React from "react";

import { CurrentI } from "../../../../../types/InvestmentsInterfaces";
import { CRYPTO_SYMBOLS } from "../../../../../types/CRYPTO_SYMBOLS";

export interface CurrentInvestmentItemProps {
  cryptoSymbol: keyof typeof CRYPTO_SYMBOLS;
  investmentTime: string;
  investment: CurrentI;
}

export const CurrentInvestmentItem = ({
  investmentTime,
  investment,
  cryptoSymbol
}: CurrentInvestmentItemProps) => {
  return (
    <>
      <span>{investmentTime} </span>
      <span>{`${investment.cryptoAmount} ${cryptoSymbol}`} </span>
      <span>{`for ${investment.buyPrice} usd`}</span>
    </>
  );
};
