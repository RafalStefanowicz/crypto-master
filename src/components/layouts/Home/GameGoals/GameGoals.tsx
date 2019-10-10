import React from "react";

import { StyledGoalsList, StyledGoalItem } from "./gameGoalsStyle";
import { cryptoIcons } from "../../../../constants/cryptoIcons";
import CryptoIconsList from "./CryptoIconsList/CryptoIconsList";
import { divideObjectValues } from "../../../../utility/divideObjectValues";

export default function GameGoals() {
  const dividedIcons = divideObjectValues(cryptoIcons, 4);
  return (
    <StyledGoalsList>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[0]} />
        Improve your trading skills on a virtual cryptocurrency market
      </StyledGoalItem>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[1]} />
        Trade twenty of the most popular cryptocurrencies
      </StyledGoalItem>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[2]} />
        Compete in the ranking with other users
      </StyledGoalItem>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[3]} />
        Compare your strategy to the most-won users
      </StyledGoalItem>
    </StyledGoalsList>
  );
}
