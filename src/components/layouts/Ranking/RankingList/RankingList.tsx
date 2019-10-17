import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

import { ROUTES } from "../../../../types/ROUTES";
import { getUsersAssetDetails } from "../../../../utility/getUsersAssetDetails";
import {
  StyledRankItem,
  StyledUserNameWrapper,
  StyledAssetWrapper,
  StyledLinkWrapper,
  StyledLabel
} from "./rankingListStyles";
import { StyledNavLink } from "../../../../styles/common";
import { INITIAL_WALLET_USD } from "../../../../constants/INITIAL_WALLET_USD";
import { ColorType } from "../../../../styles/theme";

interface RankingListProps {
  filteredUsersAssetRank: ReturnType<typeof getUsersAssetDetails>;
}

export const RankingList = ({ filteredUsersAssetRank }: RankingListProps) => {
  const renderRankItems = () =>
    filteredUsersAssetRank.map(({ rank, userName, asset }) => {
      const getColorAsset = (asset: number) => {
        if (asset > INITIAL_WALLET_USD) return ColorType.green;
        else if (asset < INITIAL_WALLET_USD) return ColorType.red;
      };

      return (
        <StyledRankItem key={userName}>
          <StyledUserNameWrapper>
            <StyledLabel>{rank}.</StyledLabel>
            <StyledLabel>{userName}</StyledLabel>
          </StyledUserNameWrapper>
          <StyledAssetWrapper color={getColorAsset(asset)}>
            {asset} $
          </StyledAssetWrapper>
          <StyledLinkWrapper>
            <StyledNavLink to={`${ROUTES.INVESTMENTS}/${userName}`}>
              <FontAwesomeIcon icon={faHandPointer} />
            </StyledNavLink>
          </StyledLinkWrapper>
        </StyledRankItem>
      );
    });
  return <ul>{renderRankItems()}</ul>;
};
