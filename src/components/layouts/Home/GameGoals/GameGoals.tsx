import React from "react";

import { StyledList, StyledItem } from "./gameGoalsStyle";
import { cryptoIcons } from "../../../../constants/cryptoIcons";
import CryptoIconsList from "./CryptoIconsList/CryptoIconsList";
import { divideObjectValues } from "../../../../utility/divideObjectValues";

export default function GameGoals() {
  const dividedIcons = divideObjectValues(cryptoIcons, 4);
  return (
    <StyledList>
      <StyledItem>
        <CryptoIconsList iconsList={dividedIcons[0]} />
        Improve your trading skills on a virtual cryptocurrency market
      </StyledItem>
      <StyledItem>
        <CryptoIconsList iconsList={dividedIcons[1]} />
        Trade twenty of the most popular cryptocurrencies
      </StyledItem>
      <StyledItem>
        <CryptoIconsList iconsList={dividedIcons[2]} />
        Compete in the ranking with other users
      </StyledItem>
      <StyledItem>
        <CryptoIconsList iconsList={dividedIcons[3]} />
        Compare your strategy to the most-won users
      </StyledItem>
    </StyledList>
  );
}
