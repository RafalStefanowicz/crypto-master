import React from "react";

import { ForwardButton } from "../../ForwardButton/ForwardButton";
import GameGoals from "./GameGoals/GameGoals";

const Home = () => {
  return (
    <>
      <GameGoals />
      <ForwardButton />
    </>
  );
};

export default Home;
