import React from "react";

import { StyledGoalsList, StyledGoalItem, StyledGoal } from "../homeStyles";
import { cryptoIcons } from "../../../../constants/cryptoIcons";
import CryptoIconsList from "./CryptoIconsList/CryptoIconsList";
import { divideObjectValues } from "../../../../utility/divideObjectValues";

export default function GameGoals() {
  const dividedIcons = divideObjectValues(cryptoIcons, 4);
  return (
    <StyledGoalsList>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[0]} />
        <StyledGoal>
          Improve your trading skills on a virtual cryptocurrency market
        </StyledGoal>
      </StyledGoalItem>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[1]} />
        <StyledGoal>
          Trade twenty of the most popular cryptocurrencies
        </StyledGoal>
      </StyledGoalItem>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[2]} />
        <StyledGoal>Compete in the ranking with other users</StyledGoal>
      </StyledGoalItem>
      <StyledGoalItem>
        <CryptoIconsList iconsList={dividedIcons[3]} />
        <StyledGoal>Compare your strategy to the most-won users</StyledGoal>
      </StyledGoalItem>
    </StyledGoalsList>
  );
}
