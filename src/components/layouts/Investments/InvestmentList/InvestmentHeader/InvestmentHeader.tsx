import React from "react";

import {
  StyledLabel,
  StyledIconWrapper,
  StyledHeaderImg,
  LabelTypes,
  StyledIconDescription,
  StyledRoiWrapper,
  IconWrapperTypes,
  StyledInvestedHeader,
  InvestedHeaderTypes
} from "../investmentListStyles";

import roi2 from "../../../../../assets/images/roi2.png";
import SvgBuyIcon from "../../../../../Icons/BuyIcon";
import SvgSellIcon from "../../../../../Icons/SellIcon";
import TodayIcon from "../../../../../Icons/TodayIcon";

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
            <SvgBuyIcon />
          </StyledIconWrapper>
          <StyledIconDescription>buy</StyledIconDescription>
        </StyledLabel>
        <StyledLabel type={LabelTypes.date}>
          <StyledIconWrapper
            type={isCurrent ? IconWrapperTypes.small : undefined}
          >
            {isCurrent ? <TodayIcon /> : <SvgSellIcon />}
          </StyledIconWrapper>
          <StyledIconDescription>
            {isCurrent ? "now" : "sell"}
          </StyledIconDescription>
        </StyledLabel>
        <StyledLabel type={LabelTypes.roi}>
          <StyledRoiWrapper>
            <StyledHeaderImg src={roi2}></StyledHeaderImg>
            <StyledIconDescription>roi</StyledIconDescription>
          </StyledRoiWrapper>
        </StyledLabel>
      </StyledInvestedHeader>
    </>
  );
};
