import React from "react";

interface RankingFilterProps {
  filterValue: string;
  handleFilterChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const RankingFilter = ({
  filterValue,
  handleFilterChange
}: RankingFilterProps) => {
  return <input value={filterValue} onChange={handleFilterChange} />;
};
