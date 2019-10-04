import React, { useState } from "react";

import { RankingList } from "./RankingList/RankingList";
import { RankingFilter } from "./RankingFilter/RankingFilter";
import { WalletsI } from "../../../customHooks/useWallets";
import { CryptosI } from "../../../redux/reducers/cryptos";
import { getUsersAssetDetails } from "../../../utility//getUsersAssetDetails";
import { filterUsersAsset } from "../../../utility/filterUsersAsset";

interface RankingProps {
  wallets: WalletsI;
  cryptos: CryptosI;
}

export const Ranking = ({ wallets, cryptos }: RankingProps) => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFilterValue(event.currentTarget.value);
  };

  const usersAssetDetails = getUsersAssetDetails(wallets, cryptos);

  const filteredUsersAssetRank = filterUsersAsset(
    usersAssetDetails,
    filterValue
  );
  return (
    <>
      <RankingFilter
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <RankingList filteredUsersAssetRank={filteredUsersAssetRank} />
    </>
  );
};
