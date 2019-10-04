import React from "react";
import { getUsersAssetDetails } from "../../../../utility/getUsersAssetDetails";

interface RankingListProps {
  filteredUsersAssetRank: ReturnType<typeof getUsersAssetDetails>;
}

export const RankingList = ({ filteredUsersAssetRank }: RankingListProps) => {
  const renderRankItems = () =>
    filteredUsersAssetRank.map(userAsset => (
      <li key={userAsset.userName}>
        <span>{userAsset.rank} </span>
        <span>{userAsset.userName} </span>
        <span>{userAsset.asset} </span>
      </li>
    ));
  return <ul>{renderRankItems()}</ul>;
};
