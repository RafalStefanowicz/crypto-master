import styled, { css } from "styled-components";
import { ColorType } from "../../../../styles/theme";
import { media } from "../../../../styles/media";

export enum InvestedItemTypes {
  header = "header"
}

interface StyledInvestedItemProps {
  type?: InvestedItemTypes;
}

export const StyledInvestedItem = styled.div<StyledInvestedItemProps>`
  margin: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { color } }) => color.navyBlue};

  ${({ type }) =>
    type === InvestedItemTypes.header &&
    css`
      border-bottom: none;
    `}

  @media ${media.large} {
    font-size: ${({ theme: { fontSize } }) => fontSize.mediumSpan};

  }
`;

export enum LabelTypes {
  roi = "roi",
  date = "date"
}

interface StyledLabelProps {
  type?: LabelTypes;
  color?: ColorType;
}

export const StyledLabel = styled.div<StyledLabelProps>`
  flex: 3;
  margin-right: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${({ color }) => color};

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

export const StyledHeaderIcon = styled.div`
  width: 44px;
  height: 44px;
  fill: ${({ theme: { color } }) => color.navyBlue};
`;

export const StyledHeaderImg = styled.img`
  height: 36px;
  color: ${({ theme: { color } }) => color.navyBlue};
`;

export const StyledData = styled.span`
  margin-right: 10px;
`;

export const StyledHeaderName = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCryptoImg = styled.img`
  margin-right: 3px;
`;

export const StyledTopLink = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 42px;

  @media ${media.large} {
    font-size: 36px;
  }

  :hover {
    color: ${({ theme: { color } }) => color.green};
  }
`;
