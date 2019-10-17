import styled from "styled-components";

import { ColorType } from "../../../../styles/theme";
import { media } from "../../../../styles/media";

export const StyledRankItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 14px 0;
  align-items: center;
  font-size: 20px;

  @media ${media.small} {
    font-size: 14px;
  }
`;
export const StyledRankWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
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
  @media ${media.small} {
    text-align: left;
  }
`;

export const StyledLabel = styled.span`
  margin-right: 2px;
`;
