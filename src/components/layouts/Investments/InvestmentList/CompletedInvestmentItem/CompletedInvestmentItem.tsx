import React from "react";

import { CompletedI } from "../../../../../types/InvestmentsInterfaces";
import { CRYPTO_SYMBOLS } from "../../../../../types/CRYPTO_SYMBOLS";
import { StyledLabel, StyledData, LabelTypes } from "../investmentListStyles";
import { getCurrencyFormat } from "../../../../../utility/numberFormats";
import { getLocaleDate } from "../../../../../utility/getLocaleDate";
import { getRoiColor } from "../../../../../utility/getRoiColor";

export interface CompletedInvestmentItemProps {
  cryptoSymbol: keyof typeof CRYPTO_SYMBOLS;
  investmentTime: string;
  investment: CompletedI;
}

export const CompletedInvestmentItem = ({
  investment,
  cryptoSymbol
}: CompletedInvestmentItemProps) => {
  const {
    buyTime,
    buyPrice,
    sellTime,
    sellPrice,
    sellCryptoAmount,
    roi
  } = investment;

  const buyDate = getLocaleDate(buyTime);
  const sellDate = getLocaleDate(sellTime);

  const crypto = getCurrencyFormat(sellCryptoAmount);
  const sellFor =
    Math.floor(Math.round(sellPrice * sellCryptoAmount * 100)) / 100;

  return (
    <>
      <StyledLabel>
        Sell {crypto} {cryptoSymbol} for {sellFor}$
      </StyledLabel>
      <StyledLabel type={LabelTypes.date}>
        <StyledData>{buyDate}</StyledData>
        {getCurrencyFormat(buyPrice)} $
      </StyledLabel>
      <StyledLabel type={LabelTypes.date}>
        <StyledData>{sellDate}</StyledData>
        {getCurrencyFormat(sellPrice)} $
      </StyledLabel>
      <StyledLabel type={LabelTypes.roi} color={getRoiColor(roi)}>
        {Math.floor(Math.round(roi * 100)) / 100}%
      </StyledLabel>
    </>
  );
};
