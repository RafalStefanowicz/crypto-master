import styled, { css } from "styled-components";
import { ColorType } from "../../../../styles/theme";
import { media } from "../../../../styles/media";

export const StyledInvestedItem = styled.li`
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { color } }) => color.navyBlue};
`;
export enum InvestedHeaderTypes {
  icons = "icons"
}

interface StyledInvestedHeaderProps {
  type?: InvestedHeaderTypes;
}

export const StyledInvestedHeader = styled.div<StyledInvestedHeaderProps>`
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  color?: ColorType;
}

export const StyledLabel = styled.div<StyledLabelProps>`
  flex: 3;
  margin-right: 10px;
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

export enum IconWrapperTypes {
  small = "small"
}

interface IconWrapperProps {
  type?: IconWrapperTypes;
}

export const StyledIconWrapper = styled.div<IconWrapperProps>`
  width: 36px;
  height: 36px;
  margin-right: 5px;

  fill: ${({ theme: { color } }) => color.navyBlue};

  ${({ type }) =>
    type === IconWrapperTypes.small &&
    css`
      height: 28px;
      width: 28px;
      margin-right: 10px;
    `}
`;

export const StyledHeaderImg = styled.img`
  height: 28px;
  margin-right: 5px;
  color: ${({ theme: { color } }) => color.navyBlue};
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
  letter-spacing: 2px;
  color: ${({ theme: { color } }) => color.navyBlue};
  text-transform: uppercase;
`;

export const StyledRoiWrapper = styled.span`
  display: flex;
  align-items: center;

  @media ${media.small} {
    display: none;
  }
`;
