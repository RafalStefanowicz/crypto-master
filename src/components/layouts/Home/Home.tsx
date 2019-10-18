import React from "react";

import { ForwardButton } from "../../ForwardButton/ForwardButton";
import GameGoals from "./GameGoals/GameGoals";
import { StyledHomeWrapper } from "./homeStyles";

const Home = () => {
  return (
    <StyledHomeWrapper>
      <GameGoals />
      <ForwardButton />
    </StyledHomeWrapper>
  );
};

export default Home;
