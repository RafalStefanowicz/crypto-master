import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";

import { InvestmentIconsList } from "./InvestmentIconsList/InvestmentIconsList";
import { CRYPTO_SYMBOLS } from "../../../types/CRYPTO_SYMBOLS";
import {
  InvestmentsCurrentI,
  InvestmentsCompletedI
} from "../../../types/InvestmentsInterfaces";
import { StyledTopLink } from "./InvestmentList/investmentListStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

interface InvestmentsProps {
  investments: InvestmentsCurrentI | InvestmentsCompletedI;
  renderInvestmentsList: () => JSX.Element;
}

export const Investments = ({
  investments,
  renderInvestmentsList
}: InvestmentsProps) => {
  const iconsList = useRef<HTMLDivElement>(null);
  const [iconsVisible, setIconsVisible] = useState(true);

  const listener = () => {
    if (!iconsList.current) return;
    const rect = iconsList.current.getBoundingClientRect();
    setIconsVisible(!(rect.bottom < 0));
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const cryptoSymbolsList = Object.keys(investments) as Array<
    keyof typeof CRYPTO_SYMBOLS
  >;

  return (
    <>
      <div ref={iconsList}>
        <InvestmentIconsList cryptoSymbols={cryptoSymbolsList} />
      </div>
      {!iconsVisible && (
        <StyledTopLink>
          <Link to="investments" spy={true} smooth={true}>
            <FontAwesomeIcon icon={faArrowCircleUp}></FontAwesomeIcon>
          </Link>
        </StyledTopLink>
      )}
      {renderInvestmentsList()}
    </>
  );
};
