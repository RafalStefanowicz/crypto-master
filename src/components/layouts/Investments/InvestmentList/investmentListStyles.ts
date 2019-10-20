import styled, { css } from "styled-components";
import { media } from "../../../../styles/media";

export const StyledInvestedItem = styled.li`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { color } }) => color.navyBlue};
`;

export const StyledInvestmentTransactionsItem = styled.li`
  margin-top: 25px;
  :first-child {
    margin-top: 0px;
  }
`;

export enum InvestedHeaderTypes {
  icons = "icons"
}

interface StyledInvestedHeaderProps {
  type?: InvestedHeaderTypes;
}

export const StyledInvestedHeader = styled.div<StyledInvestedHeaderProps>`
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: { color } }) => color.navyBlue};

  ${({ type }) =>
    type === InvestedHeaderTypes.icons &&
    css`
      margin: 0;
    `};
`;

export enum LabelTypes {
  roi = "roi",
  date = "date"
}

interface StyledLabelProps {
  type?: LabelTypes;
}

export const StyledLabel = styled.div<StyledLabelProps>`
  flex: 3;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${({ type }) =>
    type === LabelTypes.roi &&
    css`
      flex: 1;
    `}

  ${({ type }) =>
    type === LabelTypes.date &&
    css`
      @media ${media.small} {
        display: none;
      }
    `};
`;

export const StyledIconWrapper = styled.div`
  height: 18px;
  width: 22px;
  font-size: 18px;

  fill: ${({ theme: { color } }) => color.navyBlue};
`;

export const StyledData = styled.span`
  margin-right: 20px;
`;

export const StyledHeaderName = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCryptoImg = styled.img`
  margin-right: 8px;
`;

export const StyledTopLink = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 42px;

  @media ${media.large} {
    font-size: 36px;
  }

  :hover {
    color: ${({ theme: { color } }) => color.green};
  }
`;

export const StyledIconDescription = styled.span`
  margin-left: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const StyledRoiWrapper = styled.span`
  display: flex;
  align-items: center;

  @media ${media.small} {
    display: none;
  }
`;

export const StyledSwitchButtonsWrapper = styled.div`
  margin: 20px auto;

  @media ${media.small} {
    margin: 10px auto;
  }
`;
