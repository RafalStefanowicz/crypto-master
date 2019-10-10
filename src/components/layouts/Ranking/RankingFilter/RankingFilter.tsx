import React from "react";
import { StyledFilterInput } from "./rankingFilterStyles";

interface RankingFilterProps {
  filterValue: string;
  handleFilterChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const RankingFilter = ({
  filterValue,
  handleFilterChange
}: RankingFilterProps) => {
  return (
    <StyledFilterInput
      value={filterValue}
      onChange={handleFilterChange}
      placeholder="find.."
    />
  );
};
