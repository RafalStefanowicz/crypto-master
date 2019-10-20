import React from "react";

import {
  StyledLabel,
  LabelTypes,
  StyledIconDescription,
  StyledRoiWrapper,
  StyledInvestedHeader,
  InvestedHeaderTypes,
  StyledIconWrapper
} from "../investmentListStyles";

import { BuyIcon } from "../../../../../Icons/BuyIcon";
import { SellIcon } from "../../../../../Icons/SellIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHandHoldingUsd
} from "@fortawesome/free-solid-svg-icons";

export enum InvestmentHeaderTypes {
  current = "current",
  completed = "completed"
}

interface InvestmendHeaderProps {
  type: InvestmentHeaderTypes;
}

export const InvestmentHeader = ({ type }: InvestmendHeaderProps) => {
  const isCurrent = type === InvestmentHeaderTypes.current;
  return (
    <>
      <StyledInvestedHeader type={InvestedHeaderTypes.icons}>
        <StyledLabel></StyledLabel>

        <StyledLabel type={LabelTypes.date}>
          <StyledIconWrapper>
            <BuyIcon />
          </StyledIconWrapper>
          <StyledIconDescription>buy</StyledIconDescription>
        </StyledLabel>

        <StyledLabel type={LabelTypes.date}>
          {isCurrent ? (
            <FontAwesomeIcon icon={faDollarSign} />
          ) : (
            <StyledIconWrapper>
              <SellIcon />
            </StyledIconWrapper>
          )}
          <StyledIconDescription>
            {isCurrent ? "now" : "sell"}
          </StyledIconDescription>
        </StyledLabel>

        <StyledLabel type={LabelTypes.roi}>
          <StyledRoiWrapper>
            <FontAwesomeIcon icon={faHandHoldingUsd} />
            <StyledIconDescription>roi</StyledIconDescription>
          </StyledRoiWrapper>
        </StyledLabel>
      </StyledInvestedHeader>
    </>
  );
};
