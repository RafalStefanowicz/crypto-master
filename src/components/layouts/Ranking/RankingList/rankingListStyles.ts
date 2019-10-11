import styled from "styled-components";

import { ColorType } from "../../../../styles/theme";
import { device } from "../../../../styles/media";

export const StyledRankItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  align-items: center;
`;
export const StyledRankList = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  font-size: 24px;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

interface StyledAssetWrapperProps {
  color?: ColorType;
}

export const StyledAssetWrapper = styled.span<StyledAssetWrapperProps>`
  flex: 2;
  color: ${({ color }) => color};
`;

export const StyledUserNameWrapper = styled.span`
  flex: 3;
  display: flex;
  align-items: center;
`;

export const StyledLinkWrapper = styled.span`
  flex: 1;
  text-align: center;
  @media ${device.mobileL} {
    text-align: left;
  }
`;

export const StyledLabel = styled.span`
  margin-right: 2px;
`;