import React from "react";
import { Link } from "react-scroll";

import { InvestmentIconsList } from "./InvestmentIconsList/InvestmentIconsList";
import { CRYPTO_SYMBOLS } from "../../../types/CRYPTO_SYMBOLS";
import {
  InvestmentsCurrentI,
  InvestmentsCompletedI
} from "../../../types/InvestmentsInterfaces";

interface InvestmentsProps {
  investments: InvestmentsCurrentI | InvestmentsCompletedI;
  renderInvestmentsList: () => JSX.Element;
}

export const Investments = ({
  investments,
  renderInvestmentsList
}: InvestmentsProps) => {
  const cryptoSymbolsList = Object.keys(investments) as Array<
    keyof typeof CRYPTO_SYMBOLS
  >;

  return (
    <div>
      <InvestmentIconsList cryptoSymbols={cryptoSymbolsList} />
      <Link to="investments" spy={true} smooth={true}>
        TOP
      </Link>
      {renderInvestmentsList()}
    </div>
  );
};
