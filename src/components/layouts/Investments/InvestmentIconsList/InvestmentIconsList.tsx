import React from "react";
import { Link } from "react-scroll";

import { CRYPTO_SYMBOLS } from "../../../../types/CRYPTO_SYMBOLS";
import { cryptoIcons } from "../../../../constants/cryptoIcons";
import {
  StyledIconItem,
  StyledIconsList,
  StyledIconImg
} from "./investmentIconsListStyles";

interface InvestmentIconsListProps {
  cryptoSymbols: Array<keyof typeof CRYPTO_SYMBOLS>;
}

export const InvestmentIconsList = ({
  cryptoSymbols
}: InvestmentIconsListProps) => {
  const renderIconsList = () =>
    cryptoSymbols.map(cryptoSymbol => (
      <StyledIconItem key={cryptoSymbol}>
        <Link to={cryptoSymbol} spy={true} smooth={true}>
          <StyledIconImg
            src={cryptoIcons[cryptoSymbol]}
            alt={cryptoIcons[cryptoSymbol]}
          ></StyledIconImg>
        </Link>
      </StyledIconItem>
    ));

  return <StyledIconsList>{renderIconsList()}</StyledIconsList>;
};
