import styled from "styled-components";
import { ColorType } from "../../../styles/theme";
import { media } from "../../../styles/media";
import { TransitionTypes } from "../../../types/TransitionTypes";

export const StyledTradeForm = styled.form`
  display: flex;
`;

export const StyledCrypto = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const StyledInfoWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  @media ${media.medium} {
    width: 80%;
  }
`;

export const StyledAcquisitionWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  @media ${media.medium} {
    width: 20%;
  }
`;

export const StyledLabel = styled.div`
  flex: 1;
  margin-right: 10px;
`;

interface StyledPriceProps {
  transitionType?: TransitionTypes;
}

export const StyledPrice = styled.span<StyledPriceProps>`
  &.trade-item-enter {
    background-color: ${({ transitionType, theme }) =>
      transitionType === TransitionTypes.lightGreen && theme.color.lightGreen};

    background-color: ${({ transitionType, theme }) =>
      transitionType === TransitionTypes.lightRed && theme.color.lightRed};
  }

  &.trade-item-enter-active {
    transition: 1s linear;
    background-color: white;
  }
`;

export const StyledImg = styled.img`
  margin-right: 10px;
`;

export const StyledSymbol = styled.span``;

export const StyledFee = styled.span`
  flex: 2;
  margin-right: 10px;
  @media ${media.large} {
    display: none;
  }
`;

export const StyledInput = styled.input`
  width: 130px;
  margin-right: 10px;

  @media ${media.medium} {
    width: 100px;
  }

  @media ${media.small} {
    width: 70px;
  }
`;

export const StyledAcquisition = styled.span`
  flex: 2;
  margin-right: 10px;
  @media ${media.medium} {
    display: none;
  }
`;

interface StyledFeeProps {
  color?: ColorType;
}

export const StyledChange = styled.span<StyledFeeProps>`
  flex: 1;
  color: ${({ color }) => color};
  @media ${media.large} {
    display: none;
  }
`;
