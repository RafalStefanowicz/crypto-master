import React from "react";

import { CRYPTO_SYMBOLS } from "../../../../types/CRYPTO_SYMBOLS";
import { cryptoIcons } from "../../../../constants/cryptoIcons";
import {
  InvestmentsCurrentI,
  InvestmentsCompletedI
} from "../../../../types/InvestmentsInterfaces";
import {
  StyledCryptoImg,
  StyledHeaderName,
  StyledInvestedItem,
  StyledLabel,
  InvestedItemTypes
} from "./investmentListStyles";

interface InvestmentListProps {
  investments: InvestmentsCurrentI | InvestmentsCompletedI;
  renderInvestmentItem: any;
  renderCryptoHeader: () => JSX.Element;
}
export const InvestmentList = ({
  investments,
  renderInvestmentItem,
  renderCryptoHeader
}: InvestmentListProps) => {
  const cryptoSymbolsList = Object.keys(investments) as Array<
    keyof typeof CRYPTO_SYMBOLS
  >;

  // Render list of crypto transaction.
  const renderCryptoTransactionsList = () =>
    cryptoSymbolsList.map(cryptoSymbol => {
      const indiviudalTransactions = Object.keys(investments[cryptoSymbol]);

      // Each crypto has its individual list of transaction times
      const renderTransactonsOfIndividualCrypto = () =>
        indiviudalTransactions.map(investmentTime => {
          const investment = investments[cryptoSymbol][Number(investmentTime)];
          return (
            <li key={investmentTime}>
              {renderInvestmentItem({
                investment,
                cryptoSymbol,
                investmentTime
              })}
            </li>
          );
        });

      return (
        <li id={cryptoSymbol} key={cryptoSymbol}>
          <StyledInvestedItem type={InvestedItemTypes.header}>
            <StyledLabel>
              <StyledHeaderName>
                <StyledCryptoImg
                  src={cryptoIcons[cryptoSymbol]}
                  alt={cryptoSymbol}
                ></StyledCryptoImg>
                <span> {CRYPTO_SYMBOLS[cryptoSymbol]}</span>
              </StyledHeaderName>
            </StyledLabel>
            {renderCryptoHeader()}
          </StyledInvestedItem>
          <ul>{renderTransactonsOfIndividualCrypto()}</ul>
        </li>
      );
    });

  return <ul>{renderCryptoTransactionsList()}</ul>;
};
