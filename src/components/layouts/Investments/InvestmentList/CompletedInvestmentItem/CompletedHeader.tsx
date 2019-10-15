import React from "react";

import {
  StyledLabel,
  StyledHeaderIcon,
  StyledHeaderImg,
  LabelTypes
} from "../investmentListStyles";

import roi2 from "../../../../../assets/images/roi2.png";
import SvgBuyIcon from "../../../../../Icons/BuyIcon";
import SvgSellIcon from "../../../../../Icons/SellIcon";

export const CompletedHeader = () => {
  return (
    <>
      <StyledLabel type={LabelTypes.date}>
        <StyledHeaderIcon>
          <SvgBuyIcon />
        </StyledHeaderIcon>
      </StyledLabel>
      <StyledLabel type={LabelTypes.date}>
        <StyledHeaderIcon>
          <SvgSellIcon />
        </StyledHeaderIcon>
      </StyledLabel>
      <StyledLabel type={LabelTypes.roi}>
        <StyledHeaderImg src={roi2}></StyledHeaderImg>
      </StyledLabel>
    </>
  );
};
