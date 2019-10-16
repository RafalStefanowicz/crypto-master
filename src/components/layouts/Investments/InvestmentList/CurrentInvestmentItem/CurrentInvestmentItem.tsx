import React from "react";

import { CurrentI } from "../../../../../types/InvestmentsInterfaces";
import { CRYPTO_SYMBOLS } from "../../../../../types/CRYPTO_SYMBOLS";
import { FetchedCryptosI } from "../../../../../redux/reducers/cryptos";
import { StyledLabel, StyledData, LabelTypes } from "../investmentListStyles";
import {
  getCurrencyFormat,
  getCryptoFormat,
  getMoneyFormat
} from "../../../../../utility/numberFormats";
import { getRoiColor } from "../../../../../utility/getRoiColor";
import { getLocaleDate } from "../../../../../utility/getLocaleDate";

export interface CurrentInvestmentItemProps {
  cryptoSymbol: keyof typeof CRYPTO_SYMBOLS;
  investmentTime: string;
  investment: CurrentI;
  cryptos: FetchedCryptosI;
}

export const CurrentInvestmentItem = ({
  investmentTime,
  investment,
  cryptoSymbol,
  cryptos
}: CurrentInvestmentItemProps) => {
  const currentPrice = cryptos[cryptoSymbol].PRICE;
  const roi = getMoneyFormat(currentPrice / investment.buyPrice);
  const buyPrice = getCryptoFormat(investment.buyPrice);
  const date = getLocaleDate(investmentTime);
  const crypto = getCryptoFormat(investment.cryptoAmount);
  const sellFor = getMoneyFormat(buyPrice * crypto);

  return (
    <>
      <StyledLabel>
        Buy {crypto} {cryptoSymbol} for {sellFor}$
      </StyledLabel>
      <StyledLabel type={LabelTypes.date}>
        <StyledData>{date}</StyledData>
        {getCurrencyFormat(buyPrice)} $
      </StyledLabel>
      <StyledLabel type={LabelTypes.date}>
        {getCurrencyFormat(currentPrice)} $
      </StyledLabel>
      <StyledLabel type={LabelTypes.roi} color={getRoiColor(roi)}>
        {getMoneyFormat(roi)}%
      </StyledLabel>
    </>
  );
};
