import React from "react";
import { Link } from "react-scroll";

import { CRYPTO_SYMBOLS } from "../../../../types/CRYPTO_SYMBOLS";
import { cryptoIcons } from "../../../../constants/cryptoIcons";

interface InvestmentIconsListProps {
  cryptoSymbols: Array<keyof typeof CRYPTO_SYMBOLS>;
}

export const InvestmentIconsList = ({
  cryptoSymbols
}: InvestmentIconsListProps) => {
  const renderIconsList = () =>
    cryptoSymbols.map(cryptoSymbol => {
      return (
        <li key={cryptoSymbol}>
          <Link to={cryptoSymbol} spy={true} smooth={true}>
            <img
              src={cryptoIcons[cryptoSymbol]}
              alt={cryptoIcons[cryptoSymbol]}
            ></img>
          </Link>
        </li>
      );
    });

  return <ul>{renderIconsList()}</ul>;
};
